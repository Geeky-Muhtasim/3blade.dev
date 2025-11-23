import type { Metadata } from "next";
import { Inter, Rajdhani } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { ThemeProvider } from "@/components/ThemeProvider";
import LoaderWrapper from "@/components/LoaderWrapper";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rajdhani",
});

export const metadata: Metadata = {
  title: "Muhtasim Ibteda Shochcho | NLP Researcher & AI Engineer",
  description: "AI-enabled Software Engineer seeking PhD in NLP, Language Modeling, Mechanistic Interpretability & AI Security.",
  keywords: ["NLP", "AI", "Machine Learning", "Researcher", "Portfolio", "Muhtasim Ibteda Shochcho"],
  icons: {
    icon: "/battle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${rajdhani.variable} ${inter.variable}`} suppressHydrationWarning>
      <body
        className="font-sans bg-background text-foreground antialiased selection:bg-zoro-green-500/30 selection:text-zoro-green-400 transition-colors duration-300"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LoaderWrapper>
            <ScrollProgress />
            <Navbar />
            <main className="min-h-screen flex flex-col">
              {children}
            </main>
            <Footer />
          </LoaderWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
