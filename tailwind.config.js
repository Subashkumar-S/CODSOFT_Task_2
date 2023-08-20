/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      'primary-black' : "#020617",
      'active-black' : "#09090b",
      'primary-white' : "#f1faee",
      'active-white' : "#ffffff",
      'pink': "#be185d",
      'blue': "#4338ca",
    },
    extend: {
      boxShadow: {
        'md': '0 2px 5px 1px rgba(0, 0, 0, 0.3)',
      },
      screens : {
        'sm' : '365px',
        'md' : '768px',
        'lg' : '1024px',
      },
    },
  },
  plugins: [],
}

