import Link from 'next/link'
import React from 'react'

/* Image */
import Logo from '../../public/logo.svg'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <>
      <footer className='bg-indigo-50 dark:bg-zinc-700/20 text-indigo-600 dark:text-zinc-50 pt-8 lg:pb-4 lg:pt-4 text-center grid grid-cols-12 px-4 sm:px-12 relative z-20'>
        <div className='col-span-12 lg:col-span-4 flex items-start lg:items-center justify-center lg:justify-start h-full gap-x-4'>
          <Link href={'/'} className='hover:scale-125 duration-300'>
            <Icon icon='ph:facebook-logo-duotone' width={28} height={28} />
          </Link>
          <Link href={'/'} className='hover:scale-125 duration-300'>
            <Icon icon='ph:twitter-logo-duotone' width={28} height={28} />
          </Link>
          <Link href={'/'} className='hover:scale-125 duration-300'>
            <Icon icon='ph:instagram-logo-duotone' width={28} height={28} />
          </Link>
          <Link href={'/'} className='hover:scale-125 duration-300'>
            <Icon icon='ph:linkedin-logo-duotone' width={28} height={28} />
          </Link>
          <Link href={'/'} className='hover:scale-125 duration-300'>
            <Icon icon='ph:github-logo-duotone' width={28} height={28} />
          </Link>
          <Link href={'/'} className='hover:scale-125 duration-300'>
            <Icon icon='ph:dribbble-logo-duotone' width={28} height={28} />
          </Link>
        </div>
        <div className=' col-span-12 mt-8 mb-6 sm:my-8 sm:col-span-4 lg:col-span-3'>
          <Link
            href={'/'}
            className='flex flex-col gap-y-2 title-font font-medium items-center md:mb-0'>
            <Logo className='logo' />
            <div className='flex gap-x-4 mt-1'>
              <span className='w-[4px] h-[4px] bg-blue-800 dark:bg-zinc-800  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-700 dark:bg-zinc-700  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-600 dark:bg-zinc-600  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-500 dark:bg-zinc-500  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-600 dark:bg-zinc-600  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-700 dark:bg-zinc-700  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-800 dark:bg-zinc-800  rounded-full'></span>
            </div>
          </Link>
        </div>
        <div className='col-span-12 sm:col-span-8 lg:col-span-5 flex items-center justify-center my-4 sm:my-0 sm:justify-end'>
          <div className='copyright flex gap-x-2 sm:text-base justify-end items-center text-xs'>
            <p>© 2022 </p>
            <Link href={'/'} className='cursor-pointer'>
              <b>SoftDeTerms</b>
            </Link>
            <p> All rights reserved.</p>
          </div>
        </div>
      </footer>
      <div className='py-2 font-semibold bg-blue-800 text-white flex items-center gap-x-3 justify-center text-xs'>
        <p>Designed By </p>
        <Icon icon='ph:heart-duotone' className='text-xl' />
        <Link
          href='https://en.musayazlik.com/'
          target='_blank'
          className='hover:text-blue-300 duration-300 hover:scale-110'>
          Musa Yazlık
        </Link>
      </div>
    </>
  )
}

export default Footer
