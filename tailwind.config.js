/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'xs': '475px',
      // => @media (min-width: 475px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      'xxl': '1436px',
      // => @media (min-width: 1436px) { ... }

      'xxxl': '1596px',
      // => @media (min-width: 1596px) { ... }

      '4xl': '1724px',
      // => @media (min-width: 1596px) { ... }
    },
    extend: {},
  },
  plugins: [],
}