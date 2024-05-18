import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Anidey: Watch Ad-free Anime Online",
  description:
    "Stream ad-free anime online. Supports a high quality player for enhanced experience.",
  category: "anime",
  creator: "Dey",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark flex min-h-dvh  flex-col ">
        <SessionProvider>
          <div className="px-5 md:px-10">
            <Suspense>
              <Header />
            </Suspense>
          </div>
          <div
            className={`flex-1 ${inter.className} max-w-[1350px] lg:mx-auto`}
          >
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
