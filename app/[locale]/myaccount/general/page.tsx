import React from 'react';
import BillingPage from "@/components/BillingPage";
import {getLocale} from "next-intl/server";
import SettingsPage from "@/components/SettingsPage";

const Page = async  () => {
    const locale = await getLocale();
    return (
        <div>
            <SettingsPage locale={locale}/>
        </div>
    );
};

export default Page;