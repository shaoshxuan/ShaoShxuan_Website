import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { MainLayout } from "@/components/mainLayout/MainLayout";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shao Shxuan's Portfolio Website",
  description: "Shao Shxuan's Portfolio Website",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
