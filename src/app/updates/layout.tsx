import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Updates & News - Konga Communications",
  description:
    "Latest news and updates from Konga Communications. Stay informed about new shows, events, and announcements.",
  alternates: {
    canonical: "https://kongacommunications.com/updates",
  },
};

export default function UpdatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
