// "use client";

// import { useState, useEffect } from "react";
// import { Box, Typography } from "@mui/material";
// import dynamic from "next/dynamic";
// import { useBubblesManager } from "@/hooks/useBubblesManager";

// // ✅ Dynamically import react-youtube only on client
// const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

// export default function FeatureVideoWithOverlay({
//   videoId,
//   featureIndex,
//   reverseOrder = true,
// }) {
//   const [showOverlay, setShowOverlay] = useState(true);
//   const [elapsed, setElapsed] = useState(0);
//   const [videoDuration, setVideoDuration] = useState(0);
//   const [status, setStatus] = useState("initializing");
//   const [isClient, setIsClient] = useState(false);

//   const particlesContainerId = `bubbles-${featureIndex}`;
//   const bubblesRef = useBubblesManager(particlesContainerId);

//   // ✅ Make sure we're running on client only
//   useEffect(() => {
//     setIsClient(true);
//   }, []);

//   const handleReady = (event) => {
//     const player = event.target;
//     setStatus("ready");
//     try {
//       player.mute();
//       player.setPlaybackRate(0.8);
//       player.playVideo();
//       const dur = player.getDuration();
//       setVideoDuration(dur);
//     } catch (e) {
//       setStatus("error");
//     }
//   };

//   const handleStateChange = (event) => {
//     const player = event.target;
//     const state = event.data;

//     if (state === 3) {
//       setStatus("buffering");
//       setShowOverlay(true);
//     }

//     if (state === 1) {
//       // playing
//       setStatus("playing");
//       const dur = player.getDuration();
//       setVideoDuration(dur);
//       setShowOverlay(true);
//       const hideTimer = setTimeout(() => setShowOverlay(false), 500);

//       if (player._interval) clearInterval(player._interval);
//       const interval = setInterval(() => {
//         const current = player.getCurrentTime();
//         setElapsed(current.toFixed(1));
//         if (dur - current <= 0.5) setShowOverlay(true);
//       }, 100);
//       player._interval = interval;
//       player._hideTimer = hideTimer;
//     }

//     if (state === 0) {
//       setStatus("ended");
//       setShowOverlay(true);
//       player.seekTo(0);
//       player.playVideo();
//     }

//     if (state !== 1) {
//       if (player._interval) {
//         clearInterval(player._interval);
//         player._interval = null;
//       }
//       if (player._hideTimer) {
//         clearTimeout(player._hideTimer);
//         player._hideTimer = null;
//       }
//     }
//   };

//   return (
//     <Box sx={{ width: "100%", position: "relative", borderRadius: "18px" }}>
//       <Box
//         sx={{
//           position: "relative",
//           width: "100%",
//           aspectRatio: "16 / 9",
//           overflow: "hidden",
//           borderRadius: "16px",
//           boxShadow: "0 8px 20px #00968778",
//           backgroundColor: "black",
//         }}
//       >
//         {isClient && videoId ? (
//           <>
//             {/* YouTube Player */}
//             <Box sx={{ position: "absolute", inset: -2 }}>
//               <YouTube
//                 videoId={videoId}
//                 opts={{
//                   playerVars: {
//                     autoplay: 1,
//                     controls: 0,
//                     mute: 1,
//                     loop: 1,
//                     playlist: videoId,
//                     rel: 0,
//                     modestbranding: 1,
//                     disablekb: 1,
//                     iv_load_policy: 3,
//                     playsinline: 1,
//                   },
//                 }}
//                 onReady={handleReady}
//                 onStateChange={handleStateChange}
//                 iframeClassName="youtube-iframe"
//               />
//             </Box>

//             <style jsx global>{`
//               .youtube-iframe {
//                 position: absolute;
//                 top: 0;
//                 left: 0;
//                 width: 100% !important;
//                 height: 100% !important;
//                 object-fit: cover;
//                 transform: scale(1.02);
//                 border: none;
//                 border-radius: 16px;
//               }
//             `}</style>

//             {/* Overlay background */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 inset: 0,
//                 zIndex: 2,
//                 opacity: showOverlay ? 1 : 0,
//                 transition: "opacity 0.5s ease-in-out",
//                 backgroundImage: "url('/images/headerBgWithParticles.png')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             />

//             {/* Bubbles */}
//             <Box
//               ref={bubblesRef}
//               id={particlesContainerId}
//               sx={{
//                 position: "absolute",
//                 inset: 0,
//                 zIndex: 3,
//                 opacity: showOverlay ? 1 : 0,
//                 transition: "opacity 0.5s ease-in-out",
//                 pointerEvents: "none",
//               }}
//             />

//             {/* Transparent click blocker */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 inset: 0,
//                 zIndex: 4,
//                 bgcolor: "transparent",
//                 pointerEvents: "auto",
//               }}
//             />

//             {/* Status Debug */}
//             {/* <Typography
//               sx={{
//                 position: "absolute",
//                 bottom: 8,
//                 left: 8,
//                 zIndex: 5,
//                 color: "#fff",
//                 fontSize: "13px",
//                 background: "rgba(0,0,0,0.55)",
//                 px: 1,
//                 py: 0.4,
//                 borderRadius: "6px",
//                 fontFamily: "monospace",
//                 pointerEvents: "none",
//               }}
//             >
//               {`[Feature ${featureIndex}] ${status.toUpperCase()} • ${elapsed}s / ${
//                 videoDuration || "?"
//               }s`}
//             </Typography> */}
//           </>
//         ) : (
//           <Box
//             ref={bubblesRef}
//             id={particlesContainerId}
//             sx={{
//               position: "absolute",
//               inset: 0,
//               zIndex: 3,
//               opacity: showOverlay ? 1 : 0,
//               transition: "opacity 0.5s ease-in-out",
//               pointerEvents: "none",
//             }}
//           />
//         )}
//       </Box>
//     </Box>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
// Removed: import { useBubblesManager } from "@/hooks/useBubblesManager"; // No longer needed

// Dynamically import react-youtube only on client
const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

export default function FeatureVideoWithOverlay({
  videoId,
  featureIndex,
  reverseOrder = true,
}) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [elapsed, setElapsed] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [status, setStatus] = useState("initializing");
  const [isClient, setIsClient] = useState(false);

  // Particles.js specific refs and state
  const particlesContainerRef = useRef(null);
  const particlesInitializedRef = useRef(false);
  const particlesContainerId = `bubbles-${featureIndex}`; // Keep ID for the container

  // Make sure we're running on client only
  useEffect(() => {
    setIsClient(true);
  }, []);

  // --- Particles Initialization Logic (Copied from HeaderVideoBackgroundWithOverlay) ---
  useEffect(() => {
    let checkInterval = null;

    const attemptParticlesInitialization = () => {
      // Check if the particles.js library is loaded AND the DOM element is ready
      if (
        window.particlesJS &&
        particlesContainerRef.current &&
        !particlesInitializedRef.current
      ) {
        console.log(`[Feature ${featureIndex}] Initializing particles...`);
        window.particlesJS(particlesContainerId, {
          // Use the dynamic ID
          particles: {
            number: { value: 120, density: { enable: true, value_area: 800 } },
            color: { value: ["#ffffff", "#f8f8f8", "#f0f0f0", "#e8e8e8"] },
            shape: { type: "circle" },
            opacity: {
              value: 0.6,
              random: true,
              anim: { enable: true, speed: 0.5, opacity_min: 0.2 },
            },
            size: {
              value: 6,
              random: true,
              anim: { enable: true, speed: 3, size_min: 2 },
            },
            line_linked: { enable: false },
            move: {
              enable: true,
              speed: 1,
              direction: "top",
              random: true,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: false },
              onclick: { enable: false },
              resize: true,
            },
          },
          retina_detect: true,
        });
        particlesInitializedRef.current = true;
        clearInterval(checkInterval); // Stop checking once initialized
        console.log(
          `[Feature ${featureIndex}] Particles initialized successfully.`
        );
      } else if (particlesInitializedRef.current) {
        clearInterval(checkInterval);
      }
    };

    // Start checking for initialization readiness
    checkInterval = setInterval(attemptParticlesInitialization, 100);

    // Cleanup function
    return () => {
      if (checkInterval) {
        clearInterval(checkInterval);
      }
      // Destroy the particles.js instance when component unmounts
      // Check pJSDom for the specific ID to avoid destroying other instances
      if (
        particlesInitializedRef.current &&
        window.pJSDom &&
        window.pJSDom.length > 0
      ) {
        const pJSInstance = window.pJSDom.find(
          (p) => p.pJS.canvas.id === particlesContainerId
        );
        if (pJSInstance) {
          console.log(
            `[Feature ${featureIndex}] Destroying particles.js instance on unmount.`
          );
          pJSInstance.pJS.fn.vendors.destroypJS();
          window.pJSDom = window.pJSDom.filter(
            (p) => p.pJS.canvas.id !== particlesContainerId
          );
          particlesInitializedRef.current = false;
        }
      }
    };
  }, [isClient]); // Depend on isClient to ensure DOM is ready on client-side

  // --- Video Player Logic ---
  const playerRef = useRef(null); // Reference for the YouTube player instance
  const playingParticlesTimeout = useRef(null); // Use useRef for mutable timeout ID
  const elapsedInterval = useRef(null); // Use useRef for mutable interval ID
  const endApproachInterval = useRef(null); // To monitor video end for showing particles proactively

  // Function to check when video is nearing its end
  const startEndApproachCheck = () => {
    stopEndApproachCheck(); // Clear any existing interval

    endApproachInterval.current = setInterval(() => {
      if (
        playerRef.current &&
        typeof playerRef.current.getDuration === "function" &&
        typeof playerRef.current.getCurrentTime === "function"
      ) {
        const duration = playerRef.current.getDuration();
        const currentTime = playerRef.current.getCurrentTime();
        const timeRemaining = duration - currentTime;

        // Show particles 2 seconds before end
        if (timeRemaining <= 2 && timeRemaining > 0) {
          setShowOverlay(true);
          stopEndApproachCheck(); // Stop checking once triggered
        }
      }
    }, 100); // Check every 100ms
  };

  const stopEndApproachCheck = () => {
    if (endApproachInterval.current) {
      clearInterval(endApproachInterval.current);
      endApproachInterval.current = null;
    }
  };

  const handleReady = (event) => {
    const player = event.target;
    playerRef.current = player; // Store player instance in ref
    setStatus("ready");
    try {
      player.mute();
      player.setPlaybackRate(0.85); // Set to 0.85 for slower playback
      player.playVideo();
      setVideoDuration(player.getDuration());

      // Start elapsed time interval
      if (elapsedInterval.current) clearInterval(elapsedInterval.current);
      elapsedInterval.current = setInterval(() => {
        if (
          playerRef.current &&
          typeof playerRef.current.getCurrentTime === "function"
        ) {
          setElapsed(playerRef.current.getCurrentTime().toFixed(1));
        }
      }, 100);
      startEndApproachCheck(); // Start monitoring for end of video
    } catch (e) {
      setStatus("error");
      setShowOverlay(true); // Show particles on error
      console.error(`[Feature ${featureIndex}] YouTube Player Ready Error:`, e);
    }
  };

  const handleStateChange = (event) => {
    const player = event.target;
    const state = event.data;

    // Clear any existing timeout for hiding particles to prevent race conditions
    if (playingParticlesTimeout.current) {
      clearTimeout(playingParticlesTimeout.current);
      playingParticlesTimeout.current = null;
    }

    // Clear elapsed interval on any state change that isn't PLAYING
    if (state !== window.YT.PlayerState.PLAYING && elapsedInterval.current) {
      clearInterval(elapsedInterval.current);
      elapsedInterval.current = null;
      setElapsed(0); // Reset elapsed time
    }

    switch (state) {
      case window.YT.PlayerState.PLAYING:
        setStatus("playing");
        setVideoDuration(player.getDuration()); // Ensure duration is updated
        playingParticlesTimeout.current = setTimeout(
          () => setShowOverlay(false),
          2000
        ); // Faster hide for features

        // Restart elapsed time interval if not already running
        if (!elapsedInterval.current) {
          elapsedInterval.current = setInterval(() => {
            if (
              playerRef.current &&
              typeof playerRef.current.getCurrentTime === "function"
            ) {
              setElapsed(playerRef.current.getCurrentTime().toFixed(1));
            }
          }, 100);
        }
        startEndApproachCheck(); // Restart monitoring for end of video
        break;
      case window.YT.PlayerState.PAUSED:
        setStatus("paused");
        setShowOverlay(true);
        stopEndApproachCheck(); // Stop monitoring when paused
        break;
      case window.YT.PlayerState.BUFFERING:
        setStatus("buffering");
        setShowOverlay(true);
        stopEndApproachCheck(); // Stop monitoring when buffering
        break;
      case window.YT.PlayerState.ENDED:
        // With loop: 1 and playlist: videoId, this state might not be reached or is handled by YouTube's loop
        setStatus("ended");
        setShowOverlay(true); // Ensure particles are shown if loop somehow fails or for a brief moment
        stopEndApproachCheck(); // Stop monitoring when ended
        break;
      case window.YT.PlayerState.CUED:
        setStatus("cued");
        setShowOverlay(true);
        stopEndApproachCheck(); // Stop monitoring when cued
        break;
      default:
        setStatus("unknown");
        setShowOverlay(true); // Default to showing particles
        stopEndApproachCheck(); // Stop monitoring for default/unknown states
        break;
    }
  };

  // Cleanup for Video Player (intervals and timeouts)
  useEffect(() => {
    return () => {
      if (playingParticlesTimeout.current) {
        clearTimeout(playingParticlesTimeout.current);
      }
      if (elapsedInterval.current) {
        clearInterval(elapsedInterval.current);
      }
      stopEndApproachCheck(); // Also clear the end approach interval
    };
  }, []);

  return (
    <Box sx={{ width: "100%", position: "relative", borderRadius: "18px" }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 9",
          overflow: "hidden",
          borderRadius: "16px",
          boxShadow: "0 8px 20px #00968778",
          backgroundColor: "black",
        }}
      >
        {isClient && videoId ? (
          <>
            {/* YouTube Player */}
            <Box sx={{ position: "absolute", inset: -2 }}>
              <YouTube
                videoId={videoId}
                opts={{
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    mute: 1,
                    loop: 1,
                    playlist: videoId,
                    rel: 0,
                    modestbranding: 1,
                    disablekb: 1,
                    iv_load_policy: 3,
                    playsinline: 1,
                  },
                }}
                onReady={handleReady}
                onStateChange={handleStateChange}
                iframeClassName="youtube-iframe"
                // No need for onEnd - loop handles it
              />
            </Box>

            <style jsx global>{`
              .youtube-iframe {
                position: absolute;
                top: 0;
                left: 0;
                width: 100% !important;
                height: 100% !important;
                object-fit: cover;
                transform: scale(1.02);
                border: none;
                border-radius: 16px;
              }
            `}</style>

            {/* Overlay background */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                zIndex: 2,
                opacity: showOverlay ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                backgroundImage: "url('/images/headerBgWithParticles.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Bubbles */}
            <Box
              ref={particlesContainerRef} // Use the particlesContainerRef here
              id={particlesContainerId} // Use the dynamic ID
              sx={{
                position: "absolute",
                inset: 0,
                zIndex: 3,
                opacity: showOverlay ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
                pointerEvents: "none",
              }}
            />

            {/* Transparent click blocker */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                zIndex: 4,
                bgcolor: "transparent",
                pointerEvents: "auto",
              }}
            />

            {/* Status Debug */}
            {/* <Typography
              sx={{
                position: "absolute",
                bottom: 8,
                left: 8,
                zIndex: 5,
                color: "#fff",
                fontSize: "13px",
                background: "rgba(0,0,0,0.55)",
                px: 1,
                py: 0.4,
                borderRadius: "6px",
                fontFamily: "monospace",
                pointerEvents: "none",
              }}
            >
              {`[Feature ${featureIndex}] ${status.toUpperCase()} • ${elapsed}s / ${
                videoDuration || "?"
              }s`}
            </Typography> */}
          </>
        ) : (
          // Fallback when not client or no videoId, show only particles
          <Box
            ref={particlesContainerRef} // Use the particlesContainerRef here
            id={particlesContainerId} // Use the dynamic ID
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 3,
              opacity: showOverlay ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
              pointerEvents: "none",
              backgroundImage: "url('/images/headerBgWithParticles.png')", // Ensure fallback also has background image
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}
      </Box>
    </Box>
  );
}
