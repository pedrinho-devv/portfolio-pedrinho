import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Augusto | Desenvolvedor Front-End",
  description: "Portfólio de Pedro Augusto, Desenvolvedor Front-End especializado em criar interfaces responsivas e otimizar experiências de usuário. Conheça meus projetos e habilidades.",
  keywords: "Desenvolvedor Front-End, Pedro Augusto, React, JavaScript, Web Design, UX/UI, Next.js, HTML, CSS, Desenvolvimento Web",
  authors: [{ name: "Pedro Augusto" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Pedro Augusto | Desenvolvedor Front-End",
    description: "Portfólio de Pedro Augusto, Desenvolvedor Front-End especializado em criar interfaces responsivas e otimizar experiências de usuário. Conheça meus projetos e habilidades.",
    url: "https://www.seusite.com",  // Altere para o seu URL
    images: ["https://www.seusite.com/og-image.jpg"],  // Coloque o link da imagem para a preview do Open Graph
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Augusto | Desenvolvedor Front-End",
    description: "Portfólio de Pedro Augusto, Desenvolvedor Front-End especializado em criar interfaces responsivas e otimizar experiências de usuário. Conheça meus projetos e habilidades.",
    images: ["https://www.seusite.com/og-image.jpg"],  // Coloque o link da imagem para a preview do Twitter
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Outros meta tags e links podem ser adicionados aqui */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
