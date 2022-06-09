module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "n-auto-1fr": "repeat(auto, auto 1fr)",
      },
    },
  },
  plugins: [],
};
