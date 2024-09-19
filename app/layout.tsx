import { GeistSans } from 'geist/font/sans';
import type { Metadata } from "next";
import "./globals.css";
// import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: "Personal Site - Luke Davies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
