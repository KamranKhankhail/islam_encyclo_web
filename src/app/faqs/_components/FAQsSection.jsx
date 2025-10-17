"use client";

import { Box, Collapse, IconButton, Stack, Typography } from "@mui/material";
import { useState, useMemo } from "react";
import FAQAddIcon from "@/app/faqs/_components/icons/FAQAddIcon";
import theme from "@/styles/theme";

const FAQsCards = [
  {
    q: "What is Islam Encyclo?",
    a: "Islam Encyclo is an all-in-one Islamic app available for both Android and iOS users. It provides authentic Islamic knowledge, practical guidance, and spiritual tools for Muslims of all ages.",
  },
  {
    q: "Can I listen to the Holy Quran in different voices?",
    a: "Yes, Islam Encyclo allows you to listen to the Quran in multiple beautiful voices of famous Quran scholars, giving you a personalized listening experience.",
  },
  {
    q: "Can I read the Quran with translation?",
    a: "Yes, you can read the Quran in 16-line Rangeen Tajweedi PDF format or verse-by-verse with English and Urdu translations for better understanding.",
  },
  {
    q: "Does Islam Encyclo provide Qibla direction?",
    a: "Yes, the app includes an accurate Qibla direction feature to help you easily find the direction of prayer from anywhere in the world.",
  },
  {
    q: "Is there a digital Tasbeeh counter available?",
    a: "Yes, Islam Encyclo includes a beautifully designed Tasbeeh feature that helps you perform dhikr and count your tasbeeh with ease.",
  },
  {
    q: "Does the app include Duas for different times and occasions?",
    a: "Yes, Islam Encyclo provides a complete collection of Duas for various occasions such as morning, evening, before eating, after eating, sleeping, traveling, and more.",
  },
  {
    q: "Can I explore Azkar collections in the app?",
    a: "Yes, you can explore a rich collection of Azkar to remember Allah throughout your day and strengthen your connection with Him.",
  },
  {
    q: "Can I check both Hijri and English dates in the app?",
    a: "Yes, Islam Encyclo allows you to view both Hijri and English calendar dates, helping you stay informed about Islamic and Gregorian timelines.",
  },
  {
    q: "Can I bookmark Surahs or Paras for later reading?",
    a: "Yes, you can easily bookmark any Surah or Para to continue reading from where you left off.",
  },
  {
    q: "Does the app show fasting dates and timings?",
    a: "Yes, Islam Encyclo provides fasting schedules, including Sehri and Iftar timings, to help you plan your fasts during Ramadan and other days.",
  },
  {
    q: "What is the Favorites feature in Islam Encyclo?",
    a: "The Favorites feature allows you to mark your most-used sections—such as Duas, Surahs, or Tasbeehs—for quick and easy access later.",
  },
  {
    q: "Does the app include Asma-ul-Husna?",
    a: "Yes, Islam Encyclo contains all 99 Names of Allah (Asma-ul-Husna) with their meanings and explanations to help you reflect on His attributes.",
  },
  {
    q: "Does Islam Encyclo include Asma-un-Nabi?",
    a: "Yes, the app includes Asma-un-Nabi—the blessed names of Prophet Muhammad ﷺ—along with their meanings and significance.",
  },
  {
    q: "Can I learn about the Five Pillars of Islam in the app?",
    a: "Yes, Islam Encyclo includes detailed explanations of the Five Pillars of Islam to strengthen your understanding of core Islamic principles.",
  },
  {
    q: "Does the app include books of Hadith?",
    a: "Yes, Islam Encyclo features authentic Hadith books so you can learn directly from the sayings and teachings of the Prophet Muhammad ﷺ.",
  },
  {
    q: "Can I find nearby mosques through the app?",
    a: "Yes, Islam Encyclo helps you find nearby mosques using your phone’s GPS, making it easier to locate places for prayer while traveling or in new areas.",
  },
  {
    q: "Does the app provide Salah guidance?",
    a: "Yes, Islam Encyclo provides complete Salah (Namaz) guidance, including steps, recitations, and conditions—separately for men and women.",
  },
  {
    q: "Does the app offer Wudu (Ablution) guidance?",
    a: "Yes, Islam Encyclo offers detailed, step-by-step Wudu guidance for both men and women with proper illustrations and instructions.",
  },
  {
    q: "Can I track my Salah performance or prayer streaks?",
    a: "Yes, the app includes a prayer streak feature that helps you track your Salah performance and stay consistent with your prayers.",
  },
  {
    q: "Can I share Islamic content with others?",
    a: "Yes, Islam Encyclo allows you to share Hadiths, Duas, and other Islamic content with your family and friends directly through the app.",
  },
  {
    q: "Are all features of Islam Encyclo free?",
    a: "Yes, all features of Islam Encyclo are currently free for everyone. Premium features may be added in the future to enhance the experience.",
  },
  {
    q: "Will the app receive future updates?",
    a: "Yes, Islam Encyclo is continuously updated with new content, improvements, and additional Islamic features to provide the best possible experience for users.",
  },
];

function FAQsSection({ searchQuery }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Filter and reorder FAQs based on search query
  const filteredAndSortedFAQs = useMemo(() => {
    if (!searchQuery) {
      return FAQsCards; // No search query, return all cards in original order
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const matchingFAQs = [];
    const nonMatchingFAQs = [];

    FAQsCards.forEach((card) => {
      const questionMatches = card.q.toLowerCase().includes(lowerCaseQuery);

      if (questionMatches) {
        // Only check for question matches
        matchingFAQs.push(card);
      } else {
        nonMatchingFAQs.push(card);
      }
    });

    // Return matching FAQs first, then non-matching ones
    return [...matchingFAQs, ...nonMatchingFAQs];
  }, [searchQuery]);

  return (
    <Stack
      direction="column"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        pb: "100px",
        maxWidth: { lg: "75%", md: "80%", sm: "80%", xs: "90%", mob: "96%" },
      }}
    >
      <Stack
        direction="column"
        id="faq-cards"
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          alignItems: "start",
        }}
      >
        {filteredAndSortedFAQs.map(
          (
            card,
            i // Use filteredAndSortedFAQs here
          ) => (
            <Stack
              component="div"
              role="button"
              key={i}
              sx={{
                borderRadius: "20px",
                minWidth: "100%",
                p: "30px",
                // Combined background layers: first for inner content, second for border
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, rgba(213, 234, 234, 0.8) 50%, rgba(170, 213, 213, 0.7) 100%) padding-box padding-box, linear-gradient(180deg, rgba(128, 192, 192, 0.57) 0%, rgba(128, 192, 192, 0.68) 100%) border-box border-box",
                // Transparent border to define thickness, allowing the second background to show as border
                border: "1px solid transparent",
                boxShadow: "0px 4px 20px -4px #00000040", // Your specified box shadow
                cursor: "pointer",
              }}
              onClick={() => handleClick(i)}
            >
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      lg: "26px",
                      md: "24px",
                      sm: "22px",
                      xs: "22px",
                      mob: "20px",
                    },
                    lineHeight: "130%",
                    color: theme.palette.primary.main,
                    pb: openIndex === i ? "8px" : "0px",
                    fontWeight: "400",
                  }}
                >
                  {card.q}
                </Typography>
                <IconButton
                  sx={{
                    p: "0px",
                    transform: openIndex === i ? "rotate(45deg)" : "none",
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent triggering the parent Stack
                    handleClick(i);
                  }}
                >
                  <FAQAddIcon />
                </IconButton>
              </Box>

              <Collapse in={openIndex === i} timeout="auto">
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      // Corrected fontSize syntax
                      xl: "30px",
                      lg: "26px",
                      md: "24px",
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
                    color: theme.palette.primary.main,
                    fontWeight: "300",
                    // width: "580px",
                    pt: "10px",
                  }}
                >
                  {card.a}
                </Typography>
              </Collapse>
            </Stack>
          )
        )}
      </Stack>
    </Stack>
  );
}

export default FAQsSection;
