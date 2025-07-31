import React from 'react';
import Sidebar from "@/components/Sidebar";

const SettingsPage = ({ locale }: { locale: any }) => {
    return (
        <div>
            <Sidebar locale={locale}/>
        </div>
    );
};

export default SettingsPage;