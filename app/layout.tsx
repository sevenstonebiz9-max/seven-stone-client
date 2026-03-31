import type { Metadata } from "next";
import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalyticsProps";

const nunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunitoSans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sevenstone.co.ke"),

  title: {
    default: "Sevenstone Ltd | Investment & SME Funding in Kenya",
    template: "%s | Sevenstone Ltd",
  },

  alternates: {
    canonical: "https://sevenstone.co.ke",
  },

  description:
    "Sevenstone Investment Management Limited empowers SMEs, women, and youth-led businesses through enterprise development and capital facilitation in Kenya.",

  keywords: [
    "Investment firm Kenya",
    "SME funding Kenya",
    "enterprise development Kenya",
    "capital facilitation Africa",
    "Sevenstone Ltd",
  ],

  authors: [{ name: "Sevenstone Ltd" }],
  creator: "Sevenstone Ltd",
  publisher: "Sevenstone Ltd",

  openGraph: {
    title: "Sevenstone Ltd",
    description:
      "Empowering SMEs, women, and youth-led businesses through investment and enterprise development.",
    url: "https://sevenstone.co.ke",
    siteName: "Sevenstone Ltd",
    images: ["/og-image.png"],
    locale: "en_KE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sevenstone Ltd",
    description:
      "Empowering SMEs, women, and youth-led businesses.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="5kuX76rptH9u3zKgCK3cgLgp16_f-ImKQ1ThjMois00"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sevenstone Ltd",
              url: "https://sevenstone.co.ke",
              logo: "https://sevenstone.co.ke/og-image.png",
              sameAs: [
                "https://www.linkedin.com/company/sevenstone-investments-management-limited/",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${nunitoSans.variable} antialiased`}
      >
      {/* Google Analytics - */}
      {process.env.NODE_ENV === 'production' && gaId && (
        <GoogleAnalytics gaId={gaId} />
      )}
      {children}
      </body>
    </html>
  );
}
