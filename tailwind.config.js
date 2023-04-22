/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				"higlight-1": "var(--color-highlight-1)",
				item: "rgb(45 50 90)",
				money: "hsl(74.66666666666667, 100%, 60%)",
				money2: "rgb(210 143 214)",
				summary: "rgb(255 177 63)",
			},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
