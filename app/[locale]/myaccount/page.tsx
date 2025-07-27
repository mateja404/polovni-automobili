import React from 'react';
import { getSession } from '@/lib/session';
import Appbar from '@/components/appbar';
import { getProfile } from '@/lib/actions';

const page = async () => {
    const session = await getSession();
    const res = await getProfile();
  return (
    <>
        <Appbar/>
        <p>{JSON.stringify(res)}</p>
    </>
  )
}

export default page;