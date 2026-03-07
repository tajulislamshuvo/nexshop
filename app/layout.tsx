import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: {
    template: "%s - Nexshop online store",
    default:"Nexshop online store"
  },
  description: "Shop the latest products at NexShop! Explore electronics, fashion, home essentials, and more with fast delivery, secure checkout, and amazing deals. Your one-stop online shopping destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-poppins antialiased"
      >
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
