import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import { Aside } from "./components/Aside";

export const metadata: Metadata = {
  title: "Code conect",
  description: "Rede social para devs",
};

const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={prompt.className} suppressHydrationWarning={true}>
        <div className="my-14 w-75 flex gap-7">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
