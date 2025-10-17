"use client";
import React, { useState } from "react";
import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import SectionMainHeading from "@/components/common/SectionMainHeading";
import theme from "@/styles/theme";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SliderDots from "@/app/_components/SliderDots";
import Link from "next/link";
import SectionMajorButton from "@/components/common/SectionMajorButton";
// ... existing code ...
const teamData = [
  {
    imgSrc: "/images/hassanPic.jpg",
    developerName: "Muhammad Hassan",
    role: "React Native Developer",
    profile:
      "Muhammad Hassan is a React Native developer who contributed extensively to the development of the Islam Encyclo mobile app. He was responsible for implementing key features, integrating functionalities, and ensuring smooth performance across devices. His work included coding, debugging, and rigorous testing to maintain stability and reliability. Focused on writing clean, efficient code, Muhammad Hassan played a vital role in bringing the app’s functionality to life and ensuring a seamless user experience.",
    socialLinks: [
      {
        iconText: "🔗 LinkedIn",
        href: "https://www.linkedin.com/in/muhammad-hassan-5ba647249/",
      },
      { iconText: "💻 GitHub", href: "https://github.com/muhammadhassan2k3" },
    ],
  },
  {
    imgSrc: "/images/teamImages/kamranYunis.png", // Placeholder image
    developerName: "Muhammad Kamran Younis",
    role: "CEO & Full Stack Engineer",
    profile:
      "As the CEO of Kivyx Technologies and a skilled full-stack React engineer, Muhammad Kamran Younis leads with vision and technical expertise. He played a central role in the development of the Islam Encyclo app — from concept and planning to design, development, and production. With an entrepreneurial mindset, he guided the team through every stage of the project, ensuring quality, innovation, and attention to detail. His leadership and forward-thinking approach continue to drive the success and growth of Kivyx Technologies.",
    socialLinks: [
      {
        iconText: "🔗 LinkedIn",
        href: "https://www.linkedin.com/in/mky8kivxy/",
      },
      { iconText: "💻 GitHub", href: "https://github.com/KamranKhankhail" },
    ],
  },
  {
    imgSrc: "/images/avatar.png", // Placeholder image
    developerName: "Muhammad Ibrahim Mirza",
    role: "Senior UI/UX Designer",
    profile:
      "Muhammad Ibrahim Mirza is a creative UI/UX designer who designed the Islam Encyclo app from the ground up. He transformed ideas into a modern and visually engaging interface that enhances both usability and aesthetics. From wireframes to final visuals, he focused on clarity, accessibility, and smooth navigation, ensuring every screen reflects the app’s purpose and identity. His innovative design approach gives Islam Encyclo its distinctive, user-centered look and feel.",
    socialLinks: [
      {
        iconText: "🔗 LinkedIn",
        href: "https://www.linkedin.com/in/muhammad-ibrahim-mirza-ab7a4712b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      { iconText: "💻 GitHub", href: "" },
    ],
  },
  {
    imgSrc: "/images/teamImages/abdulrehman.png", // Placeholder image
    developerName: "Hafiz Abdul Rehman",
    role: "Full Stack React Engineer",
    profile:
      "Hafiz Abdul Rehman is a web developer with expertise in React.js and Next.js. He played a key role in building the web version of the Islam Encyclo platform, ensuring it delivers a smooth, responsive, and user-friendly experience. From developing core functionalities to optimizing performance and deployment, he worked across every technical layer of the project. His strong understanding of modern web technologies and attention to detail helped shape the website into a reliable and efficient digital platform.",
    socialLinks: [
      {
        iconText: "🔗 LinkedIn",
        href: "https://www.linkedin.com/in/hafiz-abdul-rehman-2a321125a/",
      },
      { iconText: "💻 GitHub", href: "https://github.com/hafizabdulrehman675" },
    ],
  },
  {
    imgSrc: "/images/teamImages/rehanAhmad.jpg", // Placeholder image
    developerName: "Rehan Ahmad",
    role: "Senior Video Editor & Content Creator",
    profile:
      "Rehan Ahmad is a Senior Video Editor and Content Creator who leads the visual storytelling for Islam Encyclo. He creates engaging video content used across social media platforms to promote the app and connect with audiences. Through creative editing, appealing visuals, and user-focused storytelling, he helps the brand attract attention, increase engagement, and build a strong online presence. His work plays a key role in spreading the message of Islam Encyclo to a wider audience.",
    socialLinks: [
      {
        iconText: "🔗 LinkedIn",
        href: "http://linkedin.com/in/rehan-zaffar",
      },
      { iconText: "💻 GitHub", href: "" },
    ],
  },
];

export default function page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = teamData.length;
  return (
    <Stack sx={{}}>
      <Box sx={{ py: "50px" }}>
        <SectionMainHeading
          px={{
            xl: "300px",
            lg: "300px",
            md: "100px",
            sm: "100px",
            xs: "80px",
            mob: "40px",
          }}
        >
          Meet Our Team
        </SectionMainHeading>
        <Typography
          variant="body2"
          sx={{
            fontSize: "22px",
            fontWeight: "300",
            lineHeight: "130%",
            color: theme.palette.primary.thirdMain,
            //   color: "#ffffff",
            textAlign: "center",
            zIndex: "5",
            pb: "20px",
            pt: "34px",
            px: {
              xl: "20px",
              lg: "200px",
              md: "100px",
              sm: "100px",
              xs: "80px",
              mob: "40px",
            },
          }}
        >
          At Islam Encyclo, our strength lies in the dedication of our team. We
          are a group of researchers, writers, designers, and developers united
          by a single mission: to make authentic Islamic knowledge accessible to
          everyone, everywhere
        </Typography>
      </Box>
      <Stack
        sx={{
          overflow: "hidden",
          position: "relative",
          pb: "80px",
          pt: { lg: "50px", md: "40px", sm: "40px", xs: "20px", sm: "10px" },
          px: { lg: "0px", md: "0px", sm: "0px", xs: "0px", mob: "10px" },
        }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={60} // Gap between slides (adjust as needed for visual)
          loop={true}
          slidesPerView={2.1} // Adjusted to 1.5 to make center slide more prominent and sides peek more
          centeredSlides={true} // IMPORTANT: Centers the active slide and shows parts of others
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Use swiper.realIndex for dots
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1500}
          style={{
            width: "100%",
            height: "auto",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 60,
            },
          }}
          sx={{
            "& .swiper-slide": {
              display: "flex", // Ensure content inside slide is flexible
              justifyContent: "center",
              alignItems: "center",
              p: { xs: "10px", sm: "20px" }, // Internal padding for slides to prevent content touching edges
            },
          }}
        >
          {teamData.map((team, index) => (
            <SwiperSlide key={index}>
              <Stack
                sx={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(213, 234, 234, 0.68) 50%, rgba(170, 213, 213, 0.82) 100%)", // Your new background gradient
                  border: "1px solid transparent", // Define border thickness with transparent color
                  borderImageSource:
                    "linear-gradient(180deg, #FFFFFF 0%, rgba(128, 192, 192, 0.68) 100%)", // Your new border gradient
                  borderImageSlice: "1", // Ensure border image covers the full border area
                  borderRadius: "30px", // Rounded corners
                  boxShadow: "0px 4px 20px -4px #00000040",
                  WebkitMaskImage: `linear-gradient(#000, #000)`,
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-atop",
                  position: "relative",
                  alignItems: "start",
                  justifyContent: "space-between",
                  height: "100%",
                  boxSizing: "border-box",
                  minHeight: "400px",
                  color: "white",
                  gap: "10px",
                  p: {
                    lg: "40px",
                    md: "40px",
                    sm: "40px",
                    xs: "40px",
                    mob: "20px",
                  },
                }}
              >
                <Stack
                  direction="row"
                  sx={{ alignItems: "center", gap: "14px" }}
                >
                  <Avatar
                    src={team.imgSrc}
                    sx={{
                      width: "96px",
                      height: "96px",
                      bgcolor: "transparent",
                      color: "#fff",
                      border: "1px solid #CCE6E6",

                      img: { objectFit: "cover" },
                    }}
                  >
                    {team.developerName.charAt(0)}{" "}
                    {/* Display first letter if no avatar image */}
                  </Avatar>
                  <Box sx={{ gap: "20px" }}>
                    {" "}
                    <Typography
                      variant="h6" // Changed to h6 for semantic meaning
                      sx={{
                        fontSize: {
                          md: "28px", // Adjusted font size slightly
                          sm: "22px",
                          xs: "20px",
                        },
                        fontWeight: "500",
                        color: theme.palette.primary.thirdMain,
                        lineHeight: "130%",
                      }}
                    >
                      {team.developerName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "22px", // Adjusted font size slightly
                        fontWeight: "300",
                        lineHeight: "150%", // Increased for readability
                        color: theme.palette.primary.thirdMain,
                      }}
                    >
                      {team.role}
                    </Typography>
                  </Box>
                </Stack>
                <Typography
                  variant="body2" // Changed to h6 for semantic meaning
                  sx={{
                    fontSize: {
                      xl: "24px",
                      lg: "22px",
                      md: "22px",
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
                      mob: "100%",
                    },
                    color: theme.palette.primary.thirdMain,

                    lineHeight: "130%",
                  }}
                >
                  {team.profile}
                </Typography>

                <Stack
                  direction="row" // Arrange buttons in a row
                  spacing={2} // Add space between buttons
                  sx={{
                    justifyContent: "center",
                    flexWrap: "wrap",
                    pt: {
                      lg: "20px",
                      md: "20px",
                      sm: "20px",
                      xs: "20px",
                      mob: "10px",
                    },
                  }}
                >
                  {team.socialLinks.map(
                    (link, i) =>
                      link.href && (
                        <Button
                          key={i}
                          variant="text"
                          component={Link}
                          target="_blank"
                          href={link.href}
                          sx={{
                            color: theme.palette.primary.thirdMain,
                            fontSize: "20px",
                            fontWeight: "400",
                            textTransform: "none",
                            textDecoration: "none",
                            bgcolor: "transparent",
                            m: "0px",
                            p: "0px",
                          }}
                        >
                          {link.iconText}
                        </Button>
                      )
                  )}
                </Stack>
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
          dotWidth={10}
          gap="10px"
          activeBgColor="#0080816E"
          activeDotWidth={40}
          unActiveDotWidth={10}
        />
      </Stack>
      <Box sx={{ alignSelf: "center" }}>
        <SectionMajorButton
          my={{ lg: "90px", md: "90px", sm: "70px", xs: "60px", mob: "60px" }}
        >
          Get in Touch
        </SectionMajorButton>
      </Box>
    </Stack>
  );
}
