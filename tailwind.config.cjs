/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'pp-background': '#F7F8FC',
        'pp-sidebar': '#363740',
        'pp-header': '#002545',
        'pp-input': '#F0F1F7',
      },
      textColor: {
        'pp-gray': '#6A6A65',
        'pp-lightgray': '#9FA2B4',
        'pp-sidebar': '#DDE2FF',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
