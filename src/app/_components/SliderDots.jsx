import { Box } from "@mui/material";

const Dot = ({
  active,
  dotWidth,
  dotHeight,
  activeBgColor,
  unActiveBgColor,
  activeDotWidth,
  unActiveDotWidth,
}) => (
  <Box
    sx={{
      width: active ? activeDotWidth : unActiveDotWidth, // wide pill if active, small if not
      height: dotHeight,
      borderRadius: 8, // makes it round or pill
      bgcolor: active ? activeBgColor : unActiveBgColor,
      transition: "all 0.3s ease",
    }}
  />
);

export default function SliderDots({
  activeStep,
  totalSteps,
  bgcolor = "#CCE6E6",
  left = "50%",
  bottom = 0,
  dotWidth = 7,
  dotHeight = 7,
  gap = "6px",
  activeBgColor = "teal",
  unActiveBgColor = "white",
  activeDotWidth = 35,
  unActiveDotWidth = 7,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: gap,
        alignItems: "center",
        bgcolor: bgcolor,
        // p: 2,
        borderRadius: 2,
        position: "absolute",
        bottom: bottom,
        left: "50%",
        transform: "translateX(-50%)",
        width: "max-content",
      }}
    >
      {Array.from({ length: totalSteps }).map((_, i) => (
        <Dot
          key={i}
          active={i === activeStep}
          dotHeight={dotHeight}
          dotWidth={dotWidth}
          activeBgColor={activeBgColor}
          unActiveBgColor={unActiveBgColor}
          activeDotWidth={activeDotWidth}
          unActiveDotWidth={unActiveDotWidth}
        />
      ))}
    </Box>
  );
}
