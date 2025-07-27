import React from 'react';
import { getSession } from '@/lib/session';
import Appbar from '@/components/appbar';
import { getProfile, sendBodyReq } from '@/lib/actions';

const page = async () => {
    const session = await getSession();
    const res = await getProfile();
    const response = await sendBodyReq("jocopanter");
  return (
    <>
        <Appbar/>
        <p>{JSON.stringify(res)}</p>
        <p>{JSON.stringify(response)}</p>
    </>
  )
}

export default page;