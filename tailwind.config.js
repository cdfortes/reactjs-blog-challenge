/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'brand': '#3294F8',
      'base':{
        'title': '#E7EDF4',
        'subtitle': '#C4D4E3',
        'text': '#AFC2D4',
        'span': '#7B96B2',
        'label': '#3A536B',
        'border': '#1C2F41',
        'post': '#112131',
        'profile': '#0B1B2B',
        'bg': '#071422',
        'input': '#040F1A',
      }
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'cover': "url('/assets/cover.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

