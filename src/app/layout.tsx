import getCategories from "@/actions/get-categories";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import ModalProvider from "../providers/modal-provider";
import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store description",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar categories={categories} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
