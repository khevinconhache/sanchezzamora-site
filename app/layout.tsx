import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { FIRM } from "@/lib/constants";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: FIRM.title,
  description: FIRM.description,
  metadataBase: new URL(FIRM.url),
  openGraph: {
    title: FIRM.title,
    description: FIRM.description,
    url: FIRM.url,
    siteName: FIRM.name,
    locale: FIRM.locale,
    type: "website",
    images: [
      {
        url: "/images/logo-gc.png",
        width: 512,
        height: 512,
        alt: "Corporación GC — Abogados · Derecho Público",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: FIRM.title,
    description: FIRM.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
  other: {
    "theme-color": "#6B1D3A",
    "apple-mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light")return;document.documentElement.classList.add("dark")}catch(e){document.documentElement.classList.add("dark")}})()`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
