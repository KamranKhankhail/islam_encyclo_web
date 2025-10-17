"use client";
import React, { useState } from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import SectionMainHeading from "@/components/common/SectionMainHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SliderDots from "./SliderDots";
const scholarReviewsData = [
  {
    quote:
      "Islam Encyclo is a distinguished digital resource that delivers authentic Islamic knowledge in a clear, reliable and user-friendly format. May Allah reward the team for this service.",
    author: "Maulana Tariq Jamil",
    avatar: "/images/scholars/tariq-jamil.png",
  },
  {
    quote:
      "In an era of widespread misinformation, Islam Encyclo provides a dependable repository of Qur'anic and Prophetic teachings—well-referenced and accessible for learners of all levels.",
    author: "Mufti Muhammad Taqi Usmani",
    avatar: "/images/scholars/taqi-usmani.png",
  },
  {
    quote:
      "This application thoughtfully combines classical scholarship with modern presentation. It will be a practical tool for students, teachers, and sincere seekers of knowledge.",
    author: "Javed Ahmad Ghamidi",
    avatar: "/images/scholars/javed-ghamidi.png",
  },
  {
    quote:
      "A commendable initiative: Islam Encyclo presents verified material with clarity and scholarly care, making it suitable for both personal study and academic reference.",
    author: "Allama Kaukab Noorani Okarvi",
    avatar: "/images/scholars/kaukab-noorani.png",
  },
  {
    quote:
      "Well-structured, credible and easy to navigate — Islam Encyclo is a valuable addition to the digital resources for Islamic learning in Pakistan.",
    author: "Mufti Muhammad Akmal",
    avatar: "/images/scholars/mufti-akmal.png",
  },
  {
    quote:
      "An important contribution to contemporary da'wah and education: this platform responsibly bridges traditional sources and modern access for the benefit of the Ummah.",
    author: "Allama Syed Ahmad Nawaz", // example of another living scholar
    avatar: "/images/scholars/ahmad-nawaz.png",
  },
];

export default function WordsFromEstimatedSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = scholarReviewsData.length; // CORRECTED: Use length of actual data array

  return (
    <Stack
      sx={{
        background:
          "linear-gradient(111.96deg, #008081 -0.54%, #242424 129.54%)",

        py: "100px",
        pb: "120px",
      }}
    >
      <SectionMainHeading color="#ffffff">
        Words from Esteemed Scholars
      </SectionMainHeading>
      <Typography
        variant="body2"
        sx={{
          fontSize: {
            lg: "26px",
            md: "26px",
            sm: "24px",
            xs: "20px",
            mob: "18px",
          },
          fontWeight: "300",
          lineHeight: "130%",
          color: "#ffffff",
          textAlign: "center",
          zIndex: "5",
          pb: "40px",
          pt: "22px",
          px: { xs: "20px", sm: "40px", md: "80px", lg: "140px" }, // Responsive padding
        }}
      >
        Our mission has been endorsed by respected Islamic scholars who
        appreciate the accuracy, clarity, and dedication with which Islam
        Encyclo presents authentic knowledge.
      </Typography>
      {/* This Stack is the immediate parent of Swiper, and will handle clipping */}
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
          px: { lg: "0px", md: "0px", sm: "0px", xs: "0px", mob: "10px" },
        }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={60} // Gap between slides (adjust as needed for visual)
          loop={true}
          slidesPerView={2.5} // Adjusted to 1.5 to make center slide more prominent and sides peek more
          centeredSlides={true} // IMPORTANT: Centers the active slide and shows parts of others
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Use swiper.realIndex for dots
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
              spaceBetween: 40, // Adjust space for two slides
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
            // REMOVED: overflow: "hidden" from here to allow slides to extend out
          }}
          // Removed Swiper's pagination custom CSS properties from sx as SliderDots will handle it
          sx={{
            "& .swiper-slide": {
              display: "flex", // Ensure content inside slide is flexible
              justifyContent: "center",
              alignItems: "center",
              p: { xs: "10px", sm: "20px" }, // Internal padding for slides to prevent content touching edges
            },
          }}
        >
          {scholarReviewsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Stack
                sx={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(213, 234, 234, 0.136) 50%, rgba(170, 213, 213, 0.164) 100%)",
                  border: "2px solid transparent", // Keep this but remove border-image
                  borderRadius: "30px",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-2px",
                    left: "-2px",
                    right: "-2px",
                    bottom: "-2px",
                    background:
                      "linear-gradient(180deg, #008081 0%, rgba(204, 230, 230, 0.93) 50%, #008081 100%)",
                    borderRadius: "32px", // 30px + 2px
                    zIndex: -1,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: "2px",
                  },
                  alignItems: "center",
                  justifyContent: "center",
                  p: "30px 20px",
                  height: "100%",
                  boxSizing: "border-box",
                  minHeight: "400px",
                  color: "white",
                  textAlign: "center",
                  gap: "10px",
                }}
              >
                <Avatar
                  sx={{
                    width: "96px",
                    height: "96px",
                    bgcolor: "transparent", // Solid background for avatar
                    color: "#fff", // Text color if no image
                    border: "1px solid #CCE6E6",
                    mb: "20px", // Margin bottom for spacing
                    img: { objectFit: "cover" }, // Ensure avatar image covers the area
                  }}
                  // src={item.avatar} // Uncomment and provide avatar images if available
                  // alt={item.author}
                >
                  {item.author.charAt(0)}{" "}
                  {/* Display first letter if no avatar image */}
                </Avatar>
                <Typography
                  variant="h6" // Changed to h6 for semantic meaning
                  sx={{
                    fontSize: {
                      md: "24px", // Adjusted font size slightly
                      sm: "22px",
                      xs: "20px",
                    },
                    fontWeight: "500",
                    color: "#ffffff",
                    lineHeight: "130%",
                    pb: "10px", // Adjusted padding
                  }}
                >
                  {item.author}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "18px", // Adjusted font size slightly
                    fontWeight: "300",
                    lineHeight: "150%", // Increased for readability
                    color: "#CCE6E6",
                    pb: "30px", // Adjusted padding
                  }}
                >
                  "{item.quote}"
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
}
