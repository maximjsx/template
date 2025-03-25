import "@/styles/globals.css";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";


import { DiscordIcon } from "@/components/icons";

export const metadata = {
  title: "Template",
  description:
    "A powerful starter template combining NextJS, HeroUI, Shadcn, and Aceternity UI. Designed for modern (& fancy) web development.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col">
            <Navbar />
            <main className="container mx-auto max-w-7xl px-1 flex-grow pt-16">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center py-3 gap-2">
              <div className="flex items-center gap-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://github.com/maximjsx/template">
                  <span className="text-default-600">GitHub Repository</span>
                </Link>
                <span className="text-default-400">|</span>
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href="https://dsc.gg/maximjsx">
                  <DiscordIcon className="h-4 w-4" />
                  <span className="text-default-600">Join our Discord</span>
                </Link>
              </div>
              <div className="text-default-500 text-sm">
                © {new Date().getFullYear()} Maxim.jsx
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
