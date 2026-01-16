"use client";
import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import theme from "@/styles/theme";
import Image from "next/image";
import DownloadNowButton from "@/components/common/DownloadNowButton";

export default function BlogPage() {
  const iosLink = "https://apple.co/3xfPeyW";
  const androidLink =
    "https://play.google.com/store/apps/details?id=com.kivyx.islamencyclo&hl=en";

  const getDownloadLink = () => {
    if (typeof window !== "undefined") {
      const ua = navigator.userAgent || navigator.vendor;
      if (/android/i.test(ua)) return androidLink;
      if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return iosLink;
    }
    return androidLink;
  };

  const handleDownload = () => {
    const link = getDownloadLink();
    if (link) window.open(link, "_blank");
  };

  // Reusable styled components
  const SectionDivider = () => (
    <Box
      sx={{
        height: "1px",
        width: "100%",
        background:
          "linear-gradient(90deg, transparent, rgba(0,128,129,0.2), transparent)",
        my: { lg: 10, md: 8, sm: 6, xs: 5, mob: "40px" },
      }}
    />
  );

  const FeatureCard = ({ title, description, items, image, imageAlt }) => (
    <Box
      sx={{
        mb: { lg: 10, md: 8, sm: 6, xs: 5, mob: 5 },
        px: { mob: "20px" },
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: { lg: "40px", md: "36px", sm: "30px", xs: "26px" },
          fontWeight: "700",
          color: theme.palette.primary.main,
          mb: 4,
          position: "relative",
          pl: "24px",
          "&::before": {
            content: '""',
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            width: "5px",
            height: "75%",
            backgroundColor: "#008081",
            borderRadius: "3px",
          },
        }}
      >
        {title}
      </Typography>

      {image && (
        <Box
          sx={{
            mb: 4,
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 15px 50px rgba(0,0,0,0.15)",
            },
          }}
        >
          <Image
            src={image}
            alt={imageAlt || title}
            width={400}
            height={300}
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
        </Box>
      )}

      {description && (
        <Typography
          sx={{
            fontSize: { lg: "19px", md: "18px", sm: "17px", xs: "16px" },
            fontWeight: "400",
            lineHeight: "1.8",
            color: theme.palette.primary.thirdMain,
            mb: items ? 4 : 0,
            opacity: 0.85,
          }}
        >
          {description}
        </Typography>
      )}

      {items && (
        <Stack spacing={2.5}>
          {items.map((item, idx) => (
            <Box
              key={idx}
              sx={{ display: "flex", alignItems: "flex-start", gap: 2.5 }}
            >
              <Box
                sx={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: "#008081",
                  mt: "11px",
                  flexShrink: 0,
                  boxShadow: "0 0 0 3px rgba(0,128,129,0.15)",
                }}
              />
              <Typography
                sx={{
                  fontSize: { lg: "18px", md: "17px", sm: "16px", xs: "15px" },
                  fontWeight: "400",
                  lineHeight: "1.75",
                  color: theme.palette.primary.thirdMain,
                  opacity: 0.8,
                }}
              >
                {item.label && (
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "600",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {item.label}
                  </Box>
                )}
                {item.text}
              </Typography>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );

  const SubFeature = ({ title, description, items, image, imageAlt }) => (
    <Stack
      direction={{ xs: "column", sm: "row", md: "row" }}
      spacing={{ mob: "40px", sm: "40px" }}
      alignItems="center"
      justifyContent="center"
      sx={{ mb: 6 }}
    >
      <Box
        sx={{
          // flex: { sm: 1 },
          // minWidth: { sm: "50%" },
          px: { sm: 4, xs: 4, mob: 2 },
          borderLeft: { sm: "2px solid rgba(0,128,129,0.15)", xs: "none" },
          width: { xs: "100%", sm: "60%" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: { lg: "28px", md: "25px", sm: "22px", xs: "20px" },
            fontWeight: "600",
            color: theme.palette.primary.main,
            mb: 2.5,
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#008081",
              boxShadow: "0 0 0 4px rgba(0,128,129,0.2)",
            }}
          />
          {title}
        </Typography>

        {description && (
          <Typography
            sx={{
              fontSize: { lg: "18px", md: "17px", sm: "16px", xs: "15px" },
              fontWeight: "400",
              lineHeight: "1.75",
              color: theme.palette.primary.thirdMain,
              mb: 2.5,
              opacity: 0.8,
              pl: { lg: 4.5, md: 4.5, sm: 4.5, xs: 0, mob: 0 },
            }}
          >
            {description}
          </Typography>
        )}

        {items && (
          <Stack
            spacing={2}
            sx={{ pl: { lg: 4.5, md: 4.5, sm: 4.5, xs: 0, mob: 0 } }}
          >
            {items.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: { lg: 2, md: 2, sm: 2, xs: 2, mob: 1 },
                }}
              >
                <Box
                  sx={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "#008081",
                    mt: "10px",
                    flexShrink: 0,
                    opacity: 0.6,
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "17px",
                      md: "16px",
                      sm: "15px",
                      xs: "14px",
                    },
                    fontWeight: "400",
                    lineHeight: "1.7",
                    color: theme.palette.primary.thirdMain,
                    opacity: 0.8,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>
        )}
      </Box>

      {/* {image && (
        <Box
          sx={{
            // flex: { sm: 1 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: {
              lg: "16px",
              md: "16px",
              sm: "16px",
              xs: "8px",
              mob: "8px",
            },
            boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-3px)",
              boxShadow: "0 12px 38px rgba(0,0,0,0.12)",
            },
            width: { sm: "40%" },
            maxWidth: { sm: "400px", md: "500px" },
            height: { mob: "350px", xs: "350px", sm: "300px", md: "350px" },
            // maxHeight: { xs: "250px", sm: "300px", md: "350px" },
            order: { xs: 1, sm: 1 },
            //  alignSelf: "stretch" ,
            mx: { xs: "auto", sm: "unset" },
          }}
        >
          <Image
            src={image}
            alt={imageAlt || title}
            width={50}
            height={0}
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 40vw, 35vw"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </Box>
      )} */}
      {image && (
        <Image
          src={image}
          alt={imageAlt || title}
          width={50}
          height={0}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 40vw, 35vw"
          style={{
            width: "230px",
            height: "500px",
            objectFit: "contain",
            display: "block",
            borderRadius: "20px",
          }}
        />
      )}
    </Stack>
  );

  const QuoteBox = ({ text }) => (
    <Box
      sx={{
        textAlign: "center",
        py: { lg: 8, md: 6, sm: 5, xs: 4, mob: 4 },
        my: { lg: 10, md: 8, sm: 6, xs: 5 },
        mx: { mob: "10px", xs: "10px" },
        background:
          "linear-gradient(135deg, rgba(0,128,129,0.08) 0%, rgba(0,128,129,0.03) 100%)",
        borderRadius: "24px",
        border: "1px solid rgba(0,128,129,0.1)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '"\\201C"',
          position: "absolute",
          top: "10px",
          left: "20px",
          fontSize: {
            lg: "80px",
            md: "80px",
            sm: "80px",
            xs: "80px",
            mob: "50px",
          },
          color: "rgba(0,128,129,0.1)",
          fontFamily: "Georgia, serif",
          lineHeight: 1,
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { lg: "30px", md: "26px", sm: "22px", xs: "20px" },
          fontWeight: "500",
          lineHeight: "1.6",
          color: "#008081",
          fontStyle: "italic",
          maxWidth: "900px",
          mx: "auto",
          px: 4,
          position: "relative",
          zIndex: 1,
        }}
      >
        {text}
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters // Add this prop to remove default horizontal padding
        sx={{
          //   px: { lg: "80px", md: "60px", sm: "40px", xs: "30px", mob: "20px" },
          py: { lg: 12, md: 10, sm: 8, xs: 6 },
        }}
      >
        {/* Hero Section */}
        <Stack spacing={6} sx={{ mb: { lg: 12, md: 10, sm: 8, xs: 6 } }}>
          <Typography
            component="h1"
            sx={{
              fontSize: {
                lg: "68px",
                md: "56px",
                sm: "44px",
                xs: "36px",
                mob: "32px",
              },
              fontWeight: "700",
              lineHeight: "1.15",
              color: theme.palette.primary.main,
              textAlign: "center",

              mx: "auto",
              background: "linear-gradient(135deg, #242424 0%, #008081 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Islam Encyclo: A New Standard for Islamic Apps in the Digital World
          </Typography>

          <Box
            sx={{
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
              transition: "transform 0.5s ease, box-shadow 0.5s ease",
              "&:hover": {
                transform: "scale(1.02)",
                boxShadow: "0 25px 70px rgba(0,0,0,0.2)",
              },
            }}
          >
            <Image
              src="/images/IslamEncycloBg.png"
              alt="Islam Encyclo Background"
              width={1200}
              height={600}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        </Stack>

        <SectionDivider />

        {/* Introduction */}
        <FeatureCard
          title="New Year, New Standard for Islamic Apps"
          description="Your faith deserves clarity, calm, and guidance in the digital world. As the new year begins, many of us reflect on ways to strengthen our connection with Allah. In today's digital era, Islamic apps play an important role in helping us learn, remember, and practice our faith."
          items={[
            {
              text: "Yet, not all apps are created with the right intention. Many are cluttered, distracting, ad-heavy, or lack authenticity and respect for privacy — adding noise instead of supporting focus and remembrance.",
            },
            {
              text: "Islam Encyclo enters this year with a clear purpose: to redefine what an Islamic app should be. Not new, just perfected — stronger, faster, calmer, and more intentional. Designed for everyday Muslims seeking accessible, respectful, and distraction-free guidance — all in one trusted place.",
            },
          ]}
        />

        <SectionDivider />

        {/* Core Values */}
        <FeatureCard
          title="What Makes an Islamic App Truly Valuable?"
          description="An Islamic app is more than a collection of features — it is a companion in worship, learning, and remembrance, and it must meet high standards. A truly valuable Islamic app prioritizes:"
          items={[
            {
              label: "Authenticity: ",
              text: "Content is accurate, verified, and rooted in reliable sources. No room for misinformation or unchecked opinions.",
            },
            {
              label: "Focus: ",
              text: "The app supports reflection, minimizing noise, clutter, and distractions.",
            },
            {
              label: "Privacy & Trust: ",
              text: "Faith is personal. Users are never monitored, tracked, or profiled while engaging with the app.",
            },
            {
              label: "Practical Daily Support: ",
              text: "From Qur'an recitation to Duas and prayer reminders, the app fits naturally into daily life without creating pressure.",
            },
          ]}
        />

        <QuoteBox text="A Companion for Every Muslim Heart" />

        <SectionDivider />

        {/* Companion Philosophy */}
        <FeatureCard
          title="Islam Encyclo: A Companion, Not Just an App"
          image="/images/girlReadingdemoHeader.png"
          imageAlt="Girl Reading Demo Header"
          description="Islam Encyclo is guided by a simple belief: faith does not need interference — it needs support. That's why the app is designed not to compete for attention, but to walk alongside you — quietly, respectfully, and reliably."
          items={[
            {
              text: "A true companion listens, respects boundaries, and is present without overwhelming. Whether reading the Qur'an, listening during travel, remembering Allah through daily Azkaar, or learning something new, Islam Encyclo stays in the background, keeping your focus where it belongs.",
            },
            {
              text: "Every feature — from its calm design to its performance, privacy-first foundation, and scholar-verified content — is crafted to create an Islamic experience that feels natural, sincere, and respectful of the Deen.",
            },
          ]}
        />

        <SectionDivider />
        {/* Daily Worship */}
        <Box sx={{ mb: { lg: 12, md: 10, sm: 8, xs: 6 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { lg: "48px", md: "42px", sm: "36px", xs: "30px" },
              fontWeight: "700",
              px: { mob: "10px" },
              color: theme.palette.primary.main,
              mb: { lg: 6, md: 6, sm: 6, xs: 6, mob: 2 },
              textAlign: "center",
              background: "linear-gradient(135deg, #242424 0%, #008081 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Daily Worship, Knowledge & Spiritual Engagement
          </Typography>

          <Typography
            sx={{
              fontSize: { lg: "19px", md: "18px", sm: "17px", xs: "16px" },
              fontWeight: "400",
              lineHeight: "1.8",
              color: theme.palette.primary.thirdMain,
              mb: { lg: 8, md: 8, sm: 8, xs: 5, mob: 5 },
              opacity: 0.85,
              textAlign: "center",
              maxWidth: "900px",
              mx: "auto",
              px: { mob: "10px" },
            }}
          >
            Islam Encyclo brings together everything you need for daily worship,
            learning, and reflection — thoughtfully designed to support your
            faith without distraction.
          </Typography>

          <Stack spacing={6} sx={{ pr: { lg: "40px", md: "40px", sm: "0px" } }}>
            <SubFeature
              title="All Deen Support"
              description="Practical tools to help you stay connected to Islam"
              items={[
                "Location-based prayer times with notifications",
                "Salah and Wudu guides for men and women",
                "Asma ul Husna with meanings and benefits",
                "Salah and Wudu guides for men and women",
                "Fasting calendar for Ramadan and voluntary fasts",
                "Islamic quizzes to increase islamic knowledge",
              ]}
              image="/images/islamEncycloBlogImages/allDeenTools.png"
            />
            <SubFeature
              title="Prayer Support"
              description="Practical tools to help you stay consistent:"
              items={[
                "Location-based prayer times with smart notifications",
                "Daily, weekly, and monthly Salah tracking for consistency",
                "Step-by-step Salah guides explaining what to recite and how to pray",
                "Learn each prayer in Arabic, Urdu, and English",
                "Nearby mosques and prayer spaces for travel convenience",
                "Beautifully designed Wudu guides for men and women",
              ]}
              image="/images/islamEncycloBlogImages/salahTracking.png"
            />

            <SubFeature
              title="Masnoon Duas & Daily Azkaar"
              description="Effortless, authentic remembrance of Allah:"
              items={[
                "Fully verified Masnoon Duas from authentic sources",
                "Morning, evening, and situational Azkaar for daily life",
                "Realistic digital Tasbeeh with bead-by-bead interaction",
                "Choose tap-based or traditional Tasbeeh modes",
                "Customize Tasbeeh beads, frames, and backgrounds to your preference",
              ]}
              image="/images/islamEncycloBlogImages/masnoonDuas.png"
            />

            <SubFeature
              title="Knowledge, Reflection & Engagement"
              description="Expand knowledge, reflect thoughtfully, and engage meaningfully:"
              items={[
                "Scholar-verified Hadith library for study and reflection",
                "Daily Islamic quizzes — short, engaging, and suitable for all ages",
                "Ayah, Word & Dua of the Day — shareable with aesthetic backgrounds",
                "Cortos — faith-focused short videos for all age groups",
              ]}
              image="/images/islamEncycloBlogImages/cortosShorts.png"
            />
            <SubFeature
              title="Manage Your General Preferences"
              description="Customize the app according to your needs:"
              items={[
                "Multiple languages support: English, Urdu, and Arabic",
                "Theme options: Light, Dark, and Default modes",
                "Flexible time formats and card background customization",
                "Personalized Qur’an, prayer, and notification settings",
                "Notes, bookmarks, and saved content for easy access",
              ]}
              image="/images/islamEncycloBlogImages/managePersonalPreferences.png"
            />

            <Box
              sx={{
                mt: 6,
                p: 5,
                background:
                  "linear-gradient(135deg, rgba(0,128,129,0.05) 0%, rgba(0,128,129,0.02) 100%)",
                borderRadius: "20px",
                border: "1px solid rgba(0,128,129,0.15)",
              }}
            >
              {/* <Typography
                sx={{
                  fontSize: { lg: "22px", md: "20px", sm: "18px", xs: "17px" },
                  fontWeight: "600",
                  color: theme.palette.primary.main,
                  mb: 2,
                }}
              >
                The Bigger Picture
              </Typography> */}
              <Typography
                sx={{
                  fontSize: { lg: "18px", md: "17px", sm: "16px", xs: "15px" },
                  fontWeight: "400",
                  lineHeight: "1.75",
                  color: theme.palette.primary.thirdMain,
                  opacity: 0.8,
                }}
              >
                Everything works together seamlessly: worship, remembrance, and
                learning in one calm, distraction-free environment. Islam
                Encyclo becomes more than an app — it's a trusted companion for
                spiritual growth every day.
              </Typography>
            </Box>
          </Stack>
        </Box>

        <SectionDivider />
        {/* Quran Experience */}
        <Box sx={{ mb: { lg: 12, md: 10, sm: 8, xs: 6 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { lg: "48px", md: "42px", sm: "36px", xs: "30px" },
              fontWeight: "700",
              color: theme.palette.primary.main,
              mb: 6,
              textAlign: "center",
              background: "linear-gradient(135deg, #242424 0%, #008081 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Complete Qur'an Experience
          </Typography>

          <Typography
            sx={{
              fontSize: { lg: "19px", md: "18px", sm: "17px", xs: "16px" },
              fontWeight: "400",
              lineHeight: "1.8",
              color: theme.palette.primary.thirdMain,
              mb: 8,
              opacity: 0.85,
              textAlign: "center",
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            At the heart of Islam Encyclo lies the Qur'an — treated with
            reverence, accuracy, and usability. To meet every need, the app
            offers three distinct Qur'an modules:
          </Typography>

          <Stack spacing={6}>
            <SubFeature
              title="Audio Qur'an"
              description="Immerse yourself in recitation with a clean, intuitive interface:"
              items={[
                "Multiple reciters with verse-by-verse playback",
                "Repeat Surah, adjustable speed, and sleep timer",
                "Offline Surah downloads",
                "Perfect for reflection, travel, or rest, this module keeps the focus purely on the recitation",
              ]}
              image="/images/islamEncycloBlogImages/audioQuranImage2.png"
            />

            <SubFeature
              title="Reading Qur'an with Highlighted Verses"
              description="Digital reading designed for clarity and understanding:"
              items={[
                "Verse-by-verse highlighting for enhanced focus",
                "List and page view options for flexible reading",
                "Jump directly to any Surah, Ayah, or page with ease",
                "Tap any Ayah to play audio with automatic scrolling to the next verse",
                "Select an Ayah to view translation, add notes, share, or mark as read",
              ]}
              image="/images/islamEncycloBlogImages/readQuranEase.png"
            />

            <SubFeature
              title="Traditional Mushaf Modules"
              description="Replicate the experience of printed Mushafs with:"
              items={[
                "16-line, 15-line, and Indo-Pak Mushaf layouts",
                "Navigate to any Surah, Juz (Parah), page, Ruku, or specific Ayah with precision",
                "Jump to any quarter (¼) or section within a Juz for focused recitation",
                "Seamless reading in both portrait and landscape modes for comfort",
                "Choose the module that suits your moment, environment, and learning style",
              ]}
              image="/images/islamEncycloBlogImages/smartPdfQuranReading.png"
            />

            <SubFeature
              title="Lightning-Fast Qur'an Search"
              description="Locate guidance instantly across all modules:"
              items={[
                "Search any Ayah, word, or phrase in Arabic, English, or Urdu",
                "Voice search for hands-free access",
                "View all matched Ayahs in clear, organized search results",
                "Tap any result to open the full Qur'an page with highlighted verse",
                "Instant results for seamless study, reflection, and learning",
              ]}
              image="/images/islamEncycloBlogImages/quranicResultsBySearching.png"
            />
          </Stack>
        </Box>

        <SectionDivider />

        {/* Customization */}
        <FeatureCard
          title="Customization & Personal Spiritual Space"
          description="Faith is personal, and Islam Encyclo lets you create a digital environment that reflects your focus, comfort, and devotion:"
          items={[
            {
              label: "App Backgrounds & Themes: ",
              text: "Islamic-inspired backgrounds & adjustable color schemes with calm, intuitive UI to enhance reflection and focus",
            },
            {
              label: "Personalized Tasbeeh & Dhikr: ",
              text: "Customizable beads and backgrounds with session tracking for consistent remembrance",
            },
            {
              label: "Why It Matters: ",
              text: "Personalization gives you ownership, calm, and a focused, distraction-free spiritual space — making the app feel like a true companion",
            },
          ]}
        />

        <SectionDivider />

        {/* Privacy */}
        <FeatureCard
          title="Privacy, Trust & Ethical Design"
          description="Faith and personal data should never clash. Islam Encyclo ensures your spiritual journey stays private, safe, and calm."
          items={[
            {
              label: "No Personal Data Collected: ",
              text: "No login or account creation required. No tracking, profiling, or monitoring. All app data stays securely on your device",
            },
            {
              label: "Minimal, Non-Intrusive Ads: ",
              text: "Carefully controlled and respectful. Never interrupt prayer, reading, or reflection",
            },
            {
              label: "Scholar-Verified Content: ",
              text: "Masnoon Duas authenticated by qualified scholars with continuous review of educational content",
            },
            {
              label: "Faith-First Design: ",
              text: "Interfaces designed to minimize distraction with features built to support, not overwhelm",
            },
          ]}
        />

        <SectionDivider />

        {/* Mission */}
        <Box sx={{ mb: { lg: 12, md: 10, sm: 8, xs: 6 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { lg: "48px", md: "42px", sm: "36px", xs: "30px" },
              fontWeight: "700",
              color: theme.palette.primary.main,
              mb: 5,
              textAlign: "center",
              background: "linear-gradient(135deg, #242424 0%, #008081 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              px: { mob: "20px", xs: "20px" },
            }}
          >
            The Mission Remains, the Experience is Stronger
          </Typography>

          <Typography
            sx={{
              fontSize: { lg: "19px", md: "18px", sm: "17px", xs: "16px" },
              fontWeight: "400",
              lineHeight: "1.8",
              color: theme.palette.primary.thirdMain,
              mb: 5,
              opacity: 0.85,
              maxWidth: "900px",
              mx: "auto",
              textAlign: "center",
              px: { mob: "20px", xs: "20px" },
            }}
          >
            Muslims deserve tools that support faith, learning, and reflection —
            without compromise. Islam Encyclo continues this mission, now
            faster, calmer, and more refined for the new year.
          </Typography>

          <Stack
            spacing={3}
            sx={{
              maxWidth: "900px",
              mx: "auto",
              mb: 8,
              px: { mob: "20px", xs: "20px" },
            }}
          >
            {[
              {
                label: "Presence over noise: ",
                text: "Every feature supports focus, calm, and sincerity",
              },
              {
                label: "Trust over tracking: ",
                text: "Your personal data stays private; your faith remains yours",
              },
              {
                label: "Authenticity over shortcuts: ",
                text: "All Duas, Hadith, and educational content are scholar-verified",
              },
              {
                label: "Guidance over distraction: ",
                text: "Qur'an modules, Tasbeeh, and Azkaar enhance devotion without interruption",
              },
            ].map((item, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}
              >
                <Box
                  sx={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#008081",
                    mt: "11px",
                    flexShrink: 0,
                    boxShadow: "0 0 0 4px rgba(0,128,129,0.2)",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "18px",
                      md: "17px",
                      sm: "16px",
                      xs: "15px",
                    },
                    fontWeight: "400",
                    lineHeight: "1.75",
                    color: theme.palette.primary.thirdMain,
                    opacity: 0.8,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "600",
                      color: theme.palette.primary.main,
                    }}
                  >
                    {item.label}
                  </Box>
                  {item.text}
                </Typography>
              </Box>
            ))}
          </Stack>

          <QuoteBox text="Islam Encyclo — A Companion for Every Muslim Heart" />
        </Box>

        {/* CTA */}
        <Stack
          alignItems="center"
          spacing={4}
          sx={{
            mt: { lg: 15, md: 12, sm: 10, xs: 8, mob: 8 },
            py: { lg: 10, md: 8, sm: 6, xs: 5, mob: 8 },
            px: 3,
            background:
              "linear-gradient(135deg, rgba(0,128,129,0.08) 0%, rgba(0,128,129,0.03) 100%)",
            borderRadius: "28px",
            border: "1px solid rgba(0,128,129,0.15)",
            mb: { mob: "40px", xs: "0px" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { lg: "36px", md: "32px", sm: "28px", xs: "24px" },
              fontWeight: "600",
              color: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            Ready to experience Islam Encyclo?
          </Typography>

          <DownloadNowButton
            fontSize="20px"
            px="48px"
            py="20px"
            onClick={handleDownload}
            sx={{
              borderRadius: "14px",
              boxShadow: "0 6px 24px rgba(0,128,129,0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: "0 10px 32px rgba(0,128,129,0.4)",
              },
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
}
