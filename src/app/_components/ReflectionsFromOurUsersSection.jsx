"use client";
import React, { useState } from "react";
import { Stack, Typography, Box, Rating, Button } from "@mui/material";
import SectionMainHeading from "@/components/common/SectionMainHeading";
import PlayStoreIcon from "@/app/_components/icons/PlayStoreIcon";
import AppleStoreIcon from "@/app/_components/icons/AppleStoreIcon";
import FilledStar from "@/app/_components/icons/FilledStar";
import ReviewsIcon from "@/app/_components/icons/ReviewsIcon";
import EmptyStar from "@/app/_components/icons/EmptyStar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SliderDots from "./SliderDots";

const userReviews = [
  {
    icon: PlayStoreIcon,
    storeReviews: [
      {
        review:
          "I’ve been using this Islamic app and I must say it has everything a Muslim could ask for in one place—Quran, prayer times, Qibla direction, duas, and so much more. What impressed me the most is the prayer streak feature; it really motivates me to stay consistent with my Salah and build a strong habit. The design is simple, user-friendly, and everything works smoothly. Truly a complete app for daily Islamic guidance and practice. Highly recommended!",
        reviewer: "Inshaal Zaheer",
      },
      {
        review:
          "I’ve used many Islamic apps before, but this one truly stands out. From the moment I downloaded it, I was impressed by its clean design, easy navigation, and wide range of features. Whether you're looking for accurate prayer times, Qur’an with beautiful recitation, or daily Islamic reminders, this app has it all in one place!",
        reviewer: "Malik Hussain",
      },
      {
        review:
          "Very helpful app for reading , listening and tracking your prayers.",
        reviewer: "Adil Sarwar",
      },
      {
        review:
          "I like app because it's easy to use for people who even know how to use mobile 10%. All things is one-click accessable with understandable graphics images",
        reviewer: "Abubakr khan",
      },
      {
        review:
          "It's amazing app helps to clear your misunderstanding about Islam",
        reviewer: "Hammmad Riaz",
      },
      {
        review:
          "Amazing Islamic App! Beautiful User Interface and with all Islamic features hain. reading Quran feature is amazing and qibla compass very helpful",
        reviewer: "Abdul Rehman",
      },
      {
        review:
          "Very nice app with intuitive UI. Highly recommended for Islamic knowledge from pillars to Advance",
        reviewer: "Hasnane",
      },
      {
        review:
          "Very nice app to listen complete holy quran tilawat without any ads.",
        reviewer: "Zia Ur Rehman Tanoli",
      },
      {
        review:
          "Excellent content covering all daily requirement. Really helpful to find direction of qibla.",
        reviewer: "Muhammad aamir Tanoli",
      },
      {
        review:
          "Great work keep it up 👍 kindly add azan and azkar option also",
        reviewer: "Abdul Hameed",
      },
      {
        review: "I'm very impressed with this app I'll recommended to everyone",
        reviewer: "Yasir Khan",
      },
      {
        review:
          "nice app to connect Islam, give all the basic s of learning islam",
        reviewer: "Hamza .official",
      },
      {
        review: "Nice app for listening quran, find qibla and more",
        reviewer: "Muhammad Fiaz",
      },
      {
        review: "Best app for those who can't read Quran Mashallah",
        reviewer: "Malik Bilal",
      },
      {
        review: "MashaAllah quran tilwaat surah by surah without ads",
        reviewer: "Muhammed Iqbal",
      },
      {
        review:
          "MashaAllah véry niçé àpp. I àm loving using it. Qiblà direction really hélpéd mé find the right qíblà direction in my néw apartment.",
        reviewer: "Abdul Muneeb",
      },
    ],
  },
  {
    icon: AppleStoreIcon,
    storeReviews: [
      {
        review:
          "I’ve been using this Islamic app and I must say it has everything a Muslim could ask for in one place—Quran, prayer times, Qibla direction, duas, and so much more. What impressed me the most is the prayer streak feature; it really motivates me to stay consistent with my Salah and build a strong habit. The design is simple, user-friendly, and everything works smoothly. Truly a complete app for daily Islamic guidance and practice. Highly recommended!",
        reviewer: "Inshaal Zaheer",
      },
      {
        review:
          "I’ve used many Islamic apps before, but this one truly stands out. From the moment I downloaded it, I was impressed by its clean design, easy navigation, and wide range of features. Whether you're looking for accurate prayer times, Qur’an with beautiful recitation, or daily Islamic reminders, this app has it all in one place!",
        reviewer: "Malik Hussain",
      },
      {
        review:
          "Very helpful app for reading , listening and tracking your prayers.",
        reviewer: "Adil Sarwar",
      },
      {
        review:
          "I like app because it's easy to use for people who even know how to use mobile 10%. All things is one-click accessable with understandable graphics images",
        reviewer: "Abubakr khan",
      },
      {
        review:
          "It's amazing app helps to clear your misunderstanding about Islam",
        reviewer: "Hammmad Riaz",
      },
      {
        review:
          "Amazing Islamic App! Beautiful User Interface and with all Islamic features hain. reading Quran feature is amazing and qibla compass very helpful",
        reviewer: "Abdul Rehman",
      },
      {
        review:
          "Very nice app with intuitive UI. Highly recommended for Islamic knowledge from pillars to Advance",
        reviewer: "Hasnane",
      },
      {
        review:
          "Very nice app to listen complete holy quran tilawat without any ads.",
        reviewer: "Zia Ur Rehman Tanoli",
      },
      {
        review:
          "Excellent content covering all daily requirement. Really helpful to find direction of qibla.",
        reviewer: "Muhammad aamir Tanoli",
      },
      {
        review:
          "Great work keep it up 👍 kindly add azan and azkar option also",
        reviewer: "Abdul Hameed",
      },
      {
        review: "I'm very impressed with this app I'll recommended to everyone",
        reviewer: "Yasir Khan",
      },
      {
        review:
          "nice app to connect Islam, give all the basic s of learning islam",
        reviewer: "Hamza .official",
      },
      {
        review: "Nice app for listening quran, find qibla and more",
        reviewer: "Muhammad Fiaz",
      },
      {
        review: "Best app for those who can't read Quran Mashallah",
        reviewer: "Malik Bilal",
      },
      {
        review: "MashaAllah quran tilwaat surah by surah without ads",
        reviewer: "Muhammed Iqbal",
      },
      {
        review:
          "MashaAllah véry niçé àpp. I àm loving using it. Qiblà direction really hélpéd mé find the right qíblà direction in my néw apartment.",
        reviewer: "Abdul Muneeb",
      },
    ],
  },
];

import theme from "@/styles/theme";
export default function ReflectionsFromOurUsersSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Define general app store review links
  const androidPackageName = "com.kivyx.islamencyclo";
  // IMPORTANT: Replace <YOUR_IOS_APP_ID> with your actual numeric Apple App ID
  const iosAppId = "YOUR_IOS_APP_ID";

  const getAndroidReviewLink = () => {
    // For Android devices (opens directly in Play Store app to review)
    if (
      typeof window !== "undefined" &&
      /android/i.test(navigator.userAgent || navigator.vendor)
    ) {
      return `market://details?id=${androidPackageName}&showAllReviews=true`;
    }
    // Fallback for web browsers or non-Android devices
    return `https://play.google.com/store/apps/details?id=${androidPackageName}&showAllReviews=true`;
  };

  const getIosReviewLink = () => {
    // For iOS devices (opens directly in App Store app to write review)
    if (
      typeof window !== "undefined" &&
      /iPad|iPhone|iPod/.test(navigator.userAgent || navigator.vendor) &&
      !window.MSStream
    ) {
      return `itms-apps://itunes.apple.com/app/id${iosAppId}?action=write-review`;
    }
    // Fallback for web browsers or non-iOS devices
    return `https://apps.apple.com/app/id${iosAppId}?action=write-review`;
  };

  return (
    <Stack sx={{ pb: "90px" }}>
      <SectionMainHeading>Reflections from Our Users</SectionMainHeading>
      {userReviews.map((userReview, i) => {
        const totalSlides = userReview.storeReviews.length;

        // Determine which link handler to use based on index (0 for Google Play, 1 for Apple Store)
        const handleReviewClick = () => {
          let linkToOpen;
          if (i === 0) {
            // Google Play Store button
            linkToOpen = getAndroidReviewLink();
          } else if (i === 1) {
            // Apple App Store button
            linkToOpen = getIosReviewLink();
          }

          if (linkToOpen) {
            window.open(linkToOpen, "_blank");
          }
        };

        return (
          <Stack key={i} sx={{ pt: "70px" }}>
            <Stack
              direction={{
                lg: "row",
                md: "row",
                sm: "row",
                xs: "column",
                mob: "column",
              }}
              sx={{
                borderRadius: "20px",
                background:
                  "linear-gradient(#CCE6E6ED, #CCE6E6ED), linear-gradient(95.32deg, #008081 3.26%, #AAD5D5 52.35%, rgba(0, 128, 129, 0.69) 96.75%)",
                backgroundClip: "padding-box, border-box",
                backgroundOrigin: "padding-box, border-box",
                border: "6px solid transparent",
                width: "max-content",
                // mx: {
                //   lg: "0px",
                //   md: "120px",
                //   sm: "100px",
                //   xs: "80px",
                //   mob: "20px",
                // },
                p: "30px",
                alignItems: "center",
                flexWrap: "row",
                mb: "50px",
                gap: {
                  lg: "180px",
                  md: "160px",
                  sm: "150px",
                  xs: "50px",
                  mob: "50px",
                },
                alignSelf: "center",
              }}
            >
              <Stack sx={{}}>
                <Box
                  sx={
                    {
                      // display: "flex",
                      // flexDirection: "row",
                      // alignItems: "center",
                      // gap: "18px",
                      // pb: "4px",
                    }
                  }
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: {
                        lg: "24px",
                        md: "24px",
                        sm: "22px",
                        xs: "20px",
                      },
                      fontWeight: "400",
                      color: "#242424",
                      lineHeight: "130%",

                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <userReview.icon width="40px" height="44px" />{" "}
                    {i === 0 ? "Google Play" : "Apple Store"}
                    <span
                      style={{
                        fontSize: "28px",
                        fontWeight: "500",
                        color: "#008081 ",
                      }}
                    >
                      Reviews
                    </span>
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: {
                      lg: "23px",
                      md: "27px",
                      sm: "22px",
                      xs: "20px",
                    },
                    fontWeight: "500",
                    color: "#242424",
                    lineHeight: "130%",
                  }}
                >
                  5.00
                </Typography>
                <Rating
                  value={5}
                  precision={0.5}
                  icon={<FilledStar width="22px" height="20px" />}
                  emptyIcon={<EmptyStar width="22px" height="21px" />}
                  readOnly
                  sx={{
                    color: "#008081",
                  }}
                />
              </Box>
              {/* <Button
                variant="contained"
                onClick={handleReviewClick}
                sx={{
                  minWidth: "auto",
                  width: "auto",
                  textTransform: "none",
                  color: "#ffffff",
                  bgcolor: "#008081",
                  boxShadow:
                    "0px 9px 20px 0px #053C3D1A, 0px 36px 36px 0px #053C3D17, 0px 80px 48px 0px #053C3D0D, 0px 143px 57px 0px #053C3D03, 0px 223px 63px 0px #053C3D00",
                  fontSize: {
                    lg: "23px",
                    md: "23px",
                    sm: "21px",
                    xs: "18px",
                    mob: "18px",
                  },
                  fontWeight: "500",
                  borderRadius: "6px",
                  px: {
                    lg: "50px",
                    md: "50px",
                    sm: "40px",
                    xs: "30px",
                    mob: "20px",
                  },
                  height: "max-content",
                  py: "17px",
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
                Review us on {i === 0 ? "Google Play" : "Apple Store"}
              </Button> */}
            </Stack>
            <Stack
              sx={{
                overflow: "hidden",
                position: "relative",
                pb: {
                  lg: "130px",
                  md: "130px",
                  sm: "130px",
                  xs: "130px",
                  mob: "70px",
                },
                pt: "50px",
              }}
            >
              <Swiper
                modules={[Autoplay]}
                spaceBetween={60}
                loop={true}
                slidesPerView={2.5}
                centeredSlides={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1, // 1 slide for screens 0px and up (mobile)
                    spaceBetween: 20, // Adjust space for single slide view
                  },
                  640: {
                    slidesPerView: 2, // 2 slides for screens 640px and up (small tablets)
                    spaceBetween: 30, // Adjust space for two slides
                  },
                  768: {
                    slidesPerView: 2.5, // 2.5 slides for screens 768px and up (desktop/larger)
                    spaceBetween: 60, // Original space
                  },
                }}
                speed={1500}
                style={{
                  width: "100%",
                  height: "auto",
                }}
                sx={{
                  "& .swiper-slide": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: { xs: "10px", sm: "20px" },
                  },
                }}
              >
                {userReview.storeReviews.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Stack
                      sx={{
                        position: "relative",
                        background: "transparent",
                        borderRadius: "20px",
                        alignItems: "start",
                        flexGrow: 1,
                        justifyContent: "space-between",
                        p: "40px",
                        height: "100%",
                        boxSizing: "border-box",
                        color: "white",
                        textAlign: "center",
                        gap: "10px",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: "0px",
                          left: "6px",
                          right: "6px",
                          bottom: "0px",
                          background:
                            "linear-gradient(95.32deg, #80C0C0 3.26%, #AAD5D5 52.35%, rgba(0, 128, 129, 0.69) 96.75%)",
                          borderRadius: "16px",
                          zIndex: -1,
                          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                          maskComposite: "exclude",
                          padding: "6px",
                        },
                      }}
                    >
                      <Box sx={{ alignSelf: "end" }}>
                        <ReviewsIcon />
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: {
                            md: "20px",
                            sm: "20px",
                            xs: "20px",
                          },
                          fontWeight: "300",
                          color: theme.palette.primary.main,
                          textAlign: "start",
                          lineHeight: "130%",
                          flex: 1,
                        }}
                      >
                        {item.review}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "22px",
                          fontWeight: "500",
                          lineHeight: "150%",
                          color: theme.palette.primary.thirdMain,

                          textAlign: "start",
                          flex: 1,
                        }}
                      >
                        {item.reviewer}
                      </Typography>
                    </Stack>
                  </SwiperSlide>
                ))}
              </Swiper>
              <SliderDots
                activeStep={activeIndex}
                totalSteps={totalSlides}
                bgcolor="none"
                bottom={0}
                dotHeight={10}
                unActiveDotWidth={10}
                gap="8px"
              />
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
}
