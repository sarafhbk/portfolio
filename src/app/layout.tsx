import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";
import CursorGlow from "@/components/CursorGlow";
import Navigation from "@/components/Navigation";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sarafathulla.dev"),
  title: {
    default: "Sarafathulla S — Lead Frontend Developer",
    template: "%s | Sarafathulla S",
  },
  description:
    "Lead Frontend Developer with 6+ years building scalable web and mobile applications using React.js, Next.js, and React Native. Based in Palani, India.",
  keywords: [
    "Frontend Developer",
    "React.js",
    "Next.js",
    "React Native",
    "TypeScript",
    "Lead Engineer",
    "UI/UX",
    "Software Engineer",
    "Sarafathulla",
  ],
  authors: [{ name: "Sarafathulla S", url: "https://sarafathulla.dev" }],
  creator: "Sarafathulla S",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarafathulla.dev",
    siteName: "Sarafathulla S — Portfolio",
    title: "Sarafathulla S — Lead Frontend Developer",
    description:
      "Lead Frontend Developer with 6+ years building scalable web and mobile applications.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sarafathulla S — Lead Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarafathulla S — Lead Frontend Developer",
    description:
      "Lead Frontend Developer with 6+ years building scalable web and mobile applications.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmMono.variable} ${dmSans.variable}`}
    >
      <body className="bg-bg text-text-primary font-sans antialiased">
        <SmoothScroll />
        <GrainOverlay />
        <CursorGlow />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
