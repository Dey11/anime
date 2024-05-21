import type { Metadata } from "next";
import { Inter, Acme } from "next/font/google";
import "./globals.css";
import Header from "@/app/header";
import Footer from "@/app/footer";
import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "@/components/ui/toaster";
const inter = Inter({ subsets: ["latin"] });
const acme = Acme({ weight: "400", subsets: ["latin"] });
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
      <body
        className={`${acme.className} dark flex min-h-dvh flex-col tracking-wide [word-spacing:3px]`}
      >
        <SessionProvider>
          <div className=" sticky top-0 z-50 mx-auto w-full max-w-screen-2xl rounded-b-md bg-black px-10">
            <Suspense>
              <Header />
            </Suspense>
          </div>
          <div className={`max-w-[1350px] flex-1 px-4 lg:mx-auto`}>
            {children}
          </div>
          <Toaster />
          <Analytics />
          <SpeedInsights />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
