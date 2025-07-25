import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const lufga = localFont({
  src: [
    {
      path: "../public/font/LufgaThin.ttf",
      weight: "100",
      style: "normal",
    },
    { path: "../public/font/LufgaRegular.ttf", weight: "400", style: "normal" },
    {
      path: "../public/font/LufgaMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/LufgaSemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/font/LufgaBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lufga",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lufga.variable}`}>
      <body className={lufga.className}>{children}</body>
    </html>
  );
}
