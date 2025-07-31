import React from 'react';
import Sidebar from './Sidebar';

const MyAccountPage = ({ locale }: { locale: any }) => {
  return (
    <div>
        <Sidebar locale={locale}/>
    </div>
  )
}

export default MyAccountPage