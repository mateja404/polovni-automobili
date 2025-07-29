import React from 'react';
import { getLocale } from 'next-intl/server';
import RegisterPage from '@/components/RegisterPage';

const page = () => {
  const locale = getLocale();
  return (
    <section><RegisterPage locale={locale}/></section>
  )
}

export default page;