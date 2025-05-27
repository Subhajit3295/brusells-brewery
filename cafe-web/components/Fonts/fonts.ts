import { Playfair_Display, Merriweather } from "next/font/google";


export const playfairDisplay = Playfair_Display({
  weight: '400',
});

export const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
});