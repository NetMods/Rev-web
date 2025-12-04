import "@/styles/globals.css";
import "@/styles/fonts.css";

import { LoadingProvider } from "@/contexts/loading";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { fontCursive } from "./fonts";

export const metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s`,
  },
  description: siteConfig.description,
  openGraph: {
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Revord - Screen Recorder and Screenshot Tool",
      },
    ],
    title: siteConfig.title,
    description:
      "Revord, the ultimate all-in-one screen recording, screenshot, and annotation tool.",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description:
      "Revord - The all-in-one screen recorder, screenshot, and annotation tool.",
    images: ["/og.png"],
    site: "",
    creator: "",
  },
  keywords: [
    "screen record",
    "screen recorder",
    "screen recorder laptop",
    "screen recording",
    "best screen recorder",
    "free screen recorder",
    "pc screen recorder",
    "window screen recorder",
    "record video",
    "video recorder",
    "video screen recorder",
    "screen recorder download",
    "window 10 screen recorder",
    "window 11 screen recorder",
    "4k screen recorder",
    "best screen recorder app",
    "screen recorder for pc",
    "screen recorder for macos",
    "screen recorder for windows",
    "screen recorder for linux",
    "Screen capture",
    "Screenshot tool",
    "screenshot",
    "long screenshot",
    "mac screenshot",
    "screenshot in windows",
    "take screenshot",
    "how to take screenshot in ipad",
    "how to take screenshot in chrome",
    "how to take screenshot in ubuntu",
    "how to take screenshot in laptop",
    "how to screenshot",
    "how to take screenshot",
    "how to take annotate in zoom",
    "annotation",
    "annotate",
    "annotated",
    "video annotation",
    "annotate image",
    "annotations",
    "annotate app",
    "what is annotation",
    "Video editing",
    "Screen recording software",
  ],
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
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  other: {
    "apple-mobile-web-app-title": "Revord",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(fontCursive.variable)}
    >
      <body
        className={cn(
          `relative h-screen overflow-x-hidden antialiased`,
          process.env.NODE_ENV === "development" && "debug-screens",
        )}
      >
        <LoadingProvider>
          <main>{children}</main>
        </LoadingProvider>
      </body>
    </html>
  );
}
