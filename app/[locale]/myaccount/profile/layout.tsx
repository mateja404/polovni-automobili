import type { Metadata } from "next";

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const translations: Record<string, string> = {
        en: "My account",
        rs: "Moj nalog",
    };

    const translationsDesc: Record<string, string> = {
        en: "Manage your account - create and delete your ads",
        rs: "Kontroliši svoj nalog - kreiraj i briši svoje oglase",
    };

    const title = translations[locale] || "My account";
    const description = translationsDesc[locale] || "My account";

    return { title, description };
}

export default function GeneralSettingsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}