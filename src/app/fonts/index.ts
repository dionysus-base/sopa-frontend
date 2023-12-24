import { Rubik, Noto_Serif_Lao } from "next/font/google";

export const rubik = Rubik({
  weight: ["400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-rubik",
});

export const notoSerifLao = Noto_Serif_Lao({
  display: "swap",
  weight: "700",
  subsets: ["latin"],
  variable: "--font-noto-serif-lao",
});
