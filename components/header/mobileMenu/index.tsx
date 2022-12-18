import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const MobileMenu = () => {
  const router = useRouter()
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full gap-y-7 px-5 pt-6 pb-8 text-blue-600 dark:text-zinc-50  '>
        <Link
          href={'/'}
          className={` font-medium text-lg tracking-tight px-4 py-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer w-full max-w-xs ${
            router.pathname == '/'
              ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
              : ''
          }`}>
          Home
        </Link>
        <Link
          href={'/about-us'}
          className={`  font-medium text-lg tracking-tight px-4 py-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer w-full max-w-xs ${
            router.pathname == '/about-us'
              ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
              : ''
          }`}>
          About us
        </Link>
        <Link
          href={'/support'}
          className={`  font-medium text-lg tracking-tight px-4 py-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer w-full max-w-xs ${
            router.pathname == '/support'
              ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
              : ''
          }`}>
          Support
        </Link>
        <Link
          href={'/contact-us'}
          className={`  font-medium text-lg tracking-tight px-4 py-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer w-full max-w-xs ${
            router.pathname == '/contact-us'
              ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
              : ''
          }`}>
          Contact us
        </Link>

        <Link
          href={'/sign-in'}
          className='font-medium text-lg tracking-tight px-8 py-3 bg-blue-700 hover:shadow-lg shadow-blue-700/50 hover:shadow-blue-600/40 text-blue-100 duration-300 rounded-md outline-offset-4 outline-2 outline-blue-600/50 outline-dotted hover:bg-blue-800 cursor-pointer dark:text-blue-50'>
          Sign in
        </Link>
      </div>
    </>
  )
}

export default MobileMenu
