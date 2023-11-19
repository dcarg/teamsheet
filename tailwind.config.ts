import type { Config } from 'tailwindcss'

const maxScreenWidth = '1024px'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideFromTop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        slideFromTop: 'slideFromTop 0.5s linear 0s 1',
      },
      height: {
        topBarHeight: '85px',
      },
      maxWidth: {
        column: maxScreenWidth,
      },
      width: {
        fillColumn: maxScreenWidth,
      },
    },
  },
  plugins: [],
}
export default config
