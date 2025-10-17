import React from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import Image from "next/image"; // Import Image component

export default function TakeQuizzesSection() {
  return (
    <Stack
      sx={{
        background:
          "linear-gradient(111.96deg, #008081 -0.54%, #242424 129.54%)",
        my: "150px",
        px: { lg: "150px", md: "150px", sm: "100px", xs: "50px", mob: "0px" },
        pt: "80px",

        position: "relative", // IMPORTANT: This Stack needs to be relative for absolute children
        alignItems: "center", // Center content horizontally
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
          color: "#ffffff",
          textAlign: "center",
          lineHeight: "100%",
          px: { lg: "0px", md: "0px", sm: "0px", xs: "0px", mob: "30px" },
        }}
      >
        Take Quizzes = Collect Noorons
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "21px",
          fontWeight: "300",
          lineHeight: "130%",
          color: "#Ffffff",
          pt: "20px",
          textAlign: "center",
          px: { lg: "0px", md: "0px", sm: "0px", xs: "0px", mob: "20px" },
        }}
      >
        Unlock knowledge through interactive Islamic quizzes and collect Noroon
        with every answer! From quick 2-minute questions to deep knowledge
        challenges, test yourself and grow your wisdom.
      </Typography>
      <Button
        variant="text"
        // onClick={onClick}
        sx={{
          textTransform: "none",
          fontSize: "24px",
          fontWeight: "300",
          display: "flex",
          alignItems: "center",
          color: "#CCE6E6ED",
          gap: "15px",
          "&:hover": {
            bgcolor: "transparent",
          },
          p: "0px",
          mt: "40px",
          maxWidth: {
            lg: "100%",
            md: "100%",
            sm: "90%",
            xs: "90%",
            mob: "80%",
          },

          px: { lg: "0px", md: "0px", sm: "0px", xs: "0px", mob: "10px" },
        }}
      >
        Start learning & earning Noroons today
        <LeftArrowIcon color="#CCE6E6ED" />
      </Button>

      {/* Container for images with relative positioning */}
      <Stack
        direction="row"
        sx={{
          position: "relative",
          width: "100%",
          background:
            "linear-gradient(104.01deg, #AAD5D5 6.86%, rgba(105, 201, 208, 0.69) 97.9%)",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          mt: "60px", // Margin top to separate from text/button
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          pt: "60px",
        }}
      >
        {/* Image 1: takeQuizImageOne.png (Background layer, slightly larger/rotated) */}
        <Image
          src="/images/takeQuiz/takeQuizImageOne.png"
          alt="Quiz Image One"
          width={250} // Adjusted width
          height={400} // Adjusted height
          style={{
            position: "relative",
            objectFit: "contain",
            zIndex: 1,
            borderRadius: "20px",
            bottom: -50,
            left: 50,
            boxShadow: "100px 100px 150px 0px #00000040",
          }}
        />
        {/* Image 2: takeQuizImageTwo.png (Middle layer) */}
        <Image
          src="/images/takeQuiz/takeQuizImageTwo.png"
          alt="Quiz Image Two"
          width={250} // Adjusted width
          height={400} // Adjusted height
          style={{
            position: "relative",
            objectFit: "contain",
            zIndex: 0,
            borderRadius: "20px",
          }}
        />
        {/* Image 3: takeQuizImageThree.png (Foreground layer, slightly smaller/rotated) */}
        <Image
          src="/images/takeQuiz/takeQuizImageThree.png"
          alt="Quiz Image Three"
          width={250} // Adjusted width
          height={400} // Adjusted height
          style={{
            position: "relative",
            objectFit: "contain",
            zIndex: 2,
            borderRadius: "20px",
            bottom: -50,
            right: 50,
            boxShadow: "100px 100px 150px 100px #00000040",
          }}
        />
      </Stack>
    </Stack>
  );
}
