import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/client-layout";

export const metadata: Metadata = {
  title: "TransitPrime | Statewide Transit Continuity & Gap Analysis",
  description: "Enterprise SaaS for transit network optimization, AI-powered gap analysis, and statewide continuity mapping.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full font-sans bg-background text-foreground selection:bg-blue-100 selection:text-blue-900">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
