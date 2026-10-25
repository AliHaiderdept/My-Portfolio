import { Bricolage_Grotesque, Chivo_Mono, Sora, Geist } from "next/font/google";
import { Toaster } from "sonner";
import "../styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { GeistPixelSquare } from "geist/font/pixel";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Background3D from "@/components/Background3D";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = Sora({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const mono = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata = {
  title: "Ali Haider | Full-Stack Developer",
  description:
    "Interactive 3D portfolio of Ali Haider — BSCS student and full-stack developer from Lahore, Pakistan.",
  icons: { icon: "/logo/purplish cat logo.jpg" },
  openGraph: {
    title: "Ali Haider | Full-Stack Developer",
    description: "Interactive 3D portfolio of Ali Haider — full-stack developer from Lahore, Pakistan.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Haider | Full-Stack Developer",
    description: "Interactive 3D portfolio of Ali Haider — full-stack developer from Lahore, Pakistan."
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08060d"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn(display.variable, body.variable, mono.variable, GeistPixelSquare.variable, GeistSans.variable, GeistMono.variable, "font-sans", geist.variable)}>
      <body >
        <Preloader/>
        <Navbar />
        <div className="app ">{children}</div>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
