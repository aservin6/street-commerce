import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import CartProvider from "./components/Providers";
import ShoppingCartSheet from "./components/ShoppingCartSheet";
import "./globals.css";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/NimbusSanL-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NimbusSanL-Regu.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-nimbus",
});

export const metadata: Metadata = {
  title: "Street Commerce",
  description:
    "E-commerce web app using Next.js, Sanity, Stripe, Typescript, and TailwindCSS",
  icons: { icon: "./icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${myFont.className} overflow-x-hidden bg-stone-100 text-sm text-stone-800 md:text-base`}
        suppressHydrationWarning
      >
        <CartProvider>
          <Navbar />
          <main className="mx-auto w-full max-w-5xl p-2 md:my-10 md:w-4/5 xl:w-full">
            {children}
          </main>
          <ShoppingCartSheet />
        </CartProvider>
      </body>
    </html>
  );
}
