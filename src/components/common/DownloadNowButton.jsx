"use client";
import { Button } from "@mui/material";
import React from "react";

export default function DownloadNowButton({
  fontSize = "14px",
  px = "30px",
  py = "17px",
  iosLink = "https://apple.co/3xfPeyW", // Added iosLink prop with default
  androidLink = "https://play.google.com/store/apps/details?id=com.kivyx.islamencyclo&hl=en",
}) {
  const getDownloadLink = () => {
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent || navigator.vendor;
      if (/android/i.test(ua)) return androidLink;
      if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return iosLink;
    }
    return androidLink; // Default to Android if platform not detected or not in browser
  };

  const handleDownload = () => {
    const link = getDownloadLink();
    if (link) window.open(link, "_blank");
  };

  return (
    <Button
      variant="contained"
      onClick={handleDownload} // Attached the handleDownload function to onClick
      sx={{
        minWidth: "auto",
        width: "auto",
        textTransform: "none",
        color: "#ffffff",
        bgcolor: "#008081",
        boxShadow:
          "0px 9px 20px 0px #053C3D1A, 0px 36px 36px 0px #053C3D17, 0px 80px 48px 0px #053C3D0D, 0px 143px 57px 0px #053C3D03, 0px 223px 63px 0px #053C3D00",
        fontSize: fontSize,
        fontWeight: "500",
        borderRadius: "10px",
        px: px,
        height: "max-content",
        py: py,
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
      }}
    >
      Download Now
    </Button>
  );
}
