import {
  Roboto,
  Bebas_Neue,
  Mulish,
  Geist,
  Geist_Mono,
  Inter,
  Jaro,
  Chakra_Petch,
  Noto_Nastaliq_Urdu, // Add this import
} from "next/font/google";
import "@/styles/global.css";
import ThemeRegistry from "@/styles/ThemeRegistry";
import Navbar from "@/components/Navbar";
import PageLoader from "@/components/common/PageLoader";
import NavigationWrapper from "@/components/common/NavigationWrapper";
import { Stack } from "@mui/material";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const jaro = Jaro({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jaro",
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const mulish = Mulish({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-mulish",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoNastaliqUrdu = Noto_Nastaliq_Urdu({
  // Define Noto Nastaliq Urdu font
  subsets: ["arabic"], // Specify relevant subset, can be 'latin' or others if needed
  weight: ["400", "700"], // Or specify the weights you need from Google Fonts
  variable: "--font-noto-nastaliq-urdu",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Islam Encyclo",
    template: "%s | Islam Encyclo", // auto append brand name
  },
  description:
    "Islam Encyclo by Kivyx is a complete Islamic app that brings the Holy Quran with translations, audio recitations, and offline PDF, along with Hadith collections, daily duas, Azkar, tasbeeh counter, and Asma-ul-Husna & Asma-un-Nabi. Stay punctual with prayer times, namaz reminders, streak-based salah tracking, Qibla finder, nearby mosque locator, fasting timetable, and detailed Salah & Wudu guides for both men and women. Plus, enjoy Islamic WhatsApp statuses, quizzes, and more — your all-in-one digital Islamic companion.",
  metadataBase: new URL("https://www.kivyx.com"), // your domain
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Islam Encyclo - Complete Quran, Hadith & Islamic App | Kivyx",
    description:
      "Experience the ultimate Islamic app with Quran recitations, translations & PDF, Hadith, duas, tasbeeh, Azkar, Asma-ul-Husna, Asma-un-Nabi, prayer times & reminders, Qibla direction, nearby mosque finder, fasting timetable, Salah & Wudu guides, Islamic quizzes, WhatsApp statuses, and prayer streak tracking. Islam Encyclo is your all-in-one Islamic lifestyle app.",
    url: "https://www.kivyx.com/products/islam-encyclo",
    siteName: "Kivyx",
    images: [
      {
        url: "https://www.kivyx.com/images/IslamEncycloBg.png",
        width: 1200,
        height: 630,
        alt: "Islam Encyclo - Islamic App by Kivyx",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Islam Encyclo - Quran, Hadith, Duas, Prayer Times & More | Kivyx",
    description:
      "Islam Encyclo is your complete Islamic app with Quran (read, listen, PDF), Hadith, duas, tasbeeh, Azkar, Asma-ul-Husna, Asma-un-Nabi, prayer reminders, Qibla finder, mosque locator, fasting timetable, Salah & Wudu guides, Islamic quizzes, WhatsApp statuses & prayer streak tracking. Available on Android & iOS.",
    images: ["https://www.kivyx.com/images/IslamEncycloBg.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Organization JSON-LD for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Islam Encyclo",
              operatingSystem: "Android, iOS",
              applicationCategory: "LifestyleApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              description:
                "Islam Encyclo by Kivyx Technologies is the ultimate all-in-one Islamic mobile app that empowers Muslims worldwide to stay connected with their faith. It features the Holy Quran with multiple translations, beautiful audio recitations, and downloadable PDF for offline reading. The app also includes authentic Hadith collections, a comprehensive dua library, daily Azkar, a digital tasbeeh counter, and both Asma-ul-Husna (Names of Allah) & Asma-un-Nabi (Names of the Prophet) for spiritual learning. Stay punctual with highly accurate prayer times, customizable namaz reminders, and streak-based prayer tracking to motivate consistency. With a built-in Qibla Finder, nearby mosque locator integrated with Google Maps, fasting timetable for Ramadan, and detailed Salah & Wudu guides for both men and women, it covers every essential Islamic need. Additional features include Islamic WhatsApp statuses, fun and educational quizzes, and tools for fasting & prayer tracking. Islam Encyclo is not just an app — it’s your complete Islamic lifestyle companion available for free on Android and iOS.",
              publisher: {
                "@type": "Organization",
                name: "Kivyx Technologies",
                url: "https://www.kivyx.com",
                logo: "https://www.kivyx.com/favicon.ico",
              },
              url: "https://www.kivyx.com/products/islam-encyclo",
              image: "https://www.kivyx.com/images/IslamEncycloBg.png",
              featureList: [
                "Quran with translations",
                "Audio Quran recitations",
                "Quran PDF (offline access)",
                "Authentic Hadith collections",
                "Duas library",
                "Daily Azkar",
                "Digital Tasbeeh counter",
                "Asma-ul-Husna (Names of Allah)",
                "Asma-un-Nabi (Names of Prophet Muhammad ﷺ)",
                "Accurate Prayer times",
                "Namaz reminders",
                "Prayer streak tracking",
                "Qibla Finder",
                "Nearby mosque locator via Google Maps",
                "Fasting timetable",
                "Step-by-step Salah guide (men & women)",
                "Step-by-step Wudu guide (men & women)",
                "Islamic WhatsApp statuses",
                "Educational Islamic quizzes",
              ],
              androidDownloadLink:
                "https://play.google.com/store/apps/details?id=com.kivyx.islamencyclo&hl=en",
              IOSDownloadLink: "https://apple.co/3xfPeyW",
            }),
          }}
        />
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
      </head>
      <body
        className={`${chakraPetch.className} ${inter.variable} ${jaro.variable} ${geistSans.variable} ${geistMono.variable} antialiased ${roboto.variable} ${bebasNeue.variable} ${mulish.variable} ${notoNastaliqUrdu.variable}`} // Add notoNastaliqUrdu.variable
      >
        <ThemeRegistry>
          <PageLoader />

          <NavigationWrapper>
            <Stack
              sx={{
                background:
                  "radial-gradient(235.53% 235.53% at 4.6% 4.14%, #FFFFFF 0%, #CCE6E6 33.29%, #AAD5D5 59.74%, #80C0C0 85.16%)",
              }}
            >
              <Stack sx={{ pt: "180px", overflow: "hidden" }}>
                <Navbar />
              </Stack>

              {children}
            </Stack>
          </NavigationWrapper>
        </ThemeRegistry>
      </body>
    </html>
  );
}
