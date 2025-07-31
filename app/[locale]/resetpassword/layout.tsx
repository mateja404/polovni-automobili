import type { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const translations: Record<string, string> = {
    en: "Reset Password",
    rs: "Resetovanje lozinke",
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