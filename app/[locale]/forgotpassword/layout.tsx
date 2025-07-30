import type { Metadata } from "next";

// Define the correct props type for your generateMetadata function
type Props = {
  params: Promise<{ locale: string }>; // <-- This is now a Promise
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await the params promise to get the actual parameters
  const { locale } = await params; // <-- Use await here

  const translations: Record<string, string> = {
    en: "Forgot Password",
    rs: "Zaboravljena lozinka",
  };

  const title = translations[locale] || "Forgot Password";

  return { title };
}

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
    </>
  )
}