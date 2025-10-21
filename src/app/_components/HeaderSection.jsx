import {
  Stack,
  Typography,
  Box,
  bottomNavigationActionClasses,
} from "@mui/material";
import DownloadButtonsClient from "@/components/ClientComponents/DownloadButtonsClient";
import ResponsiveSliderIcon from "@/app/_components/icons/ResponsiveSliderIcon";
import SliderIcon from "@/app/_components/icons/SliderIcon";
import HeaderVideoBackgroundWithOverlay from "@/app/_components/HeaderVideoBackgroundWithOverlay";
import PrayerTimeLocationDisplay from "@/app/_components/PrayerTimeLocationDisplay";
import DownloadNowButton from "@/components/common/DownloadNowButton";
import PrayerTimeAndAndAyatSlider from "./PrayerTimeAndAyatSlider";
import SectionMainHeading from "@/components/common/SectionMainHeading";
import theme from "@/styles/theme";
import SectionMajorButton from "@/components/common/SectionMajorButton";
const prayersData = [
  { name: "Fajr", key: "Fajr", icon: "/images/prayerImages/fajr.png" },
  { name: "Dhuhr", key: "Dhuhr", icon: "/images/prayerImages/zuhar.png" },
  { name: "Asr", key: "Asr", icon: "/images/prayerImages/asar.png" },
  { name: "Maghrib", key: "Maghrib", icon: "/images/prayerImages/maghrib.png" },
  { name: "Isha", key: "Isha", icon: "/images/prayerImages/isha.png" },
];
// ... existing code ...
const sliderIcons = [
  { left: 0, top: 0, right: "auto", bottom: "auto", transform: "none" }, // Top-left
  {
    right: 5, // Adjusted to pull 10px inwards from the right edge
    top: -5,
    left: "auto",
    bottom: "auto",
    transform: "rotate(90deg)",
  }, // Top-right
  {
    left: 5,
    bottom: -5, // Adjusted to pull 10px inwards from the bottom edge
    right: "auto",
    top: "auto",
    transform: "rotate(270deg)",
  }, // Bottom-left
  {
    right: 0,
    bottom: 0,
    left: "auto",
    top: "auto",
    transform: "rotate(180deg)",
  }, // Bottom-right
];

function format12Hour(time24) {
  if (!time24) return "";
  const [hourStr, minute] = time24.split(":");
  let hour = parseInt(hourStr, 10);
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
}

// ✅ Server-side fetch
async function getPrayerData() {
  const res = await fetch(
    `https://api.aladhan.com/v1/timingsByCity?city=Karachi&country=Pakistan&method=2`,
    { next: { revalidate: 3600 } } // cache for 1 hour
  );

  if (!res.ok) throw new Error("Failed to fetch prayer times");
  const data = await res.json();

  return {
    timings: data.data.timings,
    hijri: `${data.data.date.hijri.day} ${data.data.date.hijri.month.en} ${data.data.date.hijri.year}`,
    gregorian: data.data.date.readable,
  };
}

export default async function HeaderSection() {
  // const { timings, hijri, gregorian } = await getPrayerData();
  const defaultPrayerData = await getPrayerData();

  return (
    <>
      <Stack
        id="header"
        position="relative"
        sx={{
          px: { lg: "60px", md: "40px", sm: "30px", xs: "20px", mob: "10px" },
        }}
      >
        <Stack
          direction="column"
          sx={{
            // px: {
            //   lg: "100px",
            //   md: "80px",
            //   sm: "80px",
            //   xs: "60px",
            //   mob: "40px",
            // },
            // pt: {
            //   lg: "200px",
            //   md: "200px",
            //   sm: "150px",
            //   xs: "150px",
            //   mob: "150px",
            // },
            pb: "170px",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            // minHeight: "100vh",
            borderRadius: "10px",
          }}
        >
          {/* <Box
	  component="video"
	  sx={{
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		width: "100%",
		height: "100%",
		objectFit: "fill",
		zIndex: 2,
		borderBottomRightRadius: "22px",
		borderBottomLeftRadius: "22px",
		overflow: "hidden",
	  }}
	  autoPlay
	  muted
	  loop
	  // playsInline
	>
	  <source src="/videos/islamEncycloNewIntro.mp4" type="video/mp4" />
	  <source
		src="https://youtu.be/BYI68HN8Ofg?si=hv3m7REKav1J413h"
		type="video/mp4"
	  />

	  Your browser does not support the video tag.
	</Box> */}
          <Stack // This is the outermost Stack that contains the video area
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <HeaderVideoBackgroundWithOverlay />
            {/* <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 0,
                paddingBottom: "56.25%",
                zIndex: 9999,
                overflow: "hidden",
                borderRadius: "10px",
              }}
            >
              <Box
                component="iframe"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                  transform: "scale(1.02)",
                  transformOrigin: "center center",
                }}
                src="https://www.youtube.com/embed/OtBL4CQvoDI?autoplay=1&mute=1&loop=1&playlist=OtBL4CQvoDI&controls=0&disablekb=1&modestbranding=1&iv_load_policy=3&fs=0&rel=0&showinfo=0&vq=hd1080"
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 10000,
                backgroundColor: "transparent",
                pointerEvents: "auto",
                cursor: "default",
              }}
            /> */}
          </Stack>
        </Stack>
        <Stack
          id="header Slider"
          sx={{
            borderRadius: "20px",
            background:
              "linear-gradient(95.32deg, #80c0c0 3.26%, #AAD5D5 52.35%, rgba(0, 128, 129, 0.69) 96.75%)",
            backgroundClip: "padding-box, border-box",
            backgroundOrigin: "padding-box, border-box",
            backgroundImage:
              "linear-gradient(#cee7e7, #cee7e7), linear-gradient(95.32deg, #80c0c0 3.26%, #AAD5D5 52.35%, rgba(0, 128, 129, 0.69) 96.75%)",
            border: "8px solid transparent",
            position: "absolute",
            bottom: { lg: 0, md: 0, sm: -80, xs: -80, mob: 30 },
            zIndex: 10000,
            p: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "max-content",
            // backdropFilter: "blur(0px)",
            // WebkitBackdropFilter: "blur(0px)",
          }}
        >
          <Stack
            sx={{
              position: "relative",
              //  px: "40px",
              pt: {
                lg: "26px",
                md: "26px",
                sm: "26px",
                xs: "26px",
                mob: "6px",
              },
              pb: {
                lg: "40px",
                md: "40px",
                sm: "40px",
                xs: "40px",
                mob: "20px",
              },
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
                <ResponsiveSliderIcon SliderIcon={SliderIcon} />
              </Box>
            ))}

            {/* <PrayerTimeAndAndAyatSlider
              timings={timings}
              hijri={hijri}
              gregorian={gregorian}
            /> */}
            <PrayerTimeLocationDisplay initialPrayerData={defaultPrayerData} />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction="column"
        sx={{
          pt: {
            lg: "160px",
            md: "160px",
            sm: "140px",
            xs: "100px",
            mob: "20px",
          },
          alignItems: "center",
          px: {
            xl: "200px",
            lg: "180px",
            md: "120px",
            sm: "80px",
            xs: "60px",
            mob: "40px",
          },
        }}
      >
        <SectionMainHeading>
          Step into Verified Knowledge with Islam Encyclo
        </SectionMainHeading>
        <Typography
          component="p"
          variant="body2"
          sx={{
            fontSize: {
              xl: "30px",
              lg: "26px",
              md: "24px",
              sm: "22px",
              xs: "20px",
              mob: "18px",
            },
            fontWeight: "300",
            lineHeight: "130%",
            color: theme.palette.primary.main,
            textAlign: "center",
            zIndex: "5",
            pb: "40px",
            pt: "24px",
          }}
        >
          Islam Encyclo brings you a complete learning experience from
          understanding the Quran and Sunnah to step-by-step Wudu guides,
          authentic Duas, and practical guidance for Umrah and Hajj and
          everything you need to grow in faith, all in one place.
        </Typography>
        <SectionMajorButton my="20px">Download Now</SectionMajorButton>
      </Stack>
    </>
  );
}
