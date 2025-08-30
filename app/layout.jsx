import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { fontCursive, fontSans, fontSerif } from "./fonts";

export const metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: siteConfig.title,
    template: `%s`,
  },
  description: siteConfig.description,
  openGraph: {
    images: "/og?title=Rev",
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  keywords: ["Screen recorder", "Annotation", "Screenshot"],
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
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        fontSans.variable,
        fontSerif.variable,
        fontCursive.variable,
      )}
    >
      <body
        className={cn(
          `bg-background text-foreground relative h-screen overflow-x-hidden antialiased`,
          process.env.NODE_ENV === "development" && "debug-screens",
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="font-sans">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
