/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  theme: {
    extend: {
      colors: {
        midnight: '#121212', // Your custom color
      },
    },
  },
};

export default config;