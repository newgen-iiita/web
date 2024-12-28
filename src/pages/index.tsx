import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ResponsiveAppBar from "@/components/appbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <ResponsiveAppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}></ResponsiveAppBar>
    </>
    );
}
