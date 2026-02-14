import type { Metadata } from "next";
import "./globals.css";
//components local imports
import Header from "./_components/Header";
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
      </body>
    </html>
  );
}
