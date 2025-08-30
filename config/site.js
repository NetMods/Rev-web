const site_url = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const socialLinks = {
  twitter: "",
  github: "",
  linkedin: "",
  email: "mailto:netmods.ltd@gmail.com",
};

export const siteConfig = {
  title: "Rev | Demo screen recorder",
  name: "Rev",
  baseUrl: site_url,
  description: "About our screen recorder",
  links: { ...socialLinks },
  mailSupport: "netmods.ltd@gmail.com",
};
