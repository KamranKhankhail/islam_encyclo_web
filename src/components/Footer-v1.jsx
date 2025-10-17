import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import IslamEncycloIcon from "@/icons/IslamEncycloIcon";
import YoutubeFooterIcon from "@/icons/YoutubeFooterIcon";
import TiktokIcon from "@/icons/TiktokIcon";
import FacebookFooterIcon from "@/icons/FacebookFooterIcon";
import InstagramFooterIcon from "@/icons/InstagramFooterIcon";
import Link from "next/link";
const teamSocialIcons = [
  {
    icon: YoutubeFooterIcon,
    href: "http://www.youtube.com/@IslamEncyclo",
  },

  {
    icon: FacebookFooterIcon,
    href: "https://www.facebook.com/share/1GvYWNTVsC/",
  },
  {
    icon: InstagramFooterIcon,
    href: "https://www.instagram.com/islamencycloofficial?igsh=c2oxMzN5YXd2Z3hh",
  },
  { icon: TiktokIcon, href: "#" },
];
export default function Footer() {
  return (
    <Stack
      sx={{
        m: "20px",
        bgcolor: "#1a293b",
        borderRadius: "34px",
        px: "80px",
        py: "50px",
      }}
    >
      <Grid
        container
        py="10px"
        spacing={{ lg: 10, md: 6, sm: 5, xs: 5, mob: 5 }}
      >
        <Grid item size={{ lg: 5, md: 5, sm: 12, xs: 12, mob: 12 }}>
          <Stack direction="row" spacing={1}>
            <IslamEncycloIcon />
            <Typography
              variant="body2"
              component="button"
              sx={{
                fontSize: "30px",
                fontWeight: "700",
                lineHeight: "30px",
                color: "#ffffff",
                cursor: "pointer",
              }}
            >
              Islam Encyclo
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            component="button"
            sx={{
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "#e3f0fb",
              py: "30px",
            }}
          >
            If you have any questions, please contact our team.
          </Typography>
          <Box>
            {" "}
            <Typography
              variant="body2"
              // component="button"
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "30px",
                color: "#ffffff",
                cursor: "pointer",

                textAlign: {
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "start",
                  mob: "center",
                },
                // "&:hover": {
                //   color: "#0056b3",
                // },
              }}
            >
              Follow us
            </Typography>
            <Stack
              direction="row"
              spacing={{ lg: 3, md: 3, sm: 3, xs: 3, mob: 2 }}
              sx={{
                justifyContent: {
                  lg: "start",
                  md: "start",
                  sm: "start",
                  xs: "start",
                  mob: "center",
                },
                pt: {
                  mob: "20px",
                  xs: "10px",
                  sm: "10px",
                  md: "10px",
                  lg: "10px",
                },
                flexWrap: "wrap",
                alignItems: "center",
                rowGap: "10px",
              }}
            >
              {teamSocialIcons.map((social, i) => (
                <Box
                  key={i}
                  component={Link}
                  href={social.href}
                  sx={{
                    p: "0px",

                    borderRadius: "50px",
                    cursor: "pointer",
                    color: "#ffffff", // default icon color
                    bgcolor: "#314150",
                    transition: "color 0.3s, border 0.3s, transform 0.3s",
                    "&:hover": {
                      transform: "translateY(-3px)", // slight upward slide
                    },
                  }}
                >
                  <social.icon width={22} height={22} />
                </Box>
              ))}
            </Stack>
          </Box>
        </Grid>
        {/* <Grid
          item
          size={{ lg: 6.5, md: 7, sm: 12, xs: 12, mob: 12 }}
          px={{
            lg: "0px",
            md: "0px",
            sm: "20px",
            xs: "0px",
            mob: "0px",
          }}
        >
          <Stack
            direction="row"
            // spacing={10}
            sx={{
              justifyContent: {
                lg: "space-between",
                md: "space-between",
                sm: "space-between",
                xs: "space-between",
                mob: "center",
              },
              pb: "45px",
              flexWrap: "wrap",
              rowGap: "40px",
              columnGap: {
                lg: "0px",
                md: "0px",
                sm: "0px",
                xs: "0px",
                mob: "45px",
              },
              // alignItems: {
              //   lg: "start",
              //   md: "start",
              //   sm: "start",
              //   xs: "start",
              //   mob: "center",
              // },
            }}
          >
            {companyLinksData.map((linkService, i) => {
              return (
                <Stack key={i} direction="column" spacing={3}>
                  <Typography
                    variant="body2"
                    // component="button"
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      lineHeight: "30px",
                      color: "#ffffff",
                      cursor: "pointer",
                      pb: "14px",
                      textAlign: {
                        lg: "start",
                        md: "start",
                        sm: "start",
                        xs: "start",
                        mob: "center",
                      },
                      // "&:hover": {
                      //   color: "#0056b3",
                      // },
                    }}
                  >
                    {linkService.title}
                  </Typography>
                  {linkService.linksTitle.map((linkTitle, i) =>
                    linkTitle?.href ? (
                      <Typography
                        key={i}
                        variant="body2"
                        component={Link}
                        href={linkTitle.href}
                        sx={{
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "20px",
                          color: "rgba(255, 255, 255, 0.6)",
                          cursor: "pointer",
                          textAlign: {
                            lg: "start",
                            md: "start",
                            sm: "start",
                            xs: "start",
                            mob: "center",
                          },
                          transition: "all 0.3s ease-in-out",
                          "&:hover": {
                            color: "#1fd5e9",
                          },
                        }}
                      >
                        {linkTitle.title}
                      </Typography>
                    ) : (
                      <Typography
                        key={i}
                        variant="body2"
                        sx={{
                          fontSize: "16px",
                          fontWeight: "400",
                          lineHeight: "20px",
                          color: "rgba(255, 255, 255, 0.6)",

                          textAlign: {
                            lg: "start",
                            md: "start",
                            sm: "start",
                            xs: "start",
                            mob: "center",
                          },
                        }}
                      >
                        {linkTitle.title}
                      </Typography>
                    )
                  )}
                </Stack>
              );
            })}
          </Stack>
        </Grid> */}
      </Grid>
    </Stack>
  );
}
