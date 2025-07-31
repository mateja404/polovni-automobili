import React from 'react';
import Sidebar from "@/components/Sidebar";

const BillingPage = ({ locale }: { locale: any }) => {
    console.log(locale)
    return (
        <div>
            <Sidebar locale={locale}/>
        </div>
    );
};

export default BillingPage;