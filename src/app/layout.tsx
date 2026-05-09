import { Inter, Playfair_Display, DM_Serif_Display, Nunito, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dm-serif" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-bebas" });

export const metadata = {
  title: "HatchNest | Premium Egg Incubation Equipment",
  description: "Hatch More. Lose Less. Earn More. India's #1 destination for egg hatching machines.",
};

import { ToastProvider } from "@/components/Toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${dmSerif.variable} ${nunito.variable} ${bebas.variable} font-body antialiased`}
      >
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
