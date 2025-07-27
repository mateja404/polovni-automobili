import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;

  const translations: Record<string, string> = {
    en: "Reset Password",
    rs: "Resetuj lozinku",
  };

  const title = translations[locale] || "Reset Password";

  return { title };
}

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        {children}
    </>
  )
}