"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import SliderDots from "@/app/_components/SliderDots";
import theme from "@/styles/theme";

const prayersData = [
  { name: "Fajr", key: "Fajr", icon: "/images/prayerImages/fajr.png" },
  { name: "Dhuhr", key: "Dhuhr", icon: "/images/prayerImages/zuhar.png" },
  { name: "Asr", key: "Asr", icon: "/images/prayerImages/asar.png" },
  { name: "Maghrib", key: "Maghrib", icon: "/images/prayerImages/maghrib.png" },
  { name: "Isha", key: "Isha", icon: "/images/prayerImages/isha.png" },
];

function format12Hour(time24) {
  if (!time24) return "";
  const [hourStr, minute] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
}

export default function PrayerTimeAndAyatSlider({ timings, hijri, gregorian }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = 2;
  return (
    <Stack>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        loop={true}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        //   pagination={{
        //     clickable: true,
        //     renderBullet: (index, className) => {
        //       return `<span class="${className}"></span>`;
        //     },
        //   }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1500}
        style={{
          maxWidth: "75vw",
          height: "auto",
          // overflow: "hidden",
          "--swiper-pagination-color": "teal",
          "--swiper-pagination-bullet-inactive-color": "white",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "7px",
          "--swiper-pagination-bullet-horizontal-gap": "3px",
        }}
        sx={{
          // maxWidth: {
          //   lg: "826px",
          //   md: "726px",
          //   xs: "626px",
          //   sm: "426px",
          //   mob: "300px",
          // },
          "& .swiper-pagination": {
            position: "absolute !important",
            bottom: "0 !important",
            left: "50% !important",
            transform: "translateX(-50%) !important",
            // width: "max-content !important",
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
        <SwiperSlide>
          <Box
            id="Dates-And-Prayers-Times"
            sx={{
              mx: {
                lg: "40px",
                md: "40px",
                sm: "30px",
                xs: "20px",
                mob: "10px",
              },
            }}
          >
            <Stack
              direction="row"
              sx={{
                justifyContent: "space-between",
                pb: {
                  xl: "50px",
                  lg: "50px",
                  md: "50px",
                  sm: "50px",
                  xs: "50px",
                  sm: "30px",
                },
                pt: {
                  lg: "0px",
                  md: "0px",
                  sm: "0px",
                  xs: "0px",
                  mob: "4px",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xl: "32px",
                    lg: "32px",
                    md: "28px",
                    sm: "26px",
                    xs: "22px",
                    mob: "12px",
                  },
                  fontWeight: "600",
                  color: "#008081",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: {
                      xl: "25px",
                      lg: "24px",
                      md: "24px",
                      sm: "22px",
                      xs: "20px",
                      mob: "10px",
                    },
                    color: "#242424C4",
                    fontWeight: "300",
                    lineHeight: "130%",
                  }}
                >
                  Today's Islamic Date
                </span>
                {hijri}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: {
                    xl: "32px",
                    lg: "32px",
                    md: "28px",
                    sm: "26px",
                    xs: "22px",
                    mob: "12px",
                  },
                  fontWeight: "600",
                  color: "#008081",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: {
                      xl: "25px",
                      lg: "24px",
                      md: "24px",
                      sm: "22px",
                      xs: "20px",
                      mob: "10px",
                    },
                    color: "#242424C4",
                    fontWeight: "300",
                    lineHeight: "130%",
                  }}
                >
                  Today English Date
                </span>
                {gregorian}
              </Typography>
            </Stack>
            <Stack
              sx={{
                zIndex: "3",
                justifyContent: "space-between",
                pt: {
                  lg: "0px",
                  md: "0px",
                  sm: "0px",
                  xs: "0px",
                  mob: "16px",
                },
                position: "relative",
              }}
              direction="row"
              id="prayers-section"
            >
              {prayersData.map((prayer, i) => (
                <Stack key={i} alignItems="center">
                  <Box
                    sx={{
                      position: "relative",
                      width: {
                        xl: "80px",
                        lg: "70px", // Desktop size
                        md: "70px", // Medium screens
                        sm: "60px", // Small tablets
                        xs: "50px", // Extra-small screens
                        mob: "20px", // Very small mobile
                      },
                      height: {
                        lg: "100px", // Desktop size
                        md: "90px", // Medium screens
                        sm: "80px", // Small tablets
                        xs: "70px", // Extra-small screens
                        mob: "40px", // Very small mobile
                      },
                    }}
                  >
                    <Image
                      src={prayer.icon}
                      alt={prayer.name}
                      fill // Image will now fill its parent Box
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                    />
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: {
                        xl: "18px",
                        lg: "18px",
                        md: "18px",
                        sm: "16px",
                        xs: "14px",
                        mob: "8px",
                      },
                      fontWeight: "400",
                      color: theme.palette.primary.main,
                      pt: "10px",
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {timings[prayer.key]}{" "}
                    <span>{format12Hour(timings[prayer.key])} </span>
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box
            id="Daily-Ayat"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              px: {
                lg: "100px",
                md: "20px",
                sm: "0px",
                xs: "0px",
                mob: "0px",
              },
              py: {
                lg: "20px",
                md: "20px",
                sm: "20px",
                xs: "20px",
                mob: "0px",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xl: "40px",
                  lg: "36px",
                  md: "30px",
                  sm: "22px",
                  xs: "20px",
                  mob: "10px",
                },
                fontWeight: "500",
                lineHeight: "109.00000000000001%",
                color: theme.palette.primary.main,
                pb: "18px",
              }}
            >
              Ayat of the day
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xl: "40px",
                  lg: "36px",
                  md: "30px",
                  sm: "22px",
                  xs: "20px",
                  mob: "10px",
                },
                fontWeight: "400",
                lineHeight: "186%",
                fontFamily: "'Amiri Quran' !important",
                // fontFamily: "Inter",
                color: theme.palette.primary.main,
                pb: "4px",
              }}
            >
              فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xl: "25px",
                  lg: "25px",
                  md: "24px",
                  sm: "22px",
                  xs: "20px",
                  mob: "10px",
                },
                fontWeight: "400",
                lineHeight: "280%",
                fontFamily: "var(--font-noto-nastaliq-urdu) !important",
                color: theme.palette.primary.main,
                pb: "8px",
                textAlign: "center",
              }}
            >
              تم مجھے یاد کرو، میں تمہیں یاد کروں گا، اور میرا شکر ادا کرو اور
              ناشکری نہ کرو۔
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: {
                  xl: "20px",
                  lg: "20px",
                  md: "20px",
                  sm: "18px",
                  xs: "14px",
                  mob: "8px",
                },
                fontWeight: "200",
                lineHeight: "280%",
                color: theme.palette.primary.main,
              }}
            >
              (Surah Al-Baqarah, 2:152)
            </Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
      <SliderDots activeStep={activeIndex} totalSteps={totalSlides} />
    </Stack>
  );
}
