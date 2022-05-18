module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif'],
        'sacramento': ['Sacramento', 'cursive'],
        'quicksand': ['Quicksand', 'sans-serif']
      },
      colors: {
        'primary-white': '#f5f5f5',
        'primary-black': '#111111',
        'ash': '#73777f'
      },
      height: {
        '85vh': '85vh'
      },
      width: {
        '6p': '6%'
      }
    },
  },
  plugins: [],
}
