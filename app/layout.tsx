import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      textPrimary: string;
      accent: string;
      primary: string,
      secondaryAccent: string,
      textLight: string,
      rawIndigo: string,
      rawTurquoise: string,
      rawPurple: string,
      rawAliceBlue: string,
      rawDarkText: string,
      rawWhiteText: string,
      rawMediumslateBlue: string,
      onlyWhiteText: string,
      onlybBlackText: string,
      onlyWhiteBg: string,
      onlyBlackBg: string,

    };
    fonts: {
      primary: string;
    };
    spacing: {
      md: string;
      sm: string;
      lg: string;
      xl: string;
      xxl: string;

    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };

  }
}
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
