import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fruit-salad": {
          "50": "#f1fcf4",
          "100": "#defae7",
          "200": "#bef4d0",
          "300": "#8ce9ac",
          "400": "#52d67f",
          "500": "#2bbc5d",
          "600": "#1d9948",
          "700": "#1b7a3c",
          "800": "#1a6133",
          "900": "#17502d",
          "950": "#072c15",
        },
        "lima": {
          "50": "#f4faeb",
          "100": "#e5f4d3",
          "200": "#cceaac",
          "300": "#acda7c",
          "400": "#81c341",
          "500": "#6eae34",
          "600": "#548a26",
          "700": "#426a21",
          "800": "#36551f",
          "900": "#2f491e",
          "950": "#17270c",
        },
        "slate-gray": "#6D6D6D",
        "malachite": "#25d366",
        "snow-flurry": "#e6ffda",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      },
      backgroundImage: {
        'hero': "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(/containerTruckBanner.jpg)",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
} satisfies Config;
