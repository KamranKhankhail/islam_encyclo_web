"use client";
import DownloadAppleStoreButton from "@/icons/DownloadAppleStoreButton";
import DownloadGooglePlayStoreButton from "@/icons/DownloadGooglePlayStoreButton";
import { Button, Stack } from "@mui/material";
export default function DownloadButtonsClient() {
  const iosLink = "https://apple.co/3xfPeyW";
  const androidLink =
    "https://play.google.com/store/apps/details?id=com.kivyx.islamencyclo&hl=en";
  // Platform detection
  const getDownloadLink = () => {
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent || navigator.vendor;
      if (/android/i.test(ua)) return androidLink;
      if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return iosLink;
    }
    return androidLink;
  };

  const handleDownload = () => {
    const link = getDownloadLink();
    if (link) window.open(link, "_blank");
  };
  return (
    <Stack sx={{ zIndex: "6", pt: "160px" }} direction="row" spacing={2}>
      <Button onClick={handleDownload}>
        <DownloadAppleStoreButton />
      </Button>
      <Button onClick={handleDownload}>
        <DownloadGooglePlayStoreButton />
      </Button>
    </Stack>
  );
}
