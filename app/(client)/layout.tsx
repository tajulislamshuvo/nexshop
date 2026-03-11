import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";


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
    <ClerkProvider>
        <div className="flex flex-col min-h-screen">
          <Header></Header>
        <main className="flex-1 ">
          {children}
        </main>
        
        <Footer></Footer>
        </div>
    </ClerkProvider>
  );
}
