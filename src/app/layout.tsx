import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Timesheet Tracking",
  description: "Created for a client",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode
}>

const RootLayout = ({ children }: RootLayoutProps) =>{
  
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


export default RootLayout