import type { Config } from "tailwindcss";

const config: Config = {
  content: [
   "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveGradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        // NEW: Shimmer for that glistering glass effect
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        // NEW: Floating for the dashboard UI
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      animation: {
        'slow-gradient': 'moveGradient 15s ease infinite',
        // NEW: Use 'glisten' for your icons
        'glisten': 'shimmer 3s infinite',
        // NEW: Use 'floating' for your hero dashboard
        'floating': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;