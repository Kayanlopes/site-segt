import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SEGT — Segurança do Trabalho",
  description:
    "Assessoria especializada para ajudar as empresas a desenvolver programas eficazes de prevenção de acidentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full antialiased`}>
      <body className="relative min-h-full flex flex-col text-text overflow-x-hidden">
        {/* Bg global do site — absoluto, acompanha o scroll */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            pointerEvents: "none",
            backgroundImage: "url('/BG.svg')",
            backgroundSize: "100% auto",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative flex flex-col min-h-full" style={{ zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
