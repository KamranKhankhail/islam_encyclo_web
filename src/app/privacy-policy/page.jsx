// src/app/privacy-policy/page.jsx
import React from "react";
import { Box, Typography, Container, Link, Stack } from "@mui/material";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Islam Encyclo by Kivyx Technologies - focused on minimal data collection.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, sm: 4, md: 8 } }}>
      {" "}
      {/* Adjusted vertical padding */}
      <Stack>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            color: "primary.dark",
            fontWeight: 700,
            mb: { xs: 2, md: 4 },
            fontSize: { xs: "1.6rem", sm: "2.2rem", md: "3rem" }, // Further reduced for xs, slightly for sm
            lineHeight: { xs: 1.2, md: 1.3 }, // Adjust line height for headings
          }}
        >
          Privacy Policy
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          align="center"
          sx={{
            color: "text.secondary",
            mb: { xs: 3, md: 5 },
            fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1.1rem" }, // Further reduced for xs
          }}
        >
          Last updated: December 31, 2025
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          {" "}
          {/* Responsive font size for body */}
          Kivyx Technologies operates the Islam Encyclo mobile application (the
          "App") and the{" "}
          <Link href="https://islamencyclo.kivyx.com/" target="_blank">
            islamencyclo.kivyx.com
          </Link>{" "}
          website (the "Service"). This Privacy Policy outlines how Kivyx
          Technologies handles information when you use the Service.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          At Kivyx Technologies, your privacy is a top priority. Our website
          does not require user accounts or personal sign-in information. The
          only information our website may access is your approximate device
          location, which is used solely to provide accurate prayer times based
          on your current geographical area. This information is processed in
          real-time and is{" "}
          <Typography component="span" fontWeight="bold">
            never stored or used to personally identify you.
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          For the Islam Encyclo mobile App, this policy also covers data
          handling. Please note that while the website's data collection is
          minimal, the mobile application may collect additional information as
          necessary for its features (e.g., prayer streak, personalized
          settings).
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          mt={{ xs: 2, sm: 3, md: 5 }} // Adjusted margin-top for smaller screens
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2.125rem" }, // Further reduced for xs, slightly for sm
            lineHeight: { xs: 1.3, md: 1.4 },
          }}
        >
          1. Information Kivyx Technologies Collects
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Kivyx Technologies collects very limited information, primarily for
          the functionality of the Service.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          mt={{ xs: 1.5, sm: 2, md: 3 }} // Adjusted margin-top
          sx={{
            color: "primary.main",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          }} // Further reduced for xs, slightly for sm
        >
          Location Data (Website & App)
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          The Islam Encyclo website may request access to your device's
          approximate location (e.g., through browser geolocation) to
          automatically determine and display accurate prayer times. This
          location data is used for{" "}
          <Typography component="span" fontWeight="bold">
            real-time calculation only and is not stored, tracked, or associated
            with any individual user profile on the website.
          </Typography>{" "}
          The mobile App also uses location data for prayer times and Qibla
          direction, which may be stored locally on your device for convenience.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          mt={{ xs: 1.5, sm: 2, md: 3 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          }}
        >
          Usage Data (Website & App)
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          When you access the Service, Kivyx Technologies may collect
          information that your browser sends whenever you visit the website or
          use the App ("Usage Data"). This Usage Data may include information
          such as your device's Internet Protocol address (e.g., IP address),
          browser type, browser version, the pages of the Service that you
          visit, the time and date of your visit, the time spent on those pages,
          and other diagnostic data.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          For the mobile App, this Usage Data may also include anonymous app
          usage statistics (e.g., features used, duration) and crash reports,
          which help Kivyx Technologies improve the App's stability and
          performance.{" "}
          <Typography component="span" fontWeight="bold">
            This data is aggregated and anonymized
          </Typography>{" "}
          and cannot be used to identify you personally.
        </Typography>

        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          mt={{ xs: 1.5, sm: 2, md: 3 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
          }}
        >
          Tracking & Cookies Data (Website)
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          The Islam Encyclo website uses cookies and similar tracking
          technologies to track activity and enhance your browsing experience.
          Cookies are small data files stored on your device. Kivyx Technologies
          uses them for:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 4 }, my: 2 }}>
          {" "}
          {/* Adjusted list padding */}
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            <Typography component="span" fontWeight="bold">
              Functionality:
            </Typography>{" "}
            To remember your preferences (e.g., language, theme).
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            <Typography component="span" fontWeight="bold">
              Analytics:
            </Typography>{" "}
            To understand how the website is used and identify areas for
            improvement. This data is aggregated and anonymous.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            <Typography component="span" fontWeight="bold">
              Security:
            </Typography>{" "}
            To help ensure the security of the Service.
          </Typography>
        </Box>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          You can instruct your browser to refuse all cookies or to indicate
          when a cookie is being sent. However, some parts of the Service may
          not function properly without cookies.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          mt={{ xs: 2, sm: 3, md: 5 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.125rem" },
            lineHeight: { xs: 1.3, md: 1.4 },
          }}
        >
          2. How Kivyx Technologies Uses Your Information
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Kivyx Technologies uses the collected information for the following
          purposes:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 4 }, my: 2 }}>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            To provide and maintain the Service (e.g., delivering prayer times).
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            To understand and analyze how the Service is used to improve its
            features and user experience.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            To monitor the usage of the Service for performance and stability.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            To detect, prevent, and address technical issues.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            To deliver non-personalized advertisements (where applicable, e.g.,
            Google AdSense), based on website content, not user identity.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            To notify you about changes to the Service (App notifications, if
            enabled, or prominent website notices).
          </Typography>
        </Box>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          mt={{ xs: 2, sm: 3, md: 5 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.125rem" },
            lineHeight: { xs: 1.3, md: 1.4 },
          }}
        >
          3. Sharing Your Information
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Kivyx Technologies does not share any personally identifiable
          information collected from website users. Aggregated and anonymized
          usage data may be shared with third-party service providers to help
          Kivyx Technologies analyze and improve the Service.
        </Typography>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          mt={{ xs: 1.5, sm: 2, md: 3 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
          }}
        >
          Service Providers
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Kivyx Technologies may employ third-party companies and individuals to
          facilitate the Service ("Service Providers"), to provide
          Service-related services or to assist in analyzing how the Service is
          used. These third parties are granted access only to the necessary
          anonymized data to perform these tasks on our behalf and are
          contractually obligated not to disclose or use it for any other
          purpose.
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 4 }, my: 2 }}>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            <Typography component="span" fontWeight="bold">
              Analytics (e.g., Google Analytics):
            </Typography>{" "}
            Kivyx Technologies uses analytics services to understand website
            traffic and usage patterns. These services collect anonymous data
            about your interactions with the site.
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            <Typography component="span" fontWeight="bold">
              Advertising (e.g., Google AdSense & AdMob for App):
            </Typography>{" "}
            The Islam Encyclo website may display non-personalized ads. The
            mobile App may use AdMob for advertising. These services collect
            anonymous data related to ad impressions and clicks.
          </Typography>
        </Box>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          mt={{ xs: 2, sm: 3, md: 5 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.125rem" },
            lineHeight: { xs: 1.3, md: 1.4 },
          }}
        >
          4. Security of Data
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          The security of your non-personal and aggregated data is important to
          Kivyx Technologies. While we strive to use commercially acceptable
          means to protect your information, remember that no method of
          transmission over the Internet or method of electronic storage is 100%
          secure. Kivyx Technologies cannot guarantee its absolute security.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          mt={{ xs: 2, sm: 3, md: 5 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.125rem" },
            lineHeight: { xs: 1.3, md: 1.4 },
          }}
        >
          5. Links to Other Sites
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          The Service may contain links to other sites that are not operated by
          Kivyx Technologies. If you click on a third-party link, you will be
          directed to that third party's site. Kivyx Technologies strongly
          advises you to review the Privacy Policy of every site you visit.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Kivyx Technologies has no control over and assumes no responsibility
          for the content, privacy policies, or practices of any third-party
          sites or services.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          mt={{ xs: 2, sm: 3, md: 5 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.125rem" },
            lineHeight: { xs: 1.3, md: 1.4 },
          }}
        >
          6. Children's Privacy
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          The Service is not directed to anyone under the age of 13
          ("Children"). Kivyx Technologies does not knowingly collect personally
          identifiable information from Children through the website. As Kivyx
          Technologies does not collect personal data from any website users,
          this applies to children as well. For the mobile App, if Kivyx
          Technologies learns that it has collected personal data from children
          without verification of parental consent, steps will be taken to
          remove that information.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          mt={{ xs: 2, sm: 3, md: 5 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.125rem" },
            lineHeight: { xs: 1.3, md: 1.4 },
          }}
        >
          7. Changes to This Privacy Policy
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Kivyx Technologies may update this Privacy Policy from time to time.
          You will be notified of any changes by posting the new Privacy Policy
          on this page.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Kivyx Technologies will update the "Last updated" date at the top of
          this Privacy Policy. You are advised to review this Privacy Policy
          periodically for any changes. Changes to this Privacy Policy are
          effective when they are posted on this page.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          mt={{ xs: 2, sm: 3, md: 5 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.3rem", sm: "1.8rem", md: "2.125rem" },
            lineHeight: { xs: 1.3, md: 1.4 },
          }}
        >
          8. Contact Kivyx Technologies
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          If you have any questions about this Privacy Policy, please contact
          Kivyx Technologies:
        </Typography>
        <Box component="ul" sx={{ pl: { xs: 2, md: 4 }, my: 2 }}>
          <Typography
            component="li"
            variant="body1"
            sx={{ mb: 1, fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            By email:{" "}
            <Link href="mailto:support@kivyx.com" target="_blank">
              support@kivyx.com
            </Link>
          </Typography>
          <Typography
            component="li"
            variant="body1"
            sx={{ fontSize: { xs: "0.95rem", sm: "1rem" } }}
          >
            By visiting this page on our website:{" "}
            <Link href="https://islamencyclo.kivyx.com/contact" target="_blank">
              https://islamencyclo.kivyx.com/contact
            </Link>{" "}
            (Please ensure this contact page exists and is functional)
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
