import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#0F172A",
        success: "#16A34A",
        
        dark: "#0F172A",      
        white: "#FFFFFF",
      },
    },
  },

  plugins: [],
};


export default config;