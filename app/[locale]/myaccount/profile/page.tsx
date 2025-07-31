import React from 'react';
import { getLocale } from "next-intl/server";
import ProfilePage from "@/components/ProfilePage";

const Page = async  () => {
    const locale = await getLocale();
    return (
        <div>
            <ProfilePage locale={locale}/>
        </div>
    );
};

export default Page;