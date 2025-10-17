const site_url = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const socialLinks = {
  twitter: "",
  github: "",
  email: "mailto:support@revord.org",
};

export const siteConfig = {
  title: "Revord - All-in-One Tool",
  name: "Revord",
  baseUrl: site_url,
  description:
    "Revord is an all-in-one screen recording and screenshot tool with annotation, editing, and sharing capabilities. Perfect for creating tutorials, demos, and presentations effortlessly.",
  links: { ...socialLinks },
  mailSupport: "support@revord.org",
};
