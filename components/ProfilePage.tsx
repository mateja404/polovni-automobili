import React from 'react';
import Sidebar from "@/components/Sidebar";

const ProfilePage = ({ locale }: { locale: any }) => {
    return (
        <div>
            <Sidebar locale={locale}/>
        </div>
    );
};

export default ProfilePage;