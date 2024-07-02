import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:"Create next app",
  description:"dashboard",
  manifest:'/manifest.json'
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      
      <meta name="application-name" content="PWA App" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-title" content="PWA App" />
<meta name="description" content="Best PWA App in the world" />
<meta name="format-detection" content="telephone=no" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="msapplication-config" content="/icons/browserconfig.xml" />
<meta name="msapplication-TileColor" content="#2B5797" />
<meta name="msapplication-tap-highlight" content="no" />
<meta name="theme-color" content="#000000" />
<body className={`${inter.className} antialiased`}>{children}</body>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
