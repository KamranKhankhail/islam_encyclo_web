// // "use client";

// // import { useState, useEffect, useRef } from "react";
// // import { Box } from "@mui/material";

// // const HeaderVideoBackgroundWithOverlay = () => {
// //   const [showOverlay, setShowOverlay] = useState(true);
// //   const [videoReady, setVideoReady] = useState(false);
// //   const [videoFailed, setVideoFailed] = useState(false);
// //   const iframeRef = useRef(null);
// //   const particlesContainerRef = useRef(null);
// //   const particlesInitializedRef = useRef(false);

// //   // Video duration in milliseconds (34 seconds)
// //   const videoDuration = 34000;
// //   const overlayDuration = 4000; // 4 seconds

// //   // Check video status on mount
// //   useEffect(() => {
// //     const checkVideoState = () => {
// //       if (iframeRef.current) {
// //         setTimeout(() => {
// //           setVideoReady(true);
// //         }, 1000);
// //       }
// //     };

// //     const handleVideoError = () => {
// //       setVideoFailed(true);
// //       // If video fails, keep particles always visible
// //       setShowOverlay(true);
// //     };

// //     const iframe = iframeRef.current;
// //     if (iframe) {
// //       iframe.addEventListener("load", checkVideoState);
// //       iframe.addEventListener("error", handleVideoError);

// //       // If video doesn't load in 5 seconds, assume it failed
// //       const fallbackTimer = setTimeout(() => {
// //         if (!videoReady) {
// //           setVideoFailed(true);
// //           setShowOverlay(true);
// //         }
// //       }, 5000);

// //       return () => {
// //         iframe.removeEventListener("load", checkVideoState);
// //         iframe.removeEventListener("error", handleVideoError);
// //         clearTimeout(fallbackTimer);
// //       };
// //     }
// //   }, [videoReady]);

// //   // Initialize particles.js once
// //   useEffect(() => {
// //     if (typeof window !== "undefined" && !particlesInitializedRef.current) {
// //       const script = document.createElement("script");
// //       script.src =
// //         "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
// //       script.onload = () => {
// //         particlesInitializedRef.current = true;
// //         initializeParticles();
// //       };
// //       document.head.appendChild(script);
// //     } else if (particlesInitializedRef.current) {
// //       initializeParticles();
// //     }
// //   }, []);

// //   // Initialize particles function
// //   const initializeParticles = () => {
// //     if (window.particlesJS && particlesContainerRef.current) {
// //       window.particlesJS("particles-container", {
// //         particles: {
// //           number: {
// //             value: 80,
// //             density: {
// //               enable: true,
// //               value_area: 800,
// //             },
// //           },
// //           color: {
// //             value: ["#ffffff", "#f0f0f0", "#e8e8e8", "#f8f8f8"],
// //           },
// //           shape: {
// //             type: "circle",
// //           },
// //           opacity: {
// //             value: 0.7,
// //             random: true,
// //             anim: {
// //               enable: true,
// //               speed: 1,
// //               opacity_min: 0.3,
// //               sync: false,
// //             },
// //           },
// //           size: {
// //             value: 3,
// //             random: true,
// //             anim: {
// //               enable: true,
// //               speed: 2,
// //               size_min: 1,
// //               sync: false,
// //             },
// //           },
// //           line_linked: {
// //             enable: true,
// //             distance: 150,
// //             color: "#ffffff",
// //             opacity: 0.4,
// //             width: 1,
// //           },
// //           move: {
// //             enable: true,
// //             speed: 2,
// //             direction: "none",
// //             random: true,
// //             straight: false,
// //             out_mode: "out",
// //             bounce: false,
// //           },
// //         },
// //         interactivity: {
// //           detect_on: "canvas",
// //           events: {
// //             onhover: {
// //               enable: false,
// //             },
// //             onclick: {
// //               enable: false,
// //             },
// //             resize: true,
// //           },
// //         },
// //         retina_detect: true,
// //       });
// //     }
// //   };

// //   // Video timing logic - ONLY if video is ready and not failed
// //   useEffect(() => {
// //     if (!videoReady || videoFailed) return;

// //     const timers = [];
// //     let cycleStartTime = Date.now();

// //     const startCycle = () => {
// //       cycleStartTime = Date.now();

// //       // Hide overlay after first 4 seconds
// //       timers.push(
// //         setTimeout(() => {
// //           setShowOverlay(false);
// //         }, overlayDuration)
// //       );

// //       // Show overlay at last 4 seconds
// //       timers.push(
// //         setTimeout(() => {
// //           setShowOverlay(true);
// //         }, videoDuration - overlayDuration)
// //       );

// //       // Restart cycle after full duration
// //       timers.push(
// //         setTimeout(() => {
// //           startCycle();
// //         }, videoDuration)
// //       );
// //     };

// //     startCycle();

// //     return () => {
// //       timers.forEach((timer) => clearTimeout(timer));
// //     };
// //   }, [videoReady, videoFailed]);

// //   return (
// //     <Box
// //       sx={{
// //         position: "relative",
// //         width: "100%",
// //         height: 0,
// //         paddingBottom: "56.25%",
// //         zIndex: 9999,
// //         overflow: "hidden",
// //         borderRadius: "10px",
// //       }}
// //     >
// //       {/* Video - ALWAYS CLICK DISABLED */}
// //       <Box
// //         ref={iframeRef}
// //         component="iframe"
// //         sx={{
// //           position: "absolute",
// //           top: 0,
// //           left: 0,
// //           width: "100%",
// //           height: "100%",
// //           border: "none",
// //           transform: "scale(1.02)",
// //           transformOrigin: "center center",
// //           opacity: showOverlay ? 0 : 1,
// //           transition: "opacity 0.5s ease-in-out",
// //           // PERMANENTLY DISABLE CLICKS ON VIDEO
// //           pointerEvents: "none",
// //           cursor: "default",
// //           userSelect: "none",
// //         }}
// //         src="https://youtu.be/OtBL4CQvoDI?list=PLi-XbQQ5dvTjZlwW8ZC3ZGbBvisVLrlJn?autoplay=1&mute=1&loop=1&playlist=OtBL4CQvoDI&controls=0&disablekb=1&modestbranding=1&iv_load_policy=3&fs=0&rel=0&showinfo=0&vq=hd1080"
// //         allow="autoplay; encrypted-media"
// //         allowFullScreen
// //       />

// //       {/* Particles Overlay - ALWAYS VISIBLE IF VIDEO FAILED, TIMED IF VIDEO WORKS */}
// //       <Box
// //         id="particles-container"
// //         ref={particlesContainerRef}
// //         sx={{
// //           position: "absolute",
// //           top: 0,
// //           left: 0,
// //           width: "100%",
// //           height: "100%",
// //           zIndex: 10000,
// //           // PERMANENTLY DISABLE CLICKS ON PARTICLES
// //           pointerEvents: "none",
// //           cursor: "default",
// //           userSelect: "none",
// //           opacity: showOverlay ? 1 : 0,
// //           transition: "opacity 0.5s ease-in-out",
// //           backgroundImage: "url('/images/headerBgWithParticles.png')",
// //           backgroundSize: "cover",
// //           backgroundPosition: "center",
// //           backgroundRepeat: "no-repeat",
// //         }}
// //       />

// //       {/* MASTER CLICK BLOCKER - COVERS EVERYTHING ALWAYS */}
// //       <Box
// //         sx={{
// //           position: "absolute",
// //           top: 0,
// //           left: 0,
// //           width: "100%",
// //           height: "100%",
// //           zIndex: 10001,
// //           // PERMANENTLY BLOCKS ALL CLICKS AND HOVER
// //           pointerEvents: "auto",
// //           cursor: "default",
// //           userSelect: "none",
// //           backgroundColor: "transparent",
// //         }}
// //         onClick={(e) => {
// //           e.preventDefault();
// //           e.stopPropagation();
// //         }}
// //         onDoubleClick={(e) => {
// //           e.preventDefault();
// //           e.stopPropagation();
// //         }}
// //         onContextMenu={(e) => {
// //           e.preventDefault();
// //           e.stopPropagation();
// //         }}
// //       />
// //     </Box>
// //   );
// // };

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Box } from "@mui/material";

// export default function HeaderVideoBackgroundWithOverlay() {
//   const [status, setStatus] = useState("initial");
//   const [showParticles, setShowParticles] = useState(true);
//   const playerRef = useRef(null);
//   const particlesContainerRef = useRef(null);
//   const particlesLoadedRef = useRef(false);

//   // Load particles.js once
//   useEffect(() => {
//     const loadParticles = () => {
//       if (window.particlesJS && !particlesLoadedRef.current) {
//         initParticles();
//         particlesLoadedRef.current = true;
//       } else if (!window.particlesJS) {
//         const script = document.createElement("script");
//         script.src =
//           "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
//         script.onload = () => {
//           initParticles();
//           particlesLoadedRef.current = true;
//         };
//         document.body.appendChild(script);
//       }
//     };

//     const initParticles = () => {
//       if (!particlesContainerRef.current) return;
//       window.particlesJS("particles-container", {
//         particles: {
//           number: { value: 120, density: { enable: true, value_area: 800 } },
//           color: { value: ["#ffffff", "#f8f8f8", "#f0f0f0", "#e8e8e8"] },
//           shape: { type: "circle" },
//           opacity: {
//             value: 0.6,
//             random: true,
//             anim: { enable: true, speed: 0.5, opacity_min: 0.2 },
//           },
//           size: {
//             value: 6,
//             random: true,
//             anim: { enable: true, speed: 3, size_min: 2 },
//           },
//           line_linked: { enable: false },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: "top",
//             random: true,
//             out_mode: "out",
//             bounce: false,
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: { enable: false },
//             onclick: { enable: false },
//             resize: true,
//           },
//         },
//         retina_detect: true,
//       });
//     };

//     loadParticles();
//   }, []);

//   // Load YouTube Player
//   // useEffect(() => {
//   //   const loadYT = () =>
//   //     new Promise((resolve) => {
//   //       if (window.YT && window.YT.Player) {
//   //         resolve(window.YT);
//   //       } else {
//   //         const tag = document.createElement("script");
//   //         tag.src = "https://www.youtube.com/iframe_api";
//   //         document.body.appendChild(tag);
//   //         window.onYouTubeIframeAPIReady = () => resolve(window.YT);
//   //       }
//   //     });

//   //   loadYT().then((YT) => {
//   //     playerRef.current = new YT.Player("yt-player", {
//   //       videoId: "OtBL4CQvoDI",
//   //       playerVars: {
//   //         autoplay: 1,
//   //         mute: 1,
//   //         loop: 1,
//   //         playlist: "OtBL4CQvoDI",
//   //         controls: 0,
//   //         rel: 0,
//   //         disablekb: 1,
//   //         modestbranding: 1,
//   //         fs: 0,
//   //         playsinline: 1,
//   //         enablejsapi: 1,
//   //       },
//   //       events: {
//   //         onReady: (event) => {
//   //           setStatus("ready");
//   //           event.target.setPlaybackRate(0.8);
//   //           event.target.playVideo();
//   //           setTimeout(() => setShowParticles(false), 1200);
//   //         },
//   //         onStateChange: (event) => {
//   //           const s = YT.PlayerState;
//   //           if (event.data === s.PLAYING) {
//   //             setStatus("playing");
//   //             setShowParticles(false);
//   //           } else if (event.data === s.BUFFERING) {
//   //             setStatus("buffering");
//   //             setShowParticles(true);
//   //           } else if (event.data === s.ENDED) {
//   //             setStatus("ended");
//   //             event.target.seekTo(0);
//   //             event.target.playVideo();
//   //           }
//   //         },
//   //         onError: () => {
//   //           setStatus("error");
//   //           setShowParticles(true);
//   //         },
//   //       },
//   //     });
//   //   });
//   // }, []);

//   // useEffect(() => {
//   //   const loadYT = () =>
//   //     new Promise((resolve) => {
//   //       if (window.YT && window.YT.Player) {
//   //         resolve(window.YT);
//   //       } else {
//   //         const tag = document.createElement("script");
//   //         tag.src = "https://www.youtube.com/iframe_api";
//   //         document.body.appendChild(tag);
//   //         window.onYouTubeIframeAPIReady = () => resolve(window.YT);
//   //       }
//   //     });

//   //   loadYT().then((YT) => {
//   //     playerRef.current = new YT.Player("yt-player", {
//   //       videoId: "OtBL4CQvoDI",
//   //       playerVars: {
//   //         autoplay: 1,
//   //         mute: 1,
//   //         loop: 0, // we'll handle manual looping for smoother control
//   //         controls: 0,
//   //         rel: 0,
//   //         disablekb: 1,
//   //         modestbranding: 1,
//   //         fs: 0,
//   //         playsinline: 1,
//   //         enablejsapi: 1,
//   //       },
//   //       events: {
//   //         onReady: (event) => {
//   //           setStatus("ready");
//   //           event.target.setPlaybackRate(1);
//   //           event.target.playVideo();
//   //           setShowParticles(true); // keep overlay until playing
//   //         },
//   //         onStateChange: (event) => {
//   //           const s = YT.PlayerState;

//   //           if (event.data === s.PLAYING) {
//   //             setStatus("playing");

//   //             // fade particles away after 1.2s once playing confirmed
//   //             setTimeout(() => setShowParticles(false), 1200);
//   //           } else if (event.data === s.BUFFERING) {
//   //             setStatus("buffering");
//   //             setShowParticles(true); // show overlay while buffering
//   //           } else if (event.data === s.ENDED) {
//   //             setStatus("ended");

//   //             // fade particles in again to avoid black flash
//   //             setShowParticles(true);

//   //             // restart after 2s with smooth transition
//   //             setTimeout(() => {
//   //               event.target.seekTo(0);
//   //               event.target.playVideo();
//   //             }, 2000);
//   //           }
//   //         },
//   //         onError: () => {
//   //           setStatus("error");
//   //           setShowParticles(true);
//   //         },
//   //       },
//   //     });
//   //   });
//   // }, []);
//   useEffect(() => {
//     const loadYT = () =>
//       new Promise((resolve) => {
//         if (window.YT && window.YT.Player) {
//           resolve(window.YT);
//         } else {
//           const tag = document.createElement("script");
//           tag.src = "https://www.youtube.com/iframe_api";
//           document.body.appendChild(tag);
//           window.onYouTubeIframeAPIReady = () => resolve(window.YT);
//         }
//       });

//     let checkInterval;

//     loadYT().then((YT) => {
//       playerRef.current = new YT.Player("yt-player", {
//         videoId: "OtBL4CQvoDI",
//         playerVars: {
//           autoplay: 1,
//           mute: 1,
//           loop: 0, // we'll handle manual looping for smoother control
//           controls: 0,
//           rel: 0,
//           disablekb: 1,
//           modestbranding: 1,
//           fs: 0,
//           playsinline: 1,
//           enablejsapi: 1,
//         },
//         events: {
//           onReady: (event) => {
//             setStatus("ready");
//             event.target.setPlaybackRate(1);
//             event.target.playVideo();
//             setShowParticles(true);

//             startEndApproachCheck(event.target);
//           },
//           onStateChange: (event) => {
//             const s = YT.PlayerState;

//             if (event.data === s.PLAYING) {
//               setStatus("playing");

//               // fade particles away after 1.2s once playing confirmed
//               setTimeout(() => setShowParticles(false), 2500);

//               // Start checking for end approach when playing
//               startEndApproachCheck(event.target);
//             } else if (event.data === s.BUFFERING) {
//               setStatus("buffering");
//               setShowParticles(true); // show overlay while buffering

//               // Stop checking while buffering
//               stopEndApproachCheck();
//             } else if (event.data === s.ENDED) {
//               setStatus("ended");
//               stopEndApproachCheck();

//               // Particles should already be visible from 1 second before end
//               // so we don't need to set them again here

//               // restart after 2s with smooth transition
//               setTimeout(() => {
//                 event.target.seekTo(0);
//                 event.target.playVideo();
//               }, 2000);
//             }
//           },
//           onError: () => {
//             setStatus("error");
//             setShowParticles(true);
//             stopEndApproachCheck();
//           },
//         },
//       });
//     });

//     // Function to check when video is 1 second from ending
//     const startEndApproachCheck = (player) => {
//       stopEndApproachCheck(); // Clear any existing interval

//       checkInterval = setInterval(() => {
//         if (player && player.getDuration && player.getCurrentTime) {
//           const duration = player.getDuration();
//           const currentTime = player.getCurrentTime();
//           const timeRemaining = duration - currentTime;

//           // Show particles 1 second before end
//           if (timeRemaining <= 2 && timeRemaining > 0) {
//             setShowParticles(true);
//             stopEndApproachCheck(); // Stop checking once triggered
//           }
//         }
//       }, 100); // Check every 100ms
//     };

//     const stopEndApproachCheck = () => {
//       if (checkInterval) {
//         clearInterval(checkInterval);
//         checkInterval = null;
//       }
//     };

//     // Cleanup
//     return () => {
//       stopEndApproachCheck();
//     };
//   }, []);
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: 0,
//         paddingBottom: "56.25%", // 16:9
//         overflow: "hidden",
//         borderRadius: "12px",
//         backgroundColor: "black",
//       }}
//     >
//       {/* YouTube Player */}
//       <Box
//         id="yt-player"
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           transform: "scale(1.01)",
//           transformOrigin: "center center",
//           "& iframe": {
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100% !important",
//             height: "100% !important",
//             transform: "scale(1.01)",
//             transformOrigin: "center center",
//           },
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 10001,
//           // PERMANENTLY BLOCKS ALL CLICKS AND HOVER
//           pointerEvents: "auto",
//           cursor: "default",
//           userSelect: "none",
//           backgroundColor: "transparent",
//         }}
//         onClick={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//         }}
//         onDoubleClick={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//         }}
//         onContextMenu={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//         }}
//       />
//       {/* Particles Overlay */}
//       <Box
//         id="particles-container"
//         ref={particlesContainerRef}
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 2,
//           pointerEvents: "none",
//           transition: "opacity 1s ease-in-out",
//           opacity: showParticles ? 1 : 0,
//           backgroundImage: "url('/images/headerBgWithParticles.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Debug status text */}
//       {/* <Box
//         sx={{
//           position: "absolute",
//           bottom: 10,
//           left: 10,
//           color: "white",
//           background: "rgba(0,0,0,0.5)",
//           px: 1,
//           borderRadius: 1,
//           fontFamily: "monospace",
//           fontSize: "12px",
//           zIndex: 3,
//         }}
//       >
//         Status: {status} | Particles: {showParticles ? "ON" : "OFF"}
//       </Box> */}
//     </Box>
//   );
// }
/////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////////
//////////
//////////////////////////////////////////
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Box } from "@mui/material";

// export default function HeaderVideoBackgroundWithOverlay() {
//   const [status, setStatus] = useState("initial");
//   const [showParticles, setShowParticles] = useState(true);
//   const playerRef = useRef(null);
//   const particlesContainerRef = useRef(null);
//   const particlesLoadedRef = useRef(false);

//   // Load particles.js once
//   useEffect(() => {
//     const loadParticles = () => {
//       if (window.particlesJS && !particlesLoadedRef.current) {
//         initParticles();
//         particlesLoadedRef.current = true;
//       } else if (!window.particlesJS) {
//         const script = document.createElement("script");
//         script.src =
//           "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
//         script.onload = () => {
//           initParticles();
//           particlesLoadedRef.current = true;
//         };
//         document.body.appendChild(script);
//       }
//     };

//     const initParticles = () => {
//       if (!particlesContainerRef.current) return;
//       window.particlesJS("particles-container", {
//         particles: {
//           number: { value: 120, density: { enable: true, value_area: 800 } },
//           color: { value: ["#ffffff", "#f8f8f8", "#f0f0f0", "#e8e8e8"] },
//           shape: { type: "circle" },
//           opacity: {
//             value: 0.6,
//             random: true,
//             anim: { enable: true, speed: 0.5, opacity_min: 0.2 },
//           },
//           size: {
//             value: 6,
//             random: true,
//             anim: { enable: true, speed: 3, size_min: 2 },
//           },
//           line_linked: { enable: false },
//           move: {
//             enable: true,
//             speed: 1,
//             direction: "top",
//             random: true,
//             out_mode: "out",
//             bounce: false,
//           },
//         },
//         interactivity: {
//           detect_on: "canvas",
//           events: {
//             onhover: { enable: false },
//             onclick: { enable: false },
//             resize: true,
//           },
//         },
//         retina_detect: true,
//       });
//     };

//     loadParticles();
//   }, []);

//   useEffect(() => {
//     const loadYT = () =>
//       new Promise((resolve) => {
//         if (window.YT && window.YT.Player) {
//           resolve(window.YT);
//         } else {
//           const tag = document.createElement("script");
//           tag.src = "https://www.youtube.com/iframe_api";
//           document.body.appendChild(tag);
//           window.onYouTubeIframeAPIReady = () => resolve(window.YT);
//         }
//       });

//     let currentYtPlayer = null; // Declare a local variable to hold the player instance
//     let playingParticlesTimeout = null; // To manage the timeout for hiding particles on PLAYING
//     let endApproachInterval = null; // To monitor video end for showing particles proactively

//     // Function to check when video is nearing its end
//     const startEndApproachCheck = () => {
//       stopEndApproachCheck(); // Clear any existing interval

//       endApproachInterval = setInterval(() => {
//         if (
//           playerRef.current &&
//           typeof playerRef.current.getDuration === "function" &&
//           typeof playerRef.current.getCurrentTime === "function"
//         ) {
//           const duration = playerRef.current.getDuration();
//           const currentTime = playerRef.current.getCurrentTime();
//           const timeRemaining = duration - currentTime;

//           // Show particles 2 seconds before end
//           if (timeRemaining <= 2 && timeRemaining > 0) {
//             setShowParticles(true);
//             stopEndApproachCheck(); // Stop checking once triggered
//           }
//         }
//       }, 100); // Check every 100ms
//     };

//     const stopEndApproachCheck = () => {
//       if (endApproachInterval) {
//         clearInterval(endApproachInterval);
//         endApproachInterval = null;
//       }
//     };

//     loadYT().then((YT) => {
//       currentYtPlayer = new YT.Player("yt-player", {
//         // Assign to the local variable
//         videoId: "OtBL4CQvoDI",
//         playerVars: {
//           autoplay: 1,
//           mute: 1,
//           loop: 1, // Set to 1 for infinite looping by YouTube
//           playlist: "OtBL4CQvoDI", // Crucial for loop: 1 to work for a single video
//           controls: 0,
//           rel: 0,
//           disablekb: 1,
//           modestbranding: 1,
//           fs: 0,
//           playsinline: 1,
//           enablejsapi: 1,
//         },
//         events: {
//           onReady: (event) => {
//             setStatus("ready");
//             event.target.setPlaybackRate(1);
//             event.target.playVideo();
//             startEndApproachCheck(); // Start monitoring for end of video
//             // particles are already true by default, will be set to false when PLAYING
//           },
//           onStateChange: (event) => {
//             const s = YT.PlayerState;

//             // Clear any existing timeout for hiding particles to prevent race conditions
//             if (playingParticlesTimeout) {
//               clearTimeout(playingParticlesTimeout);
//               playingParticlesTimeout = null;
//             }

//             if (event.data === s.PLAYING) {
//               setStatus("playing");
//               // Fade particles away after 2.5s once playing confirmed
//               // This gives a visual transition from particles to video
//               playingParticlesTimeout = setTimeout(
//                 () => setShowParticles(false),
//                 2500
//               );
//               startEndApproachCheck(); // Restart monitoring for end of video
//             } else if (event.data === s.PAUSED) {
//               setStatus("paused");
//               setShowParticles(true); // Show particles when paused
//               stopEndApproachCheck(); // Stop monitoring when paused
//             } else if (event.data === s.BUFFERING) {
//               setStatus("buffering");
//               setShowParticles(true); // Show overlay while buffering
//               stopEndApproachCheck(); // Stop monitoring when buffering
//             } else if (event.data === s.ENDED) {
//               // With loop: 1 and playlist: videoId, the video should seamlessly loop.
//               // This 'ENDED' state might not fire in a way that shows suggestions,
//               // but if it does, setting particles to true is a fallback.
//               setStatus("ended");
//               setShowParticles(true); // Ensure particles are shown if loop somehow fails or for a brief moment
//               stopEndApproachCheck(); // Stop monitoring when ended
//             } else if (event.data === s.CUED) {
//               // Video is cued but not playing
//               setStatus("cued");
//               setShowParticles(true); // Show particles when video is just cued
//               stopEndApproachCheck(); // Stop monitoring when cued
//             }
//           },
//           onError: (event) => {
//             setStatus("error");
//             setShowParticles(true); // Always show particles on error
//             stopEndApproachCheck(); // Stop monitoring on error
//             console.error("YouTube Player Error:", event.data); // Log the error for debugging
//           },
//         },
//       });
//       playerRef.current = currentYtPlayer; // Assign to ref AFTER player is created
//     });

//     // Cleanup function for useEffect
//     return () => {
//       // Clear any pending timeout for particles
//       if (playingParticlesTimeout) {
//         clearTimeout(playingParticlesTimeout);
//       }
//       stopEndApproachCheck(); // Clear any ongoing interval for end approach
//       // Crucially, destroy the YouTube player instance when the component unmounts
//       if (currentYtPlayer && typeof currentYtPlayer.destroy === "function") {
//         currentYtPlayer.destroy();
//         playerRef.current = null; // Clear the ref to avoid stale references
//       }
//     };
//   }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount
//   return (
//     <Box
//       sx={{
//         position: "relative",
//         width: "100%",
//         height: 0,
//         paddingBottom: "56.25%", // 16:9
//         overflow: "hidden",
//         borderRadius: "12px",
//         backgroundColor: "black",
//       }}
//     >
//       {/* YouTube Player */}
//       <Box
//         id="yt-player"
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           transform: "scale(1.01)",
//           transformOrigin: "center center",
//           "& iframe": {
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100% !important",
//             height: "100% !important",
//             transform: "scale(1.01)",
//             transformOrigin: "center center",
//           },
//         }}
//       />
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 10001,
//           // PERMANENTLY BLOCKS ALL CLICKS AND HOVER
//           pointerEvents: "auto",
//           cursor: "default",
//           userSelect: "none",
//           backgroundColor: "transparent",
//         }}
//         onClick={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//         }}
//         onDoubleClick={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//         }}
//         onContextMenu={(e) => {
//           e.preventDefault();
//           e.stopPropagation();
//         }}
//       />
//       {/* Particles Overlay */}
//       <Box
//         id="particles-container"
//         ref={particlesContainerRef}
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: 2,
//           pointerEvents: "none",
//           transition: "opacity 1s ease-in-out",
//           opacity: showParticles ? 1 : 0,
//           backgroundImage: "url('/images/headerBgWithParticles.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       />

//       {/* Debug status text */}
//       <Box
//         sx={{
//           position: "absolute",
//           bottom: 10,
//           left: 10,
//           color: "white",
//           background: "rgba(0,0,0,0.5)",
//           px: 1,
//           borderRadius: 1,
//           fontFamily: "monospace",
//           fontSize: "12px",
//           zIndex: 3,
//         }}
//       >
//         Status: {status} | Particles: {showParticles ? "ON" : "OFF"}
//       </Box>
//     </Box>
//   );
// }

/////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////////////////////////////////
//////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////
/////////////////////////////////////////////////
///////////////////////////////////////////////
//////////
//////////////////////////////////////////

"use client";

import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";

export default function HeaderVideoBackgroundWithOverlay() {
  const [status, setStatus] = useState("initial");
  const [showParticles, setShowParticles] = useState(true);
  const playerRef = useRef(null);
  const particlesContainerRef = useRef(null);
  const particlesInitializedRef = useRef(false);

  console.log("HeaderVideoBackgroundWithOverlay component rendered.");

  // Initialize particles.js when the container ref is available and particles.js is loaded
  useEffect(() => {
    let checkInterval = null;

    const attemptParticlesInitialization = () => {
      console.log("Attempting to initialize particles...");
      console.log("  window.particlesJS available:", !!window.particlesJS);
      console.log(
        "  particlesContainerRef.current available:",
        !!particlesContainerRef.current
      );
      console.log(
        "  particlesInitializedRef.current:",
        particlesInitializedRef.current
      );

      // Only proceed if particles.js is loaded, the container is in the DOM, and we haven't initialized yet
      if (
        window.particlesJS &&
        particlesContainerRef.current &&
        !particlesInitializedRef.current
      ) {
        console.log("All conditions met: Initializing particles!");
        window.particlesJS("particles-container", {
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
        console.log("Particles initialized successfully. Clearing interval.");
      } else if (particlesInitializedRef.current) {
        // Already initialized, no need to check further
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
      if (
        particlesInitializedRef.current &&
        window.pJSDom &&
        window.pJSDom.length > 0
      ) {
        console.log("Destroying particles.js instance on unmount.");
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = []; // Clear the array
        particlesInitializedRef.current = false;
      }
    };
  }, []); // <--- THIS IS THE CRUCIAL CHANGE: Empty dependency array
  // The interval inside the effect handles waiting for particlesContainerRef.current

  useEffect(() => {
    const loadYT = () =>
      new Promise((resolve) => {
        if (window.YT && window.YT.Player) {
          resolve(window.YT);
        } else {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          document.body.appendChild(tag);
          window.onYouTubeIframeAPIReady = () => resolve(window.YT);
        }
      });

    let currentYtPlayer = null;
    let playingParticlesTimeout = null;
    let endApproachInterval = null;

    const startEndApproachCheck = () => {
      stopEndApproachCheck();

      endApproachInterval = setInterval(() => {
        if (
          playerRef.current &&
          typeof playerRef.current.getDuration === "function" &&
          typeof playerRef.current.getCurrentTime === "function"
        ) {
          const duration = playerRef.current.getDuration();
          const currentTime = playerRef.current.getCurrentTime();
          const timeRemaining = duration - currentTime;

          if (timeRemaining <= 2 && timeRemaining > 0) {
            setShowParticles(true);
            stopEndApproachCheck();
          }
        }
      }, 100);
    };

    const stopEndApproachCheck = () => {
      if (endApproachInterval) {
        clearInterval(endApproachInterval);
        endApproachInterval = null;
      }
    };

    loadYT().then((YT) => {
      currentYtPlayer = new YT.Player("yt-player", {
        videoId: "OtBL4CQvoDI",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "OtBL4CQvoDI",
          controls: 0,
          rel: 0,
          disablekb: 1,
          modestbranding: 1,
          fs: 0,
          playsinline: 1,
          enablejsapi: 1,
        },
        events: {
          onReady: (event) => {
            setStatus("ready");
            event.target.setPlaybackRate(1);
            event.target.playVideo();
            startEndApproachCheck();
          },
          onStateChange: (event) => {
            const s = YT.PlayerState;

            if (playingParticlesTimeout) {
              clearTimeout(playingParticlesTimeout);
              playingParticlesTimeout = null;
            }

            if (event.data === s.PLAYING) {
              setStatus("playing");
              playingParticlesTimeout = setTimeout(
                () => setShowParticles(false),
                2500
              );
              startEndApproachCheck();
            } else if (event.data === s.PAUSED) {
              setStatus("paused");
              setShowParticles(true);
              stopEndApproachCheck();
            } else if (event.data === s.BUFFERING) {
              setStatus("buffering");
              setShowParticles(true);
              stopEndApproachCheck();
            } else if (event.data === s.ENDED) {
              setStatus("ended");
              setShowParticles(true);
              stopEndApproachCheck();
            } else if (event.data === s.CUED) {
              setStatus("cued");
              setShowParticles(true);
              stopEndApproachCheck();
            }
          },
          onError: (event) => {
            setStatus("error");
            setShowParticles(true);
            stopEndApproachCheck();
            console.error("YouTube Player Error:", event.data);
          },
        },
      });
      playerRef.current = currentYtPlayer;
    });

    return () => {
      if (playingParticlesTimeout) {
        clearTimeout(playingParticlesTimeout);
      }
      stopEndApproachCheck();
      if (currentYtPlayer && typeof currentYtPlayer.destroy === "function") {
        currentYtPlayer.destroy();
        playerRef.current = null;
      }
    };
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: 0,
        paddingBottom: "56.25%", // 16:9
        overflow: "hidden",
        borderRadius: "12px",
        backgroundColor: "black",
      }}
    >
      {/* YouTube Player */}
      <Box
        id="yt-player"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          transform: "scale(1.01)",
          transformOrigin: "center center",
          "& iframe": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100% !important",
            height: "100% !important",
            transform: "scale(1.01)",
            transformOrigin: "center center",
          },
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 10001,
          pointerEvents: "auto",
          cursor: "default",
          userSelect: "none",
          backgroundColor: "transparent",
        }}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onDoubleClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />
      {/* Particles Overlay */}
      <Box
        id="particles-container"
        ref={particlesContainerRef}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          pointerEvents: "none",
          transition: "opacity 1s ease-in-out",
          opacity: showParticles ? 1 : 0,
          backgroundImage: "url('/images/headerBgWithParticles.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Debug status text */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: 10,
          color: "white",
          background: "rgba(0,0,0,0.5)",
          px: 1,
          borderRadius: 1,
          fontFamily: "monospace",
          fontSize: "12px",
          zIndex: 3,
        }}
      >
        Status: {status} | Particles: {showParticles ? "ON" : "OFF"}
      </Box> */}
    </Box>
  );
}
