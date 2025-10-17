import React from "react";

export default function LeftArrowIcon({ color = "#008081" }) {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 8H17M17 8L10.1429 1M17 8L10.1429 15"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
