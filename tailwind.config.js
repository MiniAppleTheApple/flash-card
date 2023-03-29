/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ["'Roboto'", "sans"],
        'mono': ["Jetbrains Mono", "monospace"],
        'display': ["Oswald"]
      },
      colors: {
        'secondary': {
          '50': '#fff4f9', 
          '100': '#fee9f3', 
          '200': '#fdc9e1', 
          '300': '#fca8ce', 
          '400': '#f966aa', 
          '500': '#F72585', 
          '600': '#de2178', 
          '700': '#b91c64', 
          '800': '#941650', 
          '900': '#791241'
        },'canary': {
            '50': '#fefff7', 
            '100': '#fdfff0', 
            '200': '#faffd9', 
            '300': '#f6ffc2', 
            '400': '#f0ff94', 
            '500': '#E9FF66', 
            '600': '#d2e65c', 
            '700': '#afbf4d', 
            '800': '#8c993d',
            '900': '#727d32'
        },'primary': {
          '50': '#f6f6ff', 
          '100': '#edeeff', 
          '200': '#d2d4ff', 
          '300': '#b7baff', 
          '400': '#8186ff', 
          '500': '#4B52FF', 
          '600': '#444ae6', 
          '700': '#383ebf', 
          '800': '#2d3199', 
          '900': '#25287d'
        },'stratos': {
          '50': '#f3f3f6', 
          '100': '#e6e6ec', 
          '200': '#c1c1d0', 
          '300': '#9c9cb3', 
          '400': '#52527a', 
          '500': '#080841', 
          '600': '#07073b', 
          '700': '#060631', 
          '800': '#050527', 
          '900': '#040420'
        },'screamin-green': {
          '50': '#f8fff8', 
          '100': '#f2fff1', 
          '200': '#deffdb', 
          '300': '#caffc5', 
          '400': '#a3ff9a', 
          '500': '#7BFF6F', 
          '600': '#6fe664', 
          '700': '#5cbf53', 
          '800': '#4a9943', 
          '900': '#3c7d36'
        }
      }
    },
  },
  plugins: [],
}

