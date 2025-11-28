import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ChatWidget } from "@/components/widget/ChatWidget";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Haleem Mamangcao | Full-stack Developer",
  description:
    "I'm Abdul Haleem Mamangcao, an enthusiastic Junior Full-Stack Web Developer with hands-on experience building web applications using Laravel, React, Tailwind CSS, and MySQL. Passionate about improving my skills in both front-end and back-end development.",
  verification: {
    google: "DMuiibTrOHrdXquYlhGua985rxAbyiLL3MYi69Rnf3c",
  },
  keywords: [
    "Abdul Haleem Mamangcao",
    "Full-stack Developer",
    "Laravel Developer",
    "React Developer",
    "Tailwind CSS",
    "Web Developer Philippines",
    "Portfolio Website",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
  ],
  authors: [
    { name: "Abdul Haleem Mamangcao", url: "https://mamangcao.vercel.app" },
  ],
  creator: "Abdul Haleem Mamangcao",
  publisher: "Abdul Haleem Mamangcao",
  icons: {
    icon: [
      { url: "/icon.ico" },
      { url: "/profile.png", sizes: "192x192", type: "image/png" },
      { url: "/profile.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/profile.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
          <ChatWidget />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}