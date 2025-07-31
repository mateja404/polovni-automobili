import React from 'react';
import BillingPage from "@/components/BillingPage";
import {getLocale} from "next-intl/server";

const Page = async  () => {
    const locale = await getLocale();
    return (
        <div>
            <BillingPage locale={locale}/>
        </div>
    );
};

export default Page;