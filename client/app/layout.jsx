import { Bricolage_Grotesque, Chivo_Mono, Sora } from "next/font/google";
import { Toaster } from "sonner";
import Background from "../components/Background";
import CursorScroll from "../components/CursorScroll";
import TopNav from "../components/TopNav";
import "../styles/globals.css";

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
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Background />
        <CursorScroll />
        <TopNav />
        <div className="app">{children}</div>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
