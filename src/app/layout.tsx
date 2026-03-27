import { poppins, leckerli } from "./fonts";
import type { Metadata } from "next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import "./globals.css";

export const metadata: Metadata = {
	title: "Julie Deshayes - Portfolio",
	description: "Portfolio de Julie Deshayes, développeuse Web",
	openGraph: {
    title: 'Julie - Développeuse Web',
    description: 'Portfolio de Julie, développeuse Web',
    url: 'https://portfolio-julie-deshayes.vercel.app/',
    siteName: 'Portfolio Julie',
    images: [
      {
        url: 'https://portfolio-julie-deshayes.vercel.app/images/photo-profil.webp',
        width: 1200,
        height: 630,
        alt: 'Photo de Julie',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Julie - Développeuse Web',
    description: 'Portfolio de Julie, développeuse Web',
    images: ['https://portfolio-julie-deshayes.vercel.app/images/photo-profil.webp'],
  },
   robots: {
    index: true,
    follow: true,
   },
   verification: {
    google: "D4zK8-fWy1w4XGHaw62ooBSXmFYgwVqLoZcQ2nSB93w",
   },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr" className={`${poppins.variable} ${leckerli.variable}`}>
			<body>
				<TranslationProvider>
					<Nav />
					{children}
					<Footer />
				</TranslationProvider>
			</body>
		</html>
	);
}
