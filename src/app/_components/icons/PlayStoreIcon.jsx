// apps/islam-encyclo/src/app/_components/icons/PlayStoreIcon.jsx
import React from "react";

export default function PlayStoreIcon({ width = "45px", height = "49px" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1467_13192"
        style={{ maskType: "alpha" }} // Corrected: object syntax and camelCase
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="45"
        height="49"
      >
        <path
          d="M43.2158 21.3757C45.5948 22.6849 45.5948 26.0651 43.2158 27.3743L5.16801 48.3111C2.85098 49.5861 0 47.9314 0 45.3118V3.43826C0 0.818569 2.85098 -0.835969 5.16801 0.439031L43.2158 21.3757Z"
          fill="#C4C4C4"
        />
      </mask>
      <g mask="url(#mask0_1467_13192)">
        <path
          d="M1.19012 47.9001L24.9231 24.0338L1.58098 0.560547C0.649744 1.15751 0 2.18818 0 3.4388V45.3122C0 46.3793 0.472931 47.2861 1.19012 47.9001Z"
          fill="url(#paint0_linear_1467_13192)"
        />
        <path
          d="M43.2151 21.3756C45.5943 22.6847 45.5943 26.0648 43.2151 27.3739L33.6164 32.656L24.9226 24.0329L33.1732 15.8496L43.2151 21.3756Z"
          fill="url(#paint1_linear_1467_13192)"
        />
        <path
          d="M33.6172 32.6561L24.9232 24.0332L1.19019 47.8995C2.23385 48.7931 3.79478 49.0667 5.16815 48.3109L33.6172 32.6561Z"
          fill="url(#paint2_linear_1467_13192)"
        />
        <path
          d="M1.58008 0.559969L24.9222 24.0332L33.1728 15.8499L5.16707 0.439032C3.95619 -0.227287 2.5995 -0.0935058 1.58008 0.559969Z"
          fill="url(#paint3_linear_1467_13192)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1467_13192"
          x1="16.2692"
          y1="14.764"
          x2="0.133236"
          y2="31.0326"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00C3FF" />
          <stop offset="1" stopColor="#1BE2FA" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1467_13192"
          x1="24.9226"
          y1="24.033"
          x2="46.384"
          y2="24.033"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCE00" />
          <stop offset="1" stopColor="#FFEA00" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1467_13192"
          x1="0.692468"
          y1="50.8129"
          x2="29.2406"
          y2="27.9253"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DE2453" />
          <stop offset="1" stopColor="#FE3944" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1467_13192"
          x1="2.07598"
          y1="-2.05993"
          x2="29.2444"
          y2="20.1309"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#11D574" />
          <stop offset="1" stopColor="#01F176" />
        </linearGradient>
      </defs>
    </svg>
  );
}
