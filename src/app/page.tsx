import HeaderSection from "@/app/_components/HeaderSection";
import FeaturesSection from "@/app/_components/FeaturesSection";
import WhyChooseIslamEncycloSection from "@/app/_components/WhyChooseIslamEncycloSection";
import AyatOfTheDaySection from "@/app/_components/AyatOfTheDaySection";
import WordsFromEstimatedSection from "@/app/_components/WordsFromEstimatedSection";
import ReflectionsFromOurUsersSection from "@/app/_components/ReflectionsFromOurUsersSection";
import { Stack } from "@mui/material";
export default async function Home() {
  return (
    <Stack sx={{ overflow: "hidden" }}>
      <HeaderSection />
      <FeaturesSection />
      <WhyChooseIslamEncycloSection />
      <AyatOfTheDaySection />
      {/* <WordsFromEstimatedSection /> */}
      <ReflectionsFromOurUsersSection />
    </Stack>
  );
}
