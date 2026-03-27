import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunitoSans",
});

// export const metadata: Metadata = {
//   title: "Sevenstone Ltd",
//   description: "Sevenstone Investment Management Limited was founded in 2017 as an enterprise development and capital facilitation firm committed to empowering SMEs, Women and Youth-Led businesses.",
//     icons: {
//     icon: [
//       { url: "/favicon.ico" },
//       { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
//       { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
//     ],
//     apple: [{ url: "/apple-touch-icon.png" }],
//   },
// };
export const metadata: Metadata = {
  title: "Sevenstone Ltd",
  description:
    "Sevenstone Investment Management Limited was founded in 2017 as an enterprise development and capital facilitation firm committed to empowering SMEs, Women and Youth-Led businesses.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  openGraph: {
    title: "Sevenstone Ltd",
    description:
      "Enterprise development and capital facilitation firm empowering SMEs, women and youth-led businesses.",
    url: "https://sevenstone.co.ke",
    siteName: "Sevenstone Ltd",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Sevenstone Ltd",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sevenstone Ltd",
    description:
      "Enterprise development and capital facilitation firm empowering SMEs, women and youth-led businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
      {children}
      </body>
    </html>
  );
}
