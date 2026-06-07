import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme";

export const metadata: Metadata = {
  title: "Bhagavad Gita - Divine Wisdom in Sanskrit, English & Telugu",
  description:
    "Explore all 700 verses of the Bhagavad Gita with Sanskrit text, simplified English translations, conversational Telugu explanations, pronunciation guides, and YouTube video links.",
  keywords: [
    "Bhagavad Gita",
    "Sanskrit",
    "Telugu",
    "Hindu scripture",
    "Krishna",
    "Arjuna",
    "spiritual wisdom",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
