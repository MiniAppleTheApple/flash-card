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
        'timberwolf': {
            '50': '#fdfdfd', 
            '100': '#fbfbfa', 
            '200': '#f6f5f3', 
            '300': '#f0efeb', 
            '400': '#e5e3dc', 
            '500': '#DAD7CD', 
            '600': '#c4c2b9', 
            '700': '#a4a19a', 
            '800': '#83817b', 
            '900': '#6b6964'
        },'swamp-green': {
            '50': '#fafbf9', 
            '100': '#f6f7f3', 
            '200': '#e8ece2', 
            '300': '#dae0d0', 
            '400': '#bfc8ad', 
            '500': '#A3B18A', 
            '600': '#939f7c', 
            '700': '#7a8568', 
            '800': '#626a53', 
            '900': '#505744'
        },'glade-green': {
            '50': '#f7f9f7', 
            '100': '#eef2ee', 
            '200': '#d5e0d5', 
            '300': '#bccdbc', 
            '400': '#8aa789', 
            '500': '#588157', 
            '600': '#4f744e', 
            '700': '#426141', 
            '800': '#354d34', 
            '900': '#2b3f2b'
        },'tom-thumb': {
            '50': '#f5f7f5', 
            '100': '#ebefec', 
            '200': '#ced6cf', 
            '300': '#b0bdb3', 
            '400': '#758c79', 
            '500': '#3A5A40', 
            '600': '#34513a', 
            '700': '#2c4430', 
            '800': '#233626', 
            '900': '#1c2c1f'
        },'lunar-green': {
            '50': '#f5f6f6', 
            '100': '#ebedec', 
            '200': '#ccd3d0', 
            '300': '#aeb8b3', 
            '400': '#71837a', 
            '500': '#344E41', 
            '600': '#2f463b', 
            '700': '#273b31', 
            '800': '#1f2f27', 
            '900': '#192620'
        }
      }
    },
  },
  plugins: [],
}

