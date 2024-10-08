import type { Metadata } from "next";
import { Red_Hat_Text } from "next/font/google";
import "./globals.css";

const inter = Red_Hat_Text({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Count down Website",
  description: "Count down created with tailwind and nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-t from-[#241C2B] via-[#211D2B] to-[#1E1E28]"
    >
      <body className={inter.className}>
        <link rel="icon" href="/images/favicon-32x32.png" sizes="any" />
        <div className="">{children}</div>
      </body>
    </html>
  );
}

