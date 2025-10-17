"use client";

import { usePathname, useRouter } from "next/navigation";
import { Box, Typography, Button } from "@mui/material";

export default function NotFoundClient() {
  const pathname = usePathname();
  const router = useRouter();

  const handleBack = () => {
    router.push("/"); // ✅ If no history, go home
  };

  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 3,
        gap: "8px",
        background:
          "radial-gradient(235.53% 235.53% at 4.6% 4.14%, #FFFFFF 0%, #CCE6E6 33.29%, #AAD5D5 59.74%, #80C0C0 85.16%)",
      }}
    >
      {/* Friendly Emoji */}
      <Typography component="div" sx={{ fontSize: "36px", mb: 2 }}>
        🔍
      </Typography>

      {/* Error Code */}
      <Typography
        variant="h1"
        fontWeight="bold"
        sx={{ fontSize: "20px", color: "#242424", mb: 1 }}
      >
        404
      </Typography>

      {/* Title */}
      <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
        Page Not Found
      </Typography>

      {/* Description with badge for pathname */}
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4, lineHeight: 1.6, maxWidth: 500 }}
      >
        The page you are looking for{" "}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            px: 1.5,
            py: 0.5,
            borderRadius: 2,
            bgcolor: "#008081",
            color: "white",
            fontWeight: "bold",
            fontSize: "0.9rem",
            mx: 0.5,
          }}
        >
          {pathname}
        </Box>{" "}
        does not exist or may have been moved.
      </Typography>

      {/* Back Button */}
      <Button sx={{ borderRadius: 2, px: 4, py: 1.5 }} onClick={handleBack}>
        Go Back
      </Button>
    </Box>
  );
}
