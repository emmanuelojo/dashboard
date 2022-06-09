module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
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
        75: "300px",
      },
      minWidth: {
        64: "256px",
      },
    },
  },
  plugins: [],
};
