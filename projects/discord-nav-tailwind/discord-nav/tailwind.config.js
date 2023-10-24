/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'discord-primary': '#36393F',
        'discord-sec': '#313338',
        'discord-line':'linear-gradient(#36393f, #2f3136)',
      },
      backgroundImage: {
        'discord-line': 'linear-gradient(#36393f, #2f3136)',
      }
    },
  },
  plugins: [],
}

