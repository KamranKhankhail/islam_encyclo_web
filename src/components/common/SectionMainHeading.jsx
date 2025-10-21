import theme from "@/styles/theme";
import { Typography } from "@mui/material";
import React from "react";

export default function SectionMainHeading({
  children,
  px = {
    xl: "60px",
    lg: "50px",
    md: "40px",
    sm: "30px",
    xs: "20px",
    mob: "10px",
  },
  color = "",
}) {
  return (
    <Typography
      component="h1"
      variant="body2"
      sx={{
        fontSize: {
          xl: "66px",
          lg: "56px",
          md: "48px",
          sm: "42px",
          xs: "42px",
          mob: "36px",
        },
        fontWeight: "500",
        lineHeight: {
          lg: "130%",
          md: "130%",
          sm: "120%",
          xs: "120%",
          mob: "120%",
        },

        color: color === "" ? theme.palette.primary.main : color,
        textAlign: "center",
        zIndex: 5,
        px: px,
      }}
    >
      {children}
    </Typography>
  );
}
