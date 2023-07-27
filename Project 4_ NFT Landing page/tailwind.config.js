/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {


    fontFamily: {
      'play': ['Play',],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans']
    },
    extend: {
      backgroundImage: {
        'backround': [' radial-gradient( ellipse at top left, #d400f0  10% ,#6b02ff 25% ,#20003a 50%);'],
      },
      colors: {
        'darkblue': ' #160e2a',
      },

    }

  },
  plugins: [],
}

