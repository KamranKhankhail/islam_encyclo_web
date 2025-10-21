"use client";
import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@/app/faqs/_components/icons/SearchIcon";
import SectionMainHeading from "@/components/common/SectionMainHeading";
import FAQsSection from "@/app/faqs/_components/FAQsSection";
export default function page() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <Stack
      direction="column"
      sx={{ justifyContent: "center", alignItems: "center", pt: "60px" }}
    >
      <SectionMainHeading>Frequently Asked Questions</SectionMainHeading>
      <TextField
        variant="outlined" // Use outlined variant for the border
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        sx={{
          mx: {
            lg: "300px",
            md: "200px",
            sm: "50px",
            xs: "40px",
            mob: "16px",
          },
          mb: "80px",
          mt: "60px",
          minWidth: "60%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px", // Adjust for desired roundness
            backgroundColor: "transparent", // White background inside
            px: "40px",
            "& fieldset": {
              border: "3px solid #CCE6E6",
            },
            "&:hover fieldset": {
              border: "3px solid #CCE6E6",
            },
            "&.Mui-focused fieldset": {
              border: "3px solid #CCE6E6",
            },
          },
          "& .MuiInputBase-input": {
            py: "20px",
            px: "10px",
            fontSize: {
              lg: "28px",
              md: "28px",
              sm: "26px",
              xs: "22px",
              mob: "20px",
            },
            color: "#2424249C",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon /> {/* Grey search icon */}
            </InputAdornment>
          ),
        }}
      />
      <FAQsSection searchQuery={searchQuery} />
    </Stack>
  );
}
