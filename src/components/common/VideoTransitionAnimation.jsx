"use client";

import React from "react";
import { Box, keyframes } from "@mui/material";

// Keyframes for rotating/shifting pieces
const pieceMovement = keyframes`
  0% { transform: scale(1) translate(0, 0) rotate(0deg); opacity: 1; }
  50% { transform: scale(0.8) translate(-10px, 10px) rotate(15deg); opacity: 0.8; }
  100% { transform: scale(1) translate(0, 0) rotate(0deg); opacity: 1; }
`;

export default function VideoTransitionAnimation() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // Create a 3x3 grid of 'pieces'
        gridTemplateRows: "repeat(3, 1fr)",
        backgroundColor: "rgba(0, 0, 0, 0.95)", // Almost opaque black to cover YouTube
        borderRadius: "inherit",
        overflow: "hidden", // Ensure pieces don't overflow the animation area
      }}
    >
      {[...Array(9)].map(
        (
          _,
          i // Render 9 distinct pieces
        ) => (
          <Box
            key={i}
            sx={{
              backgroundColor: "primary.main", // Example background color for pieces
              border: "1px solid rgba(255,255,255,0.1)", // Subtle borders between pieces
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: `${pieceMovement} 2s infinite alternate ${
                i * 0.1
              }s ease-in-out`, // Staggered animation
              "&:nth-of-type(odd)": {
                backgroundColor: "primary.dark", // Alternate colors for visual distinction
              },
            }}
          >
            {/* You can put more complex SVG or Image elements here for each "piece" */}
            <Box
              sx={{
                width: "20px",
                height: "20px",
                backgroundColor: "white",
                borderRadius: "50%",
                opacity: 0.7,
              }}
            />
          </Box>
        )
      )}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          zIndex: 10, // Ensure text is above rotating pieces
          textAlign: "center",
        }}
      >
        Loading...
        {/* You can replace "Loading..." with more dynamic text or an actual logo reveal */}
      </Box>
    </Box>
  );
}
