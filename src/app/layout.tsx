import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rajesh Ojha — Senior Software Engineer",
  description:
    "Building scalable backend services, engineering platforms & AI-powered applications. 12+ years of experience across enterprise teams.",
  openGraph: {
    title: "Rajesh Ojha — Senior Software Engineer",
    description:
      "Building scalable backend services, engineering platforms & AI-powered applications.",
    url: "https://rajeshojha.in",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
