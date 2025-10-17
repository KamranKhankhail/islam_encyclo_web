"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { Box } from "@mui/material";

export default function ResponsiveYouTubePlayer({
  videoId,
  autoplay = 1,
  mute = 1,
  loop = 1,
  controls = 0,
  disablekb = 1,
  modestbranding = 1,
  iv_load_policy = 3,
  fs = 0,
  rel = 0,
  showinfo = 0,
  vq = "hd1080",
  initialDelayMs = 3000, // Duration for initial animation
  onVideoEndAnimation, // Prop for the custom animation component
}) {
  const playerDivRef = useRef(null);
  const playerInstanceRef = useRef(null);
  const initialOverlayTimeoutRef = useRef(null); // Ref to store initial overlay timeout ID

  const [videoState, setVideoState] = useState("UNSTARTED");
  const [isLoadingApi, setIsLoadingApi] = useState(true);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [showInitialOverlay, setShowInitialOverlay] = useState(true); // Show overlay at start
  const [showEndOverlay, setShowEndOverlay] = useState(false); // Show overlay at end

  const onPlayerReady = useCallback(
    (event) => {
      setIsPlayerReady(true);
      if (playerInstanceRef.current) {
        playerInstanceRef.current.mute(); // Always mute on ready
        // IMPORTANT: We rely *solely* on playerVars.autoplay for initial playback.
        // No explicit playVideo() call here. Video starts playing from t=0 if autoplay is true.
      }

      // After initialDelayMs, hide the initial overlay. Video has been playing all along.
      initialOverlayTimeoutRef.current = setTimeout(() => {
        setShowInitialOverlay(false);
      }, initialDelayMs);
    },
    [initialDelayMs]
  ); // autoplay is no longer a direct dependency here, as it's handled by playerVars

  const onPlayerStateChange = useCallback(
    (event) => {
      switch (event.data) {
        case window.YT.PlayerState.ENDED:
          setVideoState("ENDED");
          setShowEndOverlay(true); // Show end overlay
          if (loop) {
            // Restart video after 3 seconds of end animation
            setTimeout(() => {
              if (playerInstanceRef.current) {
                playerInstanceRef.current.seekTo(0, true); // Seek to beginning for seamless loop
                playerInstanceRef.current.playVideo(); // Play again
                setVideoState("PLAYING");
                setShowEndOverlay(false); // Hide end overlay after restart
              }
            }, 3000); // Duration for end animation
          }
          break;
        case window.YT.PlayerState.PLAYING:
          setVideoState("PLAYING");
          // Clear initial overlay timeout if video starts playing (in case it wasn't already cleared)
          if (initialOverlayTimeoutRef.current) {
            clearTimeout(initialOverlayTimeoutRef.current);
            initialOverlayTimeoutRef.current = null;
          }
          setShowInitialOverlay(false); // Ensure initial overlay is off
          setShowEndOverlay(false); // Ensure end overlay is off if playback resumes
          break;
        case window.YT.PlayerState.PAUSED:
          setVideoState("PAUSED");
          break;
        case window.YT.PlayerState.BUFFERING:
          setVideoState("BUFFERING");
          break;
        case window.YT.PlayerState.CUED:
          setVideoState("CUED");
          break;
        default:
          setVideoState("UNSTARTED");
          break;
      }
    },
    [loop, initialDelayMs]
  );

  useEffect(() => {
    const YOUTUBE_API_SCRIPT_ID = "youtube-iframe-api";

    const loadYouTubeAPI = () => {
      if (!document.getElementById(YOUTUBE_API_SCRIPT_ID)) {
        setIsLoadingApi(true);
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.id = YOUTUBE_API_SCRIPT_ID;
        document.head.appendChild(tag);
      } else {
        setIsLoadingApi(false);
      }
    };

    const initializePlayer = () => {
      if (window.YT && playerDivRef.current && !playerInstanceRef.current) {
        playerInstanceRef.current = new window.YT.Player(playerDivRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: autoplay ? 1 : 0, // Pass autoplay prop directly here
            mute: 1, // Always start muted
            controls: 0,
            disablekb: 1,
            modestbranding: 1,
            iv_load_policy: 3,
            fs: 0,
            rel: 0,
            showinfo: 0,
            vq: vq,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      } else if (
        playerInstanceRef.current &&
        videoId &&
        videoId !== playerInstanceRef.current.getVideoData().video_id
      ) {
        // If player exists but videoId changed, load new video
        playerInstanceRef.current.loadVideoById(videoId, 0, vq);
        setShowInitialOverlay(true); // Show initial overlay for new video
        setIsPlayerReady(false);
        // Clear old timeout and set new one for the new video
        if (initialOverlayTimeoutRef.current) {
          clearTimeout(initialOverlayTimeoutRef.current);
          initialOverlayTimeoutRef.current = null;
        }
        initialOverlayTimeoutRef.current = setTimeout(() => {
          setShowInitialOverlay(false);
        }, initialDelayMs);
      }
      setIsLoadingApi(false);
    };

    window.onYouTubeIframeAPIReady = () => {
      initializePlayer();
    };

    if (window.YT && !isLoadingApi) {
      initializePlayer();
    } else {
      loadYouTubeAPI();
    }

    // Polling for end animation: Check if video is within last 3 seconds
    const interval = setInterval(() => {
      if (
        playerInstanceRef.current &&
        isPlayerReady &&
        videoState === window.YT.PlayerState.PLAYING
      ) {
        const currentTime = playerInstanceRef.current.getCurrentTime();
        const duration = playerInstanceRef.current.getDuration();
        // Trigger end overlay if within the last 3 seconds of the video
        // Ensure duration is valid and not zero to prevent NaN issues
        if (
          duration > 0 &&
          duration - currentTime <= 3 &&
          duration - currentTime > 0
        ) {
          setShowEndOverlay(true);
        } else if (showEndOverlay) {
          // Hide if it's no longer in the last 3 seconds (e.g., after loop)
          setShowEndOverlay(false);
        }
      }
    }, 250); // Check every 250ms

    return () => {
      clearInterval(interval); // Clear interval on unmount
      if (initialOverlayTimeoutRef.current) {
        clearTimeout(initialOverlayTimeoutRef.current);
        initialOverlayTimeoutRef.current = null;
      }
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
        playerInstanceRef.current = null;
      }
    };
  }, [
    videoId,
    autoplay,
    onPlayerReady,
    onPlayerStateChange,
    isLoadingApi,
    initialDelayMs,
    isPlayerReady,
    videoState,
  ]);

  // Determine if any overlay should be shown (initial loading, API loading, buffering, or end animation)
  const showAnyOverlay =
    isLoadingApi ||
    showInitialOverlay ||
    videoState === "BUFFERING" ||
    videoState === "UNSTARTED" ||
    showEndOverlay;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      {/* This div is where the YouTube player will be embedded */}
      <Box
        ref={playerDivRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: "none",
          transform: "scale(1.02)", // Slightly scale up to fill any tiny gaps/black bars
          transformOrigin: "center center",
          zIndex: 2147483646, // Video player's z-index (underneath the overlay when active)
        }}
      />

      {/* Dynamic Overlay for Initial Animation, Loading, Buffering, and End Animation */}
      {showAnyOverlay && onVideoEndAnimation && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2147483647, // Max z-index to cover all YouTube UI and be on top of the video
            borderRadius: "10px",
          }}
        >
          {onVideoEndAnimation}
        </Box>
      )}
    </Box>
  );
}
