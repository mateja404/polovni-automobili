import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polovni Automobili | Prijava",
  description: "Polovni Automobili - prijavite se na Vaš nalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        {children}
    </>
  );
}