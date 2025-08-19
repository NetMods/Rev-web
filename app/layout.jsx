import "@/styles/globals.css"
import { fontSans, fontSerif } from "./fonts";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "next-themes";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

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
  keywords: ["Screen recorder", "Annotation"],
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
      )}
    >
      <body className="relative overflow-x-hidden bg-background text-foreground antialiased debug-screens">
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
