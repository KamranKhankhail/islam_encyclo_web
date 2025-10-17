// hooks/useBubblesManager.js
import { useEffect, useRef } from "react";

let particlesScriptLoaded = false;
const initializedContainers = new Set();

export const useBubblesManager = (containerId) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerId || initializedContainers.has(containerId)) return;

    const initializeBubbles = () => {
      if (
        window.particlesJS &&
        containerRef.current &&
        !initializedContainers.has(containerId)
      ) {
        containerRef.current.id = containerId;

        window.particlesJS(containerId, {
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

        initializedContainers.add(containerId);
      }
    };

    if (!particlesScriptLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.onload = () => {
        particlesScriptLoaded = true;
        setTimeout(initializeBubbles, 100);
      };
      document.head.appendChild(script);
    } else {
      setTimeout(initializeBubbles, 100);
    }

    return () => {
      // Cleanup if needed
    };
  }, [containerId]);

  return containerRef;
};
