import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          info: '#3CCEFF',
          primary: '#3CCEFF',
          'primary-focus': '#26A1D6',
          'primary-hover': '#26A1D6',
          'primary-content': '#1d232a',
        },
      },
    ],
  },
};
export default config;
