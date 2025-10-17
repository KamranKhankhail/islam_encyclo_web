"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import SliderDots from "@/app/_components/SliderDots";
import ResponsiveSliderIcon from "./icons/ResponsiveSliderIcon";
import theme from "@/styles/theme";
import SliderIcon from "./icons/SliderIcon";

const dailyAyatsData = [
  {
    dailyAyat: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    ayatTranslation:
      " تم مجھے یاد کرو، میں تمہیں یاد کروں گا، اور میرا شکر ادا کرو اور ناشکری نہ کرو۔",
    ayatReference: " (Surah Al-Baqarah, 2:152)",
  },
  {
    dailyAyat: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا",
    ayatTranslation:
      "اور سب مل کر اللہ کی رسی (دین) کو مضبوطی سے پکڑ لو اور تفرقہ نہ ڈالو۔",
    ayatReference: "(Surah Aal-e-Imran, 3:103)",
  },
  {
    dailyAyat: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    ayatTranslation: "بیشک اللہ صبر کرنے والوں کے ساتھ ہے۔",
    ayatReference: "(Surah Al-Baqarah, 2:153)",
  },
  {
    dailyAyat: "إِنَّ اللَّهَ يُحِبُّ الْمُتَوَكِّلِينَ",
    ayatTranslation: "بیشک اللہ توکل کرنے والوں سے محبت کرتا ہے۔",
    ayatReference: "(Surah Aal-e-Imran, 3:159)",
  },
  {
    dailyAyat: "إِنَّ اللَّهَ لَا يُحِبُّ الْمُعْتَدِينَ",
    ayatTranslation: "بیشک اللہ زیادتی کرنے والوں کو پسند نہیں کرتا۔",
    ayatReference: "(Surah Al-Baqarah, 2:190)",
  },
  {
    dailyAyat: "إِنَّ اللَّهَ مَعَ الْمُحْسِنِينَ",
    ayatTranslation: "بیشک اللہ نیکوکاروں کے ساتھ ہے۔",
    ayatReference: "(Surah Al-Ankabut, 29:69)",
  },
  {
    dailyAyat: "وَقُولُوا لِلنَّاسِ حُسْنًا",
    ayatTranslation: "اور لوگوں سے اچھی بات کیا کرو۔",
    ayatReference: "(Surah Al-Baqarah, 2:83)",
  },
];
const sliderIcons = [
  { left: 20, top: 20, right: "auto", bottom: "auto", transform: "none" }, // Top-left
  {
    right: 25, // Adjusted to pull 10px inwards from the right edge
    top: 15,
    left: "auto",
    bottom: "auto",
    transform: "rotate(90deg)",
  }, // Top-right
  {
    left: 25,
    bottom: 10, // Adjusted to pull 10px inwards from the bottom edge
    right: "auto",
    top: "auto",
    transform: "rotate(270deg)",
  }, // Bottom-left
  {
    right: 20,
    bottom: 20,
    left: "auto",
    top: "auto",
    transform: "rotate(180deg)",
  }, // Bottom-right
];

export default function AyatOfTheDaySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = dailyAyatsData.length + 1;
  return (
    <Stack
      id="header Slider"
      sx={{
        // borderRadius: "20px",
        background:
          "linear-gradient(rgba(170, 213, 213, 0.82), rgba(170, 213, 213, 0.82)), url(/images/ayatOfTheDay.webp)",
        backgroundSize: "cover", // Ensures the image covers the container
        backgroundRepeat: "no-repeat", // Prevents image repetition
        backgroundPosition: "center", // Centers the background image
        zIndex: 10000,
        p: "20px",
        alignItems: "center",
        mx: { lg: "100px", md: "80px", sm: "60px", xs: "40px", mob: "10px" },
        justifyContent: "center",
        position: "relative",
        height: {
          lg: "95vh",
          md: "95vh",
          sm: "90vh",
          xs: "75vh",
          mob: "60vh",
        },
        py: "80px",
        mb: "160px",
      }}
    >
      {sliderIcons.map((sliderIcon, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            // transform: "rotate(90deg)"
            right: sliderIcon.right,
            left: sliderIcon.left,
            top: sliderIcon.top,
            bottom: sliderIcon.bottom,
            transform: sliderIcon.transform,
          }}
        >
          {/* <SliderIcon width="115px" height="125px" /> */}
          <ResponsiveSliderIcon SliderIcon={SliderIcon} />
        </Box>
      ))}

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        loop={true}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        style={{
          width: "80vw",
          height: "max-content",
          // overflow: "hidden",
          "--swiper-pagination-color": "teal",
          "--swiper-pagination-bullet-inactive-color": "white",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "7px",
          "--swiper-pagination-bullet-horizontal-gap": "3px",
        }}
        sx={{
          "& .swiper-pagination": {
            position: "absolute !important",
            bottom: "0 !important",
            left: "50% !important",
            transform: "translateX(-50%) !important",
            //   width: "max-content !important",
            backgroundColor: "#CCE6E6 !important",
            padding: "6px 8px !important",
            borderRadius: "8px !important",
            display: "flex !important",
            gap: "6px !important",
            alignItems: "center !important",
          },
          "& .swiper-pagination-bullet": {
            width: "35px !important",
            height: "7px !important",
            borderRadius: "8px !important",
            backgroundColor: "white !important",
            transition: "all 0.3s ease !important",
            margin: "0 !important",
            opacity: "1 !important",
          },
          "& .swiper-pagination-bullet-active": {
            width: "35px",
            backgroundColor: "teal !important",
          },
        }}
      >
        {dailyAyatsData.map((dailyAyat) => (
          <SwiperSlide>
            <Box
              id="Daily-Ayat"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: {
                  lg: "100px",
                  md: "80px",
                  sm: "60px",
                  xs: "40px",
                  mob: "20px",
                },
                py: "20px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    lg: "50px",
                    md: "40px",
                    sm: "30px",
                    xs: "22px",
                    mob: "18",
                  },
                  fontWeight: "500",
                  lineHeight: "109.00000000000001%",
                  color: theme.palette.primary.main,
                  pb: "38px",
                }}
              >
                Ayat of the day
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    lg: "40px",
                    md: "30px",
                    sm: "20px",
                    xs: "18px",
                    mob: "14px",
                  },
                  fontWeight: "400",
                  lineHeight: "186%",
                  fontFamily: "'Amiri Quran' !important",
                  // fontFamily: "Inter",
                  color: theme.palette.primary.main,
                  pb: "4px",
                }}
              >
                {dailyAyat.dailyAyat}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    lg: "35px",
                    md: "30px",
                    sm: "20px",
                    xs: "18px",
                    mob: "12px",
                  },

                  fontWeight: "400",
                  lineHeight: "280%",
                  fontFamily: "var(--font-noto-nastaliq-urdu) !important",
                  color: theme.palette.primary.main,
                  pb: "8px",
                }}
              >
                {dailyAyat.ayatTranslation}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    lg: "30px",
                    md: "26px",
                    sm: "22px",
                    xs: "16px",
                    mob: "12px",
                  },

                  fontWeight: "200",
                  lineHeight: "280%",
                  color: theme.palette.primary.main,
                  pb: "30px",
                }}
              >
                {dailyAyat.ayatReference}
              </Typography>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderDots
        activeStep={activeIndex}
        totalSteps={totalSlides}
        bgcolor="none"
        bottom={30}
        dotHeight={10}
        unActiveDotWidth={10}
        gap="8px"
      />
    </Stack>
  );
}
