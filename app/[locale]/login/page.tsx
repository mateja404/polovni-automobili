import LoginPage from '@/components/LoginPage';
import React from 'react';
import { getLocale } from 'next-intl/server';

const page = () => {
  const locale = getLocale();
  return (
    <section><LoginPage locale={locale}/></section>
  )
}

export default page;