/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'pp-background': '#F7F8FC',
        'pp-sidebar': '#363740',
        'pp-sidebar-active': '#464750',
        'pp-header': '#002545',
        'pp-input': '#FCFDFE',
      },
      textColor: {
        // 'pp-gray': '#6A6A65',
        'pp-gray': '#9FA2B4',
        'pp-sidebar': '#DDE2FF',
        'pp-input': '#4B506D',
      },
      fontFamily: {
        nunito: 'Nunito',
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
}
