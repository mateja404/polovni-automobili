import React from 'react';
import MyAccountPage from '@/components/MyAccountPage';
import { getLocale } from "next-intl/server";

const page = async () => {
    const locale = await getLocale();
  return (
    <>
       <MyAccountPage locale={locale}/>
    </>
  )
}

export default page;