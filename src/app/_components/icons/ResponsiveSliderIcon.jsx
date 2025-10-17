"use client";
import { useState, useEffect } from "react";

export default function ResponsiveSliderIcon({ SliderIcon, index }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return <SliderIcon smallWidthAndHeight={isMobile} />;
}
