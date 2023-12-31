import "@/assets/styles/globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components";
import classes from "./page.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generate translation",
  description: "Generate translation json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={classes.pageWrapper}>
          <Header />
          <main className={classes.pageContent}>{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
