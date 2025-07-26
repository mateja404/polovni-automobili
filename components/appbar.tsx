
import { getSession } from '@/lib/session'
import React from 'react'

const Appbar = async () => {
    const session = await getSession()
  return (
    <div>{session?.user.email}</div>
  )
}

export default Appbar