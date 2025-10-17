"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import SectionMainHeading from "@/components/common/SectionMainHeading";
import PlayStoreDemoIcon from "@/app/quick-demo/_components/icons/PlayStoreDemoIcon";
import AppleStoreDemoIcon from "@/app/quick-demo/_components/icons/AppleStoreDemoIcon";
import theme from "@/styles/theme";
export default function page() {
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
    return androidLink; // Default to Android if platform not detected or not in browser
  };

  const handleDownload = () => {
    const link = getDownloadLink();
    if (link) window.open(link, "_blank");
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Image
          src="/images/girlReadingdemoHeader.png"
          alt="Girl Reading Demo Header"
          width={368}
          height={531}
          style={{ objectFit: "cover" }}
        />
      </Box>
      <SectionMainHeading
        px={{
          xl: "60px",
          lg: "50px",
          md: "40px",
          sm: "30px",
          xs: "30px",
          mob: "30px",
        }}
      >
        Your Islamic App, One Tap Away!
      </SectionMainHeading>
      <Typography
        variant="body2"
        sx={{
          fontSize: {
            xl: "30px",
            lg: "26px",
            md: "24px",
            sm: "22px",
            xs: "20px",
            mob: "18px",
          },
          fontWeight: "300",
          lineHeight: {
            lg: "130%",
            md: "120%",
            sm: "110%",
            xs: "100%",
            mob: "150%",
          },
          color: theme.palette.primary.thirdMain,
          //   color: "#ffffff",
          textAlign: "center",
          zIndex: "5",
          pb: "20px",
          pt: "34px",
        }}
      >
        Learn Islam anytime, anywhere with ease.
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        sx={{
          mt: "20px",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          px: { xs: "20px", sm: "0px" },
          pb: "90px",
          gap: "40px",
        }}
      >
        {/* Google Play Store Button */}
        <Button
          variant="contained"
          sx={{
            minWidth: "auto",
            width: "302px",
            textTransform: "none",
            color: "#ffffff",
            bgcolor: "#008081",
            boxShadow:
              "0px 9px 20px 0px #053C3D1A, 0px 36px 36px 0px #053C3D17, 0px 80px 48px 0px #053C3D0D, 0px 143px 57px 0px #053C3D03, 0px 223px 63px 0px #053C3D00",
            fontSize: "18px",
            fontWeight: "500",
            borderRadius: "10px",
            px: "40px",
            py: "15px",
            height: "max-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center", // Align content to start
            gap: "10px",
            "&:hover": {
              bgcolor: "#008181a3",
              color: "#ffffff",
              boxShadow:
                "0px 9px 20px 0px #053C3D1A, 0px 36px 36px 0px #053C3D17, 0px 80px 48px 0px #053C3D0D, 0px 143px 57px 0px #053C3D03, 0px 223px 63px 0px #053C3D00",
              transition: "all .5s cubic-bezier(0.4, 0, 0.2, 1)",
            },
            "&:active": { boxShadow: "none", transition: "none" },
            "&:focus": { boxShadow: "none", transition: "none" },
          }}
          onClick={handleDownload}
        >
          <PlayStoreDemoIcon width="55px" height="55px" />
          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", color: "#CCE6E6" }}
            >
              Get it on
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
              Google Play store
            </Typography>
          </Box>
        </Button>

        {/* Apple App Store Button */}
        <Button
          variant="contained"
          sx={{
            minWidth: "auto",

            textTransform: "none",
            color: "#ffffff",
            bgcolor: "#008081",
            boxShadow:
              "0px 9px 20px 0px #053C3D1A, 0px 36px 36px 0px #053C3D17, 0px 80px 48px 0px #053C3D0D, 0px 143px 57px 0px #053C3D03, 0px 223px 63px 0px #053C3D00",
            fontSize: "18px",
            fontWeight: "500",
            borderRadius: "10px",
            px: "50px",
            py: "12px",
            height: "max-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start", // Align content to start
            gap: "20px",
            "&:hover": {
              bgcolor: "#008181a3",
              color: "#ffffff",
              boxShadow:
                "0px 9px 20px 0px #053C3D1A, 0px 36px 36px 0px #053C3D17, 0px 80px 48px 0px #053C3D0D, 0px 143px 57px 0px #053C3D03, 0px 223px 63px 0px #053C3D00",
              transition: "all .5s cubic-bezier(0.4, 0, 0.2, 1)",
            },
            "&:active": { boxShadow: "none", transition: "none" },
            "&:focus": { boxShadow: "none", transition: "none" },
          }}
          onClick={() => window.open(iosLink, "_blank")}
        >
          <AppleStoreDemoIcon width="53px" height="55px" />
          <Box sx={{ textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                color: "#CCE6E6",
                pt: "10px",
              }}
            >
              Get it on
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "500" }}>
              Apple App store
            </Typography>
          </Box>
        </Button>
      </Stack>
    </Stack>
  );
}
