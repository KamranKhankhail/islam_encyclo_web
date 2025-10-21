import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import ListingOrderItemsBg from "@/icons/ListingOrderItemsBg";
import PrayerHeadIcon from "@/icons/PrayerHeadIcon";
import MoonMosqueIcon from "@/icons/MoonMosqueIcon";
import Image from "next/image";
import FeatureDescriptionIcon from "@/app/_components/icons/FeatureDescriptionIcon";
import FeatureDescriptionEndLineIcon from "@/app/_components/icons/FeatureDescriptionEndLineIcon";
import FeatureVideoWithOverlay from "@/app/_components/FeatureVideoWithOverlay";
import SectionMajorButton from "@/components/common/SectionMajorButton";
import SectionMainHeading from "@/components/common/SectionMainHeading";
import theme from "@/styles/theme";
const islamEncycloFeaturesData = [
  {
    featureHeading: "Wudu Guidance",
    featuresDescription: [
      "Our app provides step-by-step Wudu guidelines separately for men and women, with clear graphics and illustrations for every action. It is available in Arabic, English, and Urdu to ensure easy understanding. The instructions are authentic, based on the Quran and Hadith, and the simple navigation makes learning and practicing Wudu quick and effortless.",
    ],
    // videoSrc: "/videos/waduGuide.mp4",
    videoSrc:
      "https://youtu.be/RfxP3J9uwhw?list=PLi-XbQQ5dvTjZlwW8ZC3ZGbBvisVLrlJn",
  },
  {
    featureHeading: "Salah Guidance",
    featuresDescription: [
      "Step-by-step prayer guidance for both men and women.",
      "Correct prayer timings with total rak‘āt for each salah.",
      "Instructions available in Arabic, Urdu, and English.",
      "Complete recitations with translations for every prayer.",
      "Illustrated graphics for clear and easy understanding.",
    ],
    // videoSrc: "/videos/salahGuide.mp4",
    videoSrc:
      "https://youtu.be/buMQCHPlolE?list=PLi-XbQQ5dvTjZlwW8ZC3ZGbBvisVLrlJn",
  },
  {
    featureHeading: "Read Quran Guidance",
    featuresDescription: [
      "You can read the Qur’ān ayah-by-ayah with translation and audio, making recitation easy and engaging. The colorful 16-line tajwīd PDF helps with clear pronunciation, and you can share, copy, or download selected ayahs instantly. Fonts, colors, and themes are customizable, and multiple translations from different scholars give you deeper understanding.",
    ],
    videoSrc:
      "https://youtu.be/WZPWF6WXkUo?list=PLi-XbQQ5dvTjZlwW8ZC3ZGbBvisVLrlJn",
  },
  {
    featureHeading: "Listen Quran Guidance",
    featuresDescription: [
      "Listen to the Qur’an with translation for better understanding.",
      "Choose recitation in the voices of multiple renowned scholars.",
      "Enjoy smooth playback with download and offline access.",
      "Set a timer for automatic stop during listening sessions.",
      "Experience interactive reading with beautiful graphics.",
    ],
    videoSrc:
      "https://youtu.be/ee_OzXv4IS0?list=PLi-XbQQ5dvTjZlwW8ZC3ZGbBvisVLrlJn", // This line overwrites the local video
  },

  {
    featureHeading: "Sahih Hadith Guidance",

    featuresDescription: [
      "Access all major Hadith collections, including Sahih Bukhari, Sahih Muslim, and more, all organized into systematic chapters for smooth navigation. Each chapter covers Hadiths one by one with proper references, available in Arabic, Urdu, and English for a global audience. Beautiful graphics enhance the reading experience, making it both authentic and engaging.",
    ],
    videoSrc:
      "https://youtu.be/kqqGyb6j8jk?list=PLi-XbQQ5dvTjZlwW8ZC3ZGbBvisVLrlJn",
  },
  {
    featureHeading: "Qibla Direction Guidance",
    featuresDescription: [
      "Accurate Qibla direction guidance for daily prayers.",
      "Multiple compass options for better orientation.",
      "Smart feature that validates if your Qibla direction is correct.",
      "Helpful suggestions to adjust when direction is off.",
      "Beautiful, optimized, and user-friendly compass interface.",
    ],
    // videoSrc: "/videos/qiblaDirection.mp4",
    videoSrc:
      "https://youtu.be/fP8EUn22NRc?list=PLi-XbQQ5dvTjZlwW8ZC3ZGbBvisVLrlJn",
  },
];
export default function FeaturesSection({ exploreMoreBtnExist = true }) {
  const reverseFromItem = 4;

  const shadowColor = "rgba(0,0,0,0.5)";
  const shadowSize = 3;

  // Helper function to extract YouTube video ID
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regex =
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <Stack
      sx={{
        pt: "110px",
      }}
    >
      {" "}
      <SectionMainHeading>Our Main Features</SectionMainHeading>
      <Stack
        direction="column"
        sx={{
          alignItems: "center",
          pt: {
            xl: "60px",
            lg: "50px",
            md: "40px",
            sm: "40px",
            xs: "30px",
            mob: "20px",
          },
        }}
      >
        <Grid
          container
          columns={12}
          spacing={{ lg: 9, md: 6, sm: 3, xs: 3, mob: 6 }}
          rowGap={{
            lg: "90px",
            md: "90px",
            sm: "70px",
            xs: "50px",
            mob: "10px",
          }}
          sx={{
            px: {
              lg: "114px",
              md: "44px",
              sm: "36px",
              xs: "30px",
              mob: "30px",
            },
            alignItems: { md: "center", lg: "center" },

            zIndex: 2000,
            pt: {
              xl: "40px",
              lg: "40px",
              md: "30px",
              sm: "20px",
              xs: "20px",
              mob: "10px",
            },
          }}
        >
          {islamEncycloFeaturesData.map((feature, i) => {
            const reverseFrom = i + 1 >= reverseFromItem;
            const reverseOrder = (i + 1) % 2 === 0;

            const videoId = getYouTubeVideoId(feature.videoSrc); // Extract video ID
            const embedUrl = videoId
              ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&modestbranding=1&iv_load_policy=3&fs=0&rel=0&showinfo=0`
              : "";

            return (
              <React.Fragment key={i}>
                {/* Text Column */}

                <Grid
                  item
                  size={{ md: 6, sm: 6, xs: 12, mob: 12 }}
                  order={{
                    lg: reverseOrder ? i + 1 : i + 2,
                    md: reverseOrder ? i + 1 : i + 2,
                    sm: reverseOrder ? i + 1 : i + 2,
                  }}
                  sx={{
                    py: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: {
                      lg: "start",
                      md: "start",
                      sm: "start",
                      xs: "start",
                      mob: "center",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xl: "50px",
                        lg: "40px",
                        md: "30px",
                        sm: "28px",
                        xs: "28px",
                        mob: "26px",
                      },
                      fontWeight: "400",
                      // color: "#253164",
                      color: "#242424",
                      // alignSelf: "start",
                      lineHeight: {
                        xl: "130%",
                        lg: "130%",
                        md: "130%",
                        sm: "100%",
                        xs: "100%",
                        mob: "100%",
                      },
                    }}
                  >
                    {feature.featureHeading}
                  </Typography>
                  {/* <Image
                    src="/images/prayerHead.png"
                    alt="Blog Image"
                    width={120}
                    height={10}
                    style={{ width: "200px", height: "40px" }}
                    sizes="(max-width: 1800px) 120vw, 1800px"
                  /> */}
                  <Box sx={{ pt: "26px", pb: "34px" }}>
                    {" "}
                    {feature.featuresDescription.map((featureDescrition, i) => (
                      <Stack
                        key={i}
                        direction="row"
                        sx={{
                          alignItems: {
                            lg: "start",
                            md: "start",
                            sm: "start",
                            xs: "start",
                            mob: "center",
                          },
                          gap: "10px",
                          pb: "4px",
                        }}
                      >
                        {feature.featuresDescription.length > 1 && (
                          <FeatureDescriptionIcon />
                        )}

                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: {
                              xl: "23px",
                              lg: "23px",
                              md: "21px",
                              sm: "18px",
                              xs: "16px",
                              mob: "14px",
                            },
                            fontWeight: "300",
                            textAlign: {
                              lg: "start",
                              md: "start",
                              sm: "start",
                              xs: "start",
                              mob:
                                feature.featuresDescription.length > 1
                                  ? "start"
                                  : "center",
                            },
                            lineHeight: "130%",
                            // color: "#61698b",
                            color: theme.palette.primary.thirdMain,
                          }}
                        >
                          {featureDescrition}
                        </Typography>
                      </Stack>
                    ))}
                  </Box>
                  <FeatureDescriptionEndLineIcon />
                </Grid>

                {/* Image/Video Column */}
                <Grid
                  item
                  size={{ md: 6, sm: 6, xs: 12, mob: 12 }}
                  order={{
                    lg: reverseOrder ? i + 2 : i + 1,
                    md: reverseOrder ? i + 2 : i + 1,
                    sm: reverseOrder ? i + 2 : i + 1,
                  }}
                  sx={{
                    position: "relative",
                    mb: {
                      lg: "0px",
                      md: "0px",
                      sm: "0px",
                      xs: "0px",
                      mob: "60px",
                    },
                  }}
                >
                  {/* <Box
                    sx={{
                      bgcolor: "#AAD5D5",

                      width: "100%",
                      position: "absolute",
                      height: "100%",
                      borderRadius: "18px",
                      left: reverseOrder ? null : 16,
                      bottom: -16,
                      right: reverseOrder ? 16 : null,
                      zIndex: 1000,
                    }}
                  ></Box> */}
                  {/* <Box
                    sx={{
                      width: "100%",
                      borderRadius: "16px",
                      overflow: "hidden",
                      boxShadow: "0 8px 20px #00968778",
                      zIndex: 10000,
                      position: "relative",
                      paddingTop: "56.25%", 
                    }}
                  >
                    {videoId ? (
                      <>
                        <Box
                          component="iframe"
                          sx={{
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                            border: "none",
                            transform: "scale(1.02)",
                            transformOrigin: "center center",
                          }}
                          src={embedUrl}
                          allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        >
                          Your browser does not support iframes.
                        </Box>

                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 10001,
                            bgcolor: "transparent",
                            pointerEvents: "auto",
                            cursor: "default",
                          }}
                        />
                      </>
                    ) : (
                      // Fallback for non-YouTube or empty videoSrc
                      <Typography
                        variant="body2"
                        sx={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          color: "white",
                        }}
                      >
                        No video available or invalid URL.
                      </Typography>
                    )}
                  </Box> */}
                  {/* In your FeaturesSection - replace the video section */}
                  <FeatureVideoWithOverlay
                    videoId={videoId}
                    videoDuration={
                      feature.featureHeading === "Wudu Guidance"
                        ? 9
                        : feature.featureHeading === "Salah Guidance"
                        ? 9
                        : feature.featureHeading === "Read Quran Guidance"
                        ? 7
                        : feature.featureHeading === "Listen Quran Guidance"
                        ? 6
                        : feature.featureHeading === "Sahid Hadith Guidance"
                        ? 7
                        : feature.featureHeading === "Qibla Direction Guidance"
                        ? 10
                        : 9
                    }
                    featureIndex={i} // ✅ CRITICAL: Add this line
                  />
                </Grid>
              </React.Fragment>
            );
          })}
        </Grid>
        {exploreMoreBtnExist && (
          <SectionMajorButton>Explore More</SectionMajorButton>
        )}
      </Stack>
    </Stack>
  );
}
