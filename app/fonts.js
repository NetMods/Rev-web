import {
  Corinthia as FontCursive,
  Onest as FontSans,
  Instrument_Serif as FontSerif,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const fontCursive = FontCursive({
  subsets: ["latin"],
  variable: "--font-cursive",
  weight: ["400", "700"],
});
