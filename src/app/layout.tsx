import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yu-Yuan Chang - Software Engineer & AI/ML Research Scientist",
  description: "Experienced Software Engineer specializing in AI/ML systems, distributed computing, and full-stack development. MS Computer Science @ NYU, with industry experience at leading tech companies.",
  keywords: [
    "Yu-Yuan Chang",
    "Lawrence Chang", 
    "Software Engineer",
    "AI/ML Engineer",
    "Machine Learning",
    "Full Stack Developer",
    "Python",
    "TypeScript",
    "React",
    "AWS",
    "NYU",
    "UCLA",
    "Computer Science"
  ],
  authors: [{ name: "Yu-Yuan Chang" }],
  creator: "Yu-Yuan Chang",
  openGraph: {
    title: "Yu-Yuan Chang - Software Engineer & AI/ML Research Scientist",
    description: "Experienced Software Engineer specializing in AI/ML systems, distributed computing, and full-stack development.",
    url: "https://yuyuan-chang.dev",
    siteName: "Yu-Yuan Chang Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yu-Yuan Chang - Software Engineer & AI/ML Research Scientist", 
    description: "Experienced Software Engineer specializing in AI/ML systems, distributed computing, and full-stack development.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yu-Yuan Chang",
    "alternateName": "Lawrence Chang",
    "jobTitle": "Software Engineer",
    "description": "Software Engineer & AI/ML Research Scientist specializing in distributed systems, machine learning infrastructure, and intelligent applications.",
    "url": "https://yuyuan-chang.dev",
    "sameAs": [
      "https://linkedin.com/in/yuan-lawrence-chang-157a27171",
      "https://github.com/YuYuan-Chang"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "New York University",
        "url": "https://www.nyu.edu"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "University of California, Los Angeles",
        "url": "https://www.ucla.edu"
      }
    ],
    "knowsAbout": [
      "Software Engineering",
      "Artificial Intelligence",
      "Machine Learning",
      "Python",
      "TypeScript",
      "React",
      "AWS",
      "Distributed Systems"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
