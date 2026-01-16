"use client";
import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import theme from "@/styles/theme";
import DownloadNowButton from "@/components/common/DownloadNowButton";
import LeftArrowIcon from "@/app/features/_components/icons/LeftArrowIcon";
import TakeQuizzesSection from "@/app/features/_components/TakeQuizzesSection";
import Image from "next/image";
import FeaturesSection from "../_components/FeaturesSection";

const featuresData = [
  {
    featureHeading: "Build lasting habits and collect endless hasanat",
    highlightWords: ["endless hasanat"], // ✅ highlight words
    featuresDescription: [
      "Earn hasanat daily through simple reminders and consistent good deeds.",
    ],
    btnText: "Start Earning Hasanat",
    btnLink: "",
    imageOne: "/images/featureCardsImages/featureOneImageOne.png",
    imagetwo: "/images/featureCardsImages/featureOneImageTwo.png",
    clipImage: "/images/featureCardsImages/featureTwoClip.png",
  },
  {
    featureHeading:
      "Experience Islam through interactive quizzes that inspire and engage",
    highlightWords: ["interactive quizzes"], // ✅ highlight words
    featuresDescription: [
      "Deepen your knowledge of Qur’an and Sunnah with thought-provoking quizzes designed to make learning enjoyable.",
    ],
    btnText: "Test Your Knowledge",
    btnLink: "",
    imageOne: "/images/featureCardsImages/featureTwoImageOne.png",
    imagetwo: "/images/featureCardsImages/featureTwoImageTwo.png",
    clipImage: "/images/featureCardsImages/featureOneClip.png",
  },
  {
    featureHeading: "Earn Noorons as you learn and grow.",
    highlightWords: ["Noorons"], // ✅ highlight words
    featuresDescription: [
      "Grow your knowledge and watch your Noorons multiply.",
    ],
    btnText: "Go & Earn",
    btnLink: "",
    imageOne: "/images/featureCardsImages/featureThreeImageOne.png",
    imagetwo: "/images/featureCardsImages/featureThreeImageTwo.png",
    clipImage: "/images/featureCardsImages/featureThreeClip.png",
  },
];

export default function Page() {
  const reverseFromItem = 4;
  const iosLink = "https://apple.co/3xfPeyW";
  const androidLink =
    "https://play.google.com/store/apps/details?id=com.kivyx.islamencyclo&hl=en";

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
    <Stack sx={{ overflow: "hidden" }}>
      <Grid
        container
        columns={12}
        spacing={{ lg: 6, md: 6, sm: 6, xs: 6, mob: 6 }}
        sx={{
          px: {
            lg: "104px",
            md: "54px",
            sm: "44px",
            xs: "54px",
            mob: "30px",
          },
          // alignItems: { md: "center", lg: "center" },
          zIndex: 2000,
          pt: "80px",
        }}
      >
        <Grid item size={{ md: 6, sm: 6, xs: 12, mob: 12 }}>
          <Typography
            component="h1"
            variant="body2"
            sx={{
              fontSize: {
                lg: "44px",
                md: "44px",
                sm: "34px",
                xs: "30px",
                mob: "28px",
              },
              fontWeight: "700",
              lineHeight: {
                xl: "130%",
                lg: "130%",
                md: "130%",
                sm: "60px",
                xs: "50px",
                mob: "50px",
              },
              color: theme.palette.primary.main,
            }}
          >
            The World’s best Islamic Hub for habits & Rewards!
          </Typography>
          <Typography
            component="h1"
            variant="body2"
            sx={{
              fontSize: {
                lg: "44px",
                md: "44px",
                sm: "34px",
                xs: "30px",
                mob: "28px",
              },
              fontWeight: "400",
              lineHeight: {
                xl: "130%",
                lg: "130%",
                md: "130%",
                sm: "60px",
                xs: "50px",
                mob: "50px",
              },
              color: "#008081",
              pb: {
                lg: "60px",
                md: "40px",
                sm: "50px",
                xs: "40px",
                mob: "30px",
              },
            }}
          >
            Meet Islam Encyclo
          </Typography>
          <DownloadNowButton fontSize="20px" px="34px" py="21px" />
        </Grid>

        {/* Header Image */}
        <Grid item size={{ md: 6, sm: 6, xs: 12, mob: 12 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingBottom: "56.25%", // Maintains 16:9 aspect ratio
              mx: "auto",
              mb: "40px",
              overflow: "hidden",
              borderRadius: "12px",
            }}
          >
            <Image
              src="/images/featuresPageBg.png"
              alt="Islam Encyclo Features Background"
              fill // Makes the image fill the parent Box
              style={{ objectFit: "cover", borderRadius: "22px" }} // Cover the area, apply border-radius
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" // Responsive sizes
              priority // Prioritize loading of this image
            />
          </Box>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Stack
        direction="column"
        sx={{
          alignItems: "center",
          // pt: { lg: "100px", md: "80px", sm: "60px", xs: "40px", mob: "40px" },
        }}
      >
        <>
          <FeaturesSection exploreMoreBtnExist={false} />{" "}
          <Grid
            container
            columns={12}
            spacing={{ lg: 9, md: 6, sm: 3, xs: 3, mob: 3 }}
            rowGap={{
              lg: "90px",
              md: "90px",
              sm: "70px",
              xs: "50px",
              mob: "30px",
            }}
            sx={{
              px: {
                lg: "114px",
                md: "44px",
                sm: "36px",
                xs: "30px",
                mob: "10px",
              },
              alignItems: { md: "center", lg: "center" },
              zIndex: 2000,
              pt: {
                lg: "120px",
                md: "100px",
                sm: "80px",
                xs: "60px",
                mob: "40px",
              },
            }}
          >
            {featuresData.map((feature, i) => {
              // ✅ Build dynamic heading with highlighted words
              let parts = [feature.featureHeading];
              feature.highlightWords.forEach((word) => {
                parts = parts.flatMap((part, idx) =>
                  typeof part === "string"
                    ? part.split(new RegExp(`(${word})`, "gi")).map((sub, j) =>
                        sub.toLowerCase() === word.toLowerCase() ? (
                          <Box
                            component="span"
                            key={`${idx}-${j}`}
                            sx={{ color: "#008081", fontWeight: 500 }}
                          >
                            {sub}
                          </Box>
                        ) : (
                          sub
                        )
                      )
                    : part
                );
              });
              const dynamicHeading = parts;

              const reverseFrom = i + 1 >= reverseFromItem;
              const reverseOrder = (i + 1) % 2 === 0;

              return (
                <React.Fragment key={i}>
                  {/* Text Column */}
                  <Grid
                    item
                    size={{ md: 6, sm: 6, xs: 12, mob: 12 }}
                    order={{ lg: reverseOrder ? i + 1 : i + 2 }}
                    sx={{
                      py: "20px",
                      display: "flex",
                      flexDirection: "column",
                      // justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: {
                          md: "44px",
                          sm: "28px",
                          xs: "26px",
                          mob: "24px",
                        },
                        fontWeight: "400",
                        color: theme.palette.primary.main,
                        alignSelf: "start",
                        lineHeight: "100%",
                        textAlign: {
                          lg: "start",
                          md: "start",
                          sm: "start",
                          xs: "start",
                          mob: "center",
                        },
                      }}
                    >
                      {dynamicHeading}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "21px",
                        fontWeight: "300",
                        lineHeight: "130%",
                        color: theme.palette.primary.thirdMain,
                        pt: "20px",
                        textAlign: {
                          lg: "start",
                          md: "start",
                          sm: "start",
                          xs: "start",
                          mob: "center",
                        },
                      }}
                    >
                      {feature.featuresDescription}
                    </Typography>

                    <Button
                      variant="text"
                      onClick={handleDownload}
                      sx={{
                        textTransform: "none", // Prevent uppercase
                        fontSize: "24px", // Adjust font size as needed
                        fontWeight: "300", // Adjust font weight as needed
                        display: "flex",
                        alignItems: "center",
                        color: "#008081",
                        gap: "15px", // Space between text and arrow
                        "&:hover": {
                          bgcolor: "transparent", // Keep background transparent on hover
                        },
                        p: "0px",
                        mt: {
                          lg: "40px",
                          md: "40px",
                          sm: "20px",
                          xs: "20px",
                          mob: "20px",
                        },
                        alignSelf: {
                          lg: "start",
                          md: "start",
                          sm: "start",
                          xs: "start",
                          mob: "center",
                        },
                      }}
                    >
                      {feature.btnText}
                      <LeftArrowIcon /> {/* Arrow icon */}
                    </Button>
                  </Grid>

                  {/* Image/Video Column */}
                  <Grid
                    item
                    size={{ md: 6, sm: 6, xs: 12, mob: 12 }}
                    order={{ lg: reverseOrder ? i + 2 : i + 1 }}
                    sx={{
                      position: "relative",
                      pb: {
                        lg: "0px",
                        md: "0px",
                        sm: "0px",
                        xs: "0px",
                        mob: "40px",
                      },
                    }}
                  >
                    <Stack
                      sx={{
                        background:
                          "linear-gradient(222.52deg, #008081 -82.97%, #242424 14.99%, #008081 95.46%) padding-box padding-box, linear-gradient(180deg, #FFFFFF 0%, rgba(128, 192, 192, 0.68) 100%) border-box border-box",
                        border: "1px solid transparent",
                        borderRadius: "20px",
                        p: "20px",
                        flexDirection: "row",

                        position: "relative",
                        overflow: "hidden",
                        alignItems: "start",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          zIndex: 1000,
                          pl: "50px",
                          boxShadow: "100px 100px 150px 0px #00000040",
                          bgcolor: "transparent",
                          borderRadius: "20px",
                        }}
                      >
                        {" "}
                        <Image
                          src={feature.imagetwo}
                          alt="Feature Image Two"
                          width={230}
                          height={180}
                          style={{
                            // position: "absolute",
                            // right: 100,
                            // bottom: -70,
                            objectFit: "cover",
                            borderRadius: "20px",
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          pb: "100px",
                          position: "relative",
                          bottom: -150,
                          left: -50,
                          zIndex: 0,
                          borderRadius: "20px",
                        }}
                      >
                        <Image
                          src={feature.imageOne}
                          alt="Feature Image One"
                          width={230}
                          height={500}
                          style={{
                            objectFit: "contain",

                            borderRadius: "20px",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          top: i % 2 === 0 ? "0" : null,
                          right: i % 2 === 0 ? -16 : null,
                          bottom: i % 2 === 0 ? null : -70,
                          left: i % 2 === 0 ? null : -70,
                        }}
                      >
                        <Image
                          src={feature.clipImage}
                          alt="Feature Image One"
                          width={200}
                          height={500}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                    </Stack>
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        </>
      </Stack>
      <TakeQuizzesSection />
    </Stack>
  );
}
