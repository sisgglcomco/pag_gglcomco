import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display-loaded",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body-loaded",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.nombre,
    template: `%s | ${site.nombre}`,
  },
  description: site.descripcion,
  openGraph: {
    title: site.nombre,
    description: site.descripcion,
    url: site.url,
    siteName: site.nombre,
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
