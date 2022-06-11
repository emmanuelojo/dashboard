module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        "n-bg": "#F8F9FF",
        "n-blue": "#445BFF",
        "n-bold-blue": "#017EFA",
        "n-dark-blue": "#1B2B65",
        "n-darker-blue": "#081A51",
        "n-sky-blue": "#51CBFF",
        "n-gray": "#CCD2E3",
        "n-gray-text": "#A9ABB0",
        "n-red": "#CF3A59",
        "n-black": "#1C1F37",
      },
      gridTemplateColumns: {
        "auto-1fr": "auto 1fr",
        "1-auto": "1fr auto",
        "n-auto-1fr": "repeat(auto, auto 1fr)",
        "2auto": "repeat(2, auto)",
        "3auto": "repeat(3, auto)",
        "4auto": "repeat(4, auto)",
        "5auto": "repeat(5, auto)",
        "2fr-1fr": "2fr 1fr",
      },
      gridTemplateRows: {
        "2auto": "auto 1fr auto",
      },
      width: {
        50: "200px",
        75: "300px",
      },
      minWidth: {
        64: "256px",
      },
    },
  },
  plugins: [],
};
