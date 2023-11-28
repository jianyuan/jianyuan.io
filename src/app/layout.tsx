import "./globals.css";

import localFont from "next/font/local";

import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/ga";
import { Header } from "@/components/header";
import { Providers } from "@/components/providers";
import { cn } from "@/utils/cn";

const monaSans = localFont({
  src: "../fonts/Mona-Sans.woff2",
  display: "swap",
  variable: "--font-mona-sans",
});

export const metadata = {
  title: "Jian Yuan Lee",
  description: "Jian Yuan Lee's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          monaSans.variable,
          "font-sans flex h-full flex-col bg-zinc-50 dark:bg-black"
        )}
      >
        <Providers>
          <div className="fixed inset-0 flex justify-center sm:px-8">
            <div className="flex w-full max-w-7xl lg:px-8">
              <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
            </div>
          </div>
          <div className="relative">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>

        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics
            measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
        )}
      </body>
    </html>
  );
}
