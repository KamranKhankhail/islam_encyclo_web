// ... existing code ...
"use client";
import { Button } from "@mui/material";
import React from "react";
import Link from "next/link"; // Import Link for Next.js navigation

export default function SectionMajorButton({
  children,
  my = { lg: "90px", md: "90px", sm: "70px", xs: "60px", mob: "30px" },
  iosLink = "https://apple.co/3xfPeyW", // Default iOS link
  androidLink = "https://play.google.com/store/apps/details?id=com.kivyx.islamencyclo&hl=en",
  // The href prop will be used for Link component if 'Explore More' is clicked.
  // It's still available for other potential uses.
  href = "",
}) {
  // Platform detection logic for "Download Now" functionality
  const getDownloadLink = () => {
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent || navigator.vendor;
      if (/android/i.test(ua)) return androidLink;
      if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return iosLink;
    }
    return androidLink; // Default to Android if platform not detected or not in browser
  };

  const handleDownloadAction = () => {
    const link = getDownloadLink();
    if (link) window.open(link, "_blank");
  };

  // Determine button behavior based on children prop
  const isExploreMore = children === "Explore More";
  const isDownloadNow = children === "Download Now";

  return (
    <Button
      variant="contained"
      {...(isExploreMore
        ? {
            component: Link,
            href: href || "/features",
            onClick: null,
          }
        : isDownloadNow
        ? {
            onClick: handleDownloadAction,
            component: "button",
          }
        : {
            onClick: handleDownloadAction,
            component: "button",
          })}
      sx={{
        minWidth: "auto",
        width: "auto",
        textTransform: "none",
        color: "#ffffff",
        bgcolor: "#008081",
        boxShadow:
          "0px 9px 20px 0px #053C3D1A, 0px 36px 36px 0px #053C3D17, 0px 80px 48px 0px #053C3D0D, 0px 143px 57px 0px #053C3D03, 0px 223px 63px 0px #053C3D00",
        fontSize: {
          lg: "30px",
          md: "30px",
          sm: "28px",
          xs: "24px",
          mob: "22px",
        },
        fontWeight: "500",
        borderRadius: "10px",
        px: "70px",
        height: "max-content",
        py: "30px",
        lineHeight: "109%",
        "&:hover": {
          bgcolor: "#008181a3",
          color: "#ffffff",
          boxShadow:
            "0px 9px 20px 0px #053C3D1A, 0px 36px 36px 0px #053C3D17, 0px 80px 48px 0px #053C3D0D, 0px 143px 57px 0px #053C3D03, 0px 223px 63px 0px #053C3D00",
          transition: "all .5s cubic-bezier(0.4, 0, 0.2, 1)",
        },
        "&:active": {
          boxShadow: "none",
          transition: "none",
        },
        "&:focus": {
          boxShadow: "none",
          transition: "none",
        },
        my: my,
      }}
    >
      {children}
    </Button>
  );
}
