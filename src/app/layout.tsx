import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Portfolio Ronan Vallée | Développeur Mobile & Web",
  description: "Portfolio de Ronan Vallée, développeur mobile Flutter et web React/Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
