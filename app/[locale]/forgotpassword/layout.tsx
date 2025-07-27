import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;

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