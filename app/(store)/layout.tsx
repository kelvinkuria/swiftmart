import type { Metadata } from "next";

import "../globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "SwiftMart",
  description: "Shop with us!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

   <ClerkProvider>
    <html lang="en">
      <body
      
      >
        <Header />
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}