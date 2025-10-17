import theme from "@/styles/theme";

function FAQAddIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 34.3719C18.9211 34.3719 18.0469 33.4977 18.0469 32.4188V7.57812C18.0469 6.49922 18.9211 5.625 20 5.625C21.0789 5.625 21.9531 6.49922 21.9531 7.57812V32.4188C21.9531 33.4977 21.0789 34.3719 20 34.3719Z"
        fill={theme.palette.primary.main}
      />
      <path
        d="M32.4202 21.9531H7.57959C6.50068 21.9531 5.62646 21.0789 5.62646 20C5.62646 18.9211 6.50068 18.0469 7.57959 18.0469H32.4202C33.4991 18.0469 34.3733 18.9211 34.3733 20C34.3733 21.0789 33.4991 21.9531 32.4202 21.9531Z"
        fill={theme.palette.primary.main}
      />
    </svg>
  );
}

export default FAQAddIcon;
