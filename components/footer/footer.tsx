import Link from 'next/link'
import React from 'react'

/* Image */
import Logo from '../../public/logo.svg'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <>
      <footer className='bg-indigo-50 dark:bg-zinc-700/20 text-indigo-600 dark:text-zinc-50 shadow-md shadow-indigo-50/40 dark:shadow-slate-900/20 py-8 text-center grid grid-cols-12 px-12'>
        <div className=' flex  items-center justify-start h-full col-span-4 gap-x-3'>
          <Link href={'/'}>
            <Icon icon='ph:facebook-logo-duotone' width={28} height={28} />
          </Link>
          <Link href={'/'}>
            <Icon icon='ph:twitter-logo-duotone' width={28} height={28} />
          </Link>
          <Link href={'/'}>
            <Icon icon='ph:instagram-logo-duotone' width={28} height={28} />
          </Link>
          <Link href={'/'}>
            <Icon icon='ph:linkedin-logo-duotone' width={28} height={28} />
          </Link>
          <Link href={'/'}>
            <Icon icon='ph:github-logo-duotone' width={28} height={28} />
          </Link>
          <Link href={'/'}>
            <Icon icon='ph:dribbble-logo-duotone' width={28} height={28} />
          </Link>
        </div>
        <div className='col-span-4'>
          <Link
            href={'/'}
            className='flex flex-col gap-y-2 title-font font-medium items-center  md:mb-0'>
            <Logo className='logo' />
            <div className='flex gap-x-4 mt-1'>
              <span className='w-[4px] h-[4px] bg-indigo-600 dark:bg-zinc-600  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-indigo-500 dark:bg-zinc-500  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-indigo-400 dark:bg-zinc-400  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-indigo-300 dark:bg-zinc-300  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-indigo-400 dark:bg-zinc-400  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-indigo-500 dark:bg-zinc-500  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-indigo-600 dark:bg-zinc-600  rounded-full'></span>
            </div>
          </Link>
        </div>
        <div className='col-span-4 flex items-center justify-end'>
          <div className='copyright flex gap-x-2 text-sm justify-end items-center'>
            <p>© 2022 -</p>
            <Link href={'/'} className='cursor-pointer'>
              <b>SoftDeTerms</b>
            </Link>
            <p>- All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
