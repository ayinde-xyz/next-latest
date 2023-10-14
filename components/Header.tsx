import React from 'react'
import Link from 'next/link'
import { UserButton,auth } from '@clerk/nextjs'

type Props = {}

const Header = (props: Props) => {
    const {userId} = auth()
    console.log(userId)


  return (
    <div className=''>
        <nav className='bg-blue-700 py-4 px-6 flex items-center justify-between mb-5'>
            <div className='flex items-center'>
                <Link href='/'>
                    <div className="text-lg uppercase font-bold text-white">
                        Clerk app
                    </div>
                </Link>
            </div>
            <div className="text-white flex items-center">
                {!userId && (
                <>
                <Link href='sign-in' className='text-gray-300 hover:text-white mr-4'>
                    Sign in
                </Link>
                <Link href='sign-up' className='text-gray-300 hover:text-white mr-4'>
                    Sign up
                </Link>
                </>
               
                )}
                {userId && (
                    <Link href='profile' className='text-gray-300 hover:text-white mr-4'>
                        Profile
                    </Link>
                )}
                <UserButton afterSignOutUrl='/'/>
                
            </div>
        </nav>
    </div>
  )
}

export default Header