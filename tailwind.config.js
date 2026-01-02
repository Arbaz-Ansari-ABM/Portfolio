// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(156, 163, 175, 0.1) 0%, rgba(209, 213, 219, 0) 50%), linear-gradient(141.27deg, rgba(255, 255, 255, 0) 50%, rgba(243, 244, 246, 0.1) 100%)',
      },
    },
  },
  plugins: [],
};
