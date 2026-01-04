import React from "react";
import { Box, Typography, Container, Link, Stack } from "@mui/material";

export const metadata = {
  title: "Privacy Policy - Islam Encyclo",
  description:
    "Privacy Policy for Islam Encyclo by Kivyx Technologies - focused on minimal data collection.",
};

export default function PrivacyPolicyPage() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 3, sm: 4, md: 8 } }}>
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
            fontSize: { xs: "1.6rem", sm: "2.2rem", md: "3rem" },
            lineHeight: { xs: 1.2, md: 1.3 },
          }}
        >
          Privacy Policy for Islam Encyclo
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          align="center"
          sx={{
            color: "text.secondary",
            mb: { xs: 3, md: 5 },
            fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1.1rem" },
          }}
        >
          Last updated: 04 January 2026
        </Typography>

        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Islam Encyclo is a Quranic and spiritual companion application
          available on Android and iOS. This Privacy Policy explains how the app
          handles information following a major migration and update to its
          internal architecture. Our goal is to provide core features such as
          Quran audio, offline access, reminders, quizzes, Tasbeeh counters, and
          personalization while respecting user privacy and maintaining platform
          compliance.
        </Typography>

        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          mt={{ xs: 2, sm: 3, md: 5 }}
          sx={{
            color: "primary.main",
            fontSize: { xs: "1.2rem", sm: "1.6rem", md: "2.125rem" },
            lineHeight: { xs: 1.3, md: 1.4 },
          }}
        >
          Information We Collect
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Islam Encyclo is designed to work without user accounts or
          registration. The app collects only limited information necessary to
          operate features reliably and improve quality.
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
          App usage and diagnostics
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          The app may collect anonymized usage information such as screen
          interactions, feature usage, session duration, app version, and basic
          device characteristics. This data is used in aggregate to understand
          how features perform, improve stability, and fix errors. Crash and
          error reports may include technical device state at the time of
          failure but are not used to identify individual users.
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
          Device and preference information
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          The app stores your selected language, theme, reading progress, prayer
          preferences, reminders, and similar settings on your device. Limited
          non-personal device information (such as operating system version,
          locale, and connectivity status) may be processed to ensure correct
          formatting, downloads, and feature behavior.
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
          Advertising data
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Islam Encyclo displays ads to support continued development.
          Advertising partners may receive standard advertising identifiers
          provided by your device, along with limited device and interaction
          data, to deliver and measure ads. This data is handled by advertising
          providers according to their own privacy policies and respects
          system-level ad personalization controls.
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
          Push notification data
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          If you choose to enable notifications, the app stores a device
          notification token and basic metadata to deliver reminders such as
          prayer times or app updates. Notification delivery statistics may be
          collected to ensure reliability.
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
          Location and sensor access
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Location access is requested only when you actively use features that
          require it, such as prayer times, Qibla direction, or nearby mosque
          tools. Motion and orientation sensors may be used while these features
          are open. This information is processed temporarily and is not
          continuously tracked in the background.
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
          Microphone and media access
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Microphone access is used only for voice-based features you initiate.
          Audio is processed on the device and is not stored or uploaded. Camera
          or photo library access is requested only when you choose to create or
          save images generated by the app.
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
          Local storage and offline content
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Downloaded Quran audio, documents, and other media are stored locally
          on your device to enable offline use. The app does not retrieve copies
          of your locally stored files. Basic download success or failure
          information may be logged in an anonymized form to monitor
          reliability.
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
          Content hosting and delivery
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Quranic audio, greeting graphics, background imagery, and other media
          assets are hosted on secure servers and fetched on demand to ensure
          fast, reliable streaming. These requests carry no personal identifiers
          beyond standard connection metadata required for downloads.
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
          Over-the-air updates
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          The app uses controlled update mechanisms to deliver fixes and feature
          updates without requiring full app store updates. These updates may
          collect minimal, anonymized device metadata to ensure compatibility
          and rollout coverage.
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
          Cortos (Short-Form Video) Module
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Islam Encyclo includes a short-form video feature called "Cortos,"
          which allows users to watch brief video content within the app.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Video playback in the Cortos module is provided using the YouTube
          IFrame Player API. All videos displayed in Cortos are published and
          managed by Islam Encyclo through its official YouTube channel. The app
          does not display third-party, user-uploaded, or unauthorized video
          content.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Islam Encyclo does not download, store, cache, re-host, modify, or
          redistribute video or audio content from YouTube. Videos are streamed
          directly from YouTube, and all playback controls, advertisements,
          monetization, and viewing behavior are governed exclusively by YouTube
          and Google policies.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          The Cortos module itself does not collect, store, or process personal
          user information, YouTube account data, watch history, likes,
          comments, or subscription details. Users are not required to sign in
          to a Google or YouTube account, and the app does not request Google or
          YouTube authentication permissions.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Any data collected during video playback, such as device information,
          IP address, or usage metrics, is collected directly by YouTube in
          accordance with Google's Privacy Policy. Islam Encyclo does not
          receive access to, control over, or ownership of this data.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Islam Encyclo does not inject additional advertisements, tracking
          mechanisms, or third-party analytics into the Cortos module. Any
          advertisements or analytics presented during playback are managed
          entirely by YouTube.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          The app does not bypass YouTube advertisements, enable background
          playback or offline downloads, restrict YouTube interface elements, or
          alter playback behavior in a way that circumvents YouTube policies.
          Age, content, and regional restrictions enforced by YouTube remain
          fully intact.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Content made available through Cortos is intended to comply with
          YouTube Community Guidelines, child safety standards, and applicable
          platform policies.
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
          Information We Do Not Collect
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Islam Encyclo does not collect names, email addresses, phone numbers,
          account credentials, payment details, biometric identifiers, or social
          media information. The app does not access contacts, messages, call
          logs, or calendars. Background access to location, microphone, or
          camera does not occur outside of features you explicitly open. The app
          does not track continuous location history or collect health or
          fitness data beyond what you record inside the app (e.g., Tasbeeh
          counts or prayer streaks).
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
          How We Use Information
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Information is used to provide core app functionality, including Quran
          listening, offline access, prayer calculations, reminders, Tasbeeh
          counters, quizzes, and personalization. Local data storage allows the
          app to remember your preferences without requiring server accounts.
          Anonymized analytics and diagnostics help maintain performance,
          reliability, and feature quality. Advertising data supports ad display
          and measurement while honoring system privacy controls.
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
          Third-Party Services
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          Islam Encyclo relies on trusted third-party service providers for
          infrastructure, analytics, crash reporting, advertisements,
          notifications, content delivery, and app updates. These providers
          process limited data on our behalf and operate under their own privacy
          policies. Islam Encyclo does not sell user data or combine third-party
          data with personal identities.
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
          User Rights and Choices
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          You control app permissions through your device settings and can
          revoke access at any time. Notifications can be disabled through
          system settings. Advertising personalization can be limited or reset
          using Android or iOS privacy controls. Removing the app deletes
          locally stored data unless your operating system retains a backup you
          manage. You may contact us to request removal of limited diagnostic or
          analytics data where technically feasible.
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
          Policy Updates and Acceptance
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          This Privacy Policy may be updated to reflect changes in features,
          services, or privacy practices. Continued use of Islam Encyclo after
          updates indicates acceptance of the revised policy. This policy
          applies to both Android and iOS versions of the app.
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
          Contact Information
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ lineHeight: 1.8, fontSize: { xs: "0.95rem", sm: "1rem" } }}
        >
          For questions, privacy requests, or feedback, please contact us at:{" "}
          <Link href="mailto:kamranyofficial@gmail.com" target="_blank">
            kamranyofficial@gmail.com
          </Link>
        </Typography>
      </Stack>
    </Container>
  );
}
