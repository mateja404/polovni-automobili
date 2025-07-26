import React from 'react';
import { getSession } from '@/lib/session';
import Appbar from '@/components/appbar';

const page = async () => {
    const session = await getSession();
  return (
    <>
        <Appbar/>
    </>
  )
}

export default page;