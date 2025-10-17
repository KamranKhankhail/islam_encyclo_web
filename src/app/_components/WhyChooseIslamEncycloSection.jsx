import SectionMainHeading from "@/components/common/SectionMainHeading";
import { Box, Divider, Stack, Typography } from "@mui/material";

import React from "react";
import InteractiveQuizzesIcon from "@/app/_components/icons/InteractiveQuizzesIcon";
import HasanatHubIcon from "@/app/_components/icons/HasanatHubIcon";
import NoorRewardsIcon from "@/app/_components/icons/NoorRewardsIcon";
import theme from "@/styles/theme";
import DownloadNowButton from "@/components/common/DownloadNowButton";
import SectionMajorButton from "@/components/common/SectionMajorButton";
const whyChooseIslamData = [
  {
    icon: InteractiveQuizzesIcon,
    primaryText: " Interactive Quizzes",
    secondaryText:
      "Engage with quizzes designed to deepen your understanding of Qur’an and Sunnah while making learning enjoyable.",
  },
  { divider: true },
  {
    icon: HasanatHubIcon,
    primaryText: "Hasanat Hub",
    secondaryText:
      "Keep a mindful record of your daily good deeds, track your progress, and stay motivated on your journey of Hasanat.",
  },
  { divider: true },
  {
    icon: NoorRewardsIcon,
    primaryText: "Noor Rewards",
    secondaryText:
      "Experience a unique system of spiritual rewards where every right action adds to your light and brings you closer to Allah’s mercy.",
  },
];
export default function WhyChooseIslamEncycloSection() {
  return (
    <Stack
      sx={{
        px: { lg: "70px", md: "70px", sm: "50px", xs: "30px", mob: "20px" },
        alignItems: "center",
        pb: "130px",
        pt: { lg: "0px", md: "0px", sm: "0px", xs: "0px", mob: "50px" },
      }}
    >
      <SectionMainHeading
        px={{
          xl: "60",
          lg: "60px",
          md: "60px",
          sm: "50px",
          xs: "30px",
          mob: "20px",
        }}
      >
        Why Choose Islam Encyclo for Your Learning?
      </SectionMainHeading>
      <Stack
        direction={{
          lg: "row",
          md: "row",
          sm: "row",
          xs: "column",
          mob: "column",
        }}
        sx={{ gap: "50px", py: "70px" }}
      >
        {whyChooseIslamData.map((whyChoose, i) => (
          <React.Fragment key={i}>
            {whyChoose.divider ? (
              <Divider
                orientation="vertical"
                sx={{
                  border: `1px solid ${theme.palette.primary.secondMain}`,
                  height: "auto",
                }}
              />
            ) : (
              <Stack
                direction="column"
                sx={{
                  maxWidth: "340px",
                  alignItems: "center",
                  gap: "14px",
                  justifyContent: "center",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                {whyChoose.icon && <whyChoose.icon />}

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      md: "42px",
                      sm: "28px",
                      xs: "26px",
                      mob: "24px",
                    },
                    fontWeight: "500",
                    color: theme.palette.primary.thirdMain,

                    lineHeight: "109%",
                    textAlign: "center",
                  }}
                >
                  {whyChoose.primaryText}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "18px",
                    fontWeight: "300",
                    lineHeight: "109%",
                    // color: "#61698b",
                    color: theme.palette.primary.thirdMain,
                    textAlign: "center",
                  }}
                >
                  {whyChoose.secondaryText}
                </Typography>
              </Stack>
            )}
          </React.Fragment>
        ))}
      </Stack>
      <SectionMajorButton my="0px">Download Now</SectionMajorButton>
    </Stack>
  );
}
