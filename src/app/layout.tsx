import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dalaman VIP Transfer",
  description: "Premium airport transfers in Dalaman",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
