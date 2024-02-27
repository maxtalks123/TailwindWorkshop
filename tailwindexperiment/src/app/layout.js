import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js example site",
  description: "A simple site built with Next.js",
  openGraph: {
    title: "Next.js example site",
    description: "A simple site build with Next.js",
    type: "website",
    url: "http://localhost:3000/",
    image: "http://localhost:3000/image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <h1 className="bg-red-500 text-center flex">
          I&apos;m red and centered
        </h1>
        {children}
      </body>
    </html>
  );
}
