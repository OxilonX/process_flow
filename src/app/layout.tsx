import type { Metadata } from "next";
import "./globals.css";
//components local imports
import Header from "./_components/Header";
import Footer from "./_components/Footer";
export const metadata: Metadata = {
  title: "Process Flow",
  description: "Processes scheduling simulation app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
