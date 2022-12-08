import React, { useState } from 'react'
import Link from 'next/link'

/* Styles */
import styles from '../../styles/header.module.scss'

/* Image */
import Logo from '../../public/logo.svg'
import { Icon } from '@iconify/react'

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false)
  const darkMode = (e: any): void => {
    const html = document.querySelector('html') as HTMLElement

    if (e.target.checked === true) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  const menuHandel = () => {
    setMenuStatus(!menuStatus)
  }

  return (
    <>
      <header className=' bg-indigo-50/95 dark:bg-zinc-900/95 text-indigo-600 dark:text-zinc-50 shadow-lg shadow-indigo-800/60 dark:shadow-slate-900/40 absolute z-10 w-full'>
        <div className='xl:container mx-auto flex flex-wrap p-5 flex-row items-center justify-between'>
          <a className='flex flex-col gap-y-2 title-font font-medium items-center  md:mb-0 '>
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
          </a>
          <nav className=' mx-auto hidden lg:flex flex-wrap items-center justify-center  lg:gap-x-4 xl:gap-x-8 '>
            <Link
              href={'/home'}
              className=' font-medium text-lg tracking-tight px-4 py-2 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-700/50 hover:text-indigo-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-indigo-600/50 hover:outline-dotted cursor-pointer'>
              Home
            </Link>
            <Link
              href={'/about'}
              className=' font-medium text-lg tracking-tight px-4 py-2 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-700/50 hover:text-indigo-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-indigo-600/50 hover:outline-dotted cursor-pointer'>
              About us
            </Link>
            <Link
              href={'/support'}
              className=' font-medium text-lg tracking-tight px-4 py-2 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-700/50 hover:text-indigo-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-indigo-600/50 hover:outline-dotted cursor-pointer'>
              Support
            </Link>
            <Link
              href={'/contact-us'}
              className=' font-medium text-lg tracking-tight px-4 py-2 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-700/50 hover:text-indigo-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-indigo-600/50 hover:outline-dotted cursor-pointer'>
              Contact us
            </Link>
          </nav>

          <div className='flex '>
            <div className='mx-auto hidden lg:flex gap-x-4'>
              <Link
                href={'/sign-in'}
                className=' font-medium text-lg tracking-tight px-4 py-2 bg-transparent hover:shadow-lg shadow-indigo-700/80 text-indigo-400 duration-300 rounded-md hover:bg-indigo-700 hover:text-indigo-100 hover:shadow-indigo-600/40 cursor-pointer dark:text-indigo-50 '>
                Sign in
              </Link>

              <Link
                href={'/sign-up'}
                className='font-medium text-lg tracking-tight px-4 py-2 bg-indigo-700 hover:shadow-lg shadow-indigo-700/50 hover:shadow-indigo-600/40 text-indigo-100 duration-300 rounded-md outline-offset-4 outline-2 outline-indigo-600/50 outline-dotted hover:bg-indigo-800 cursor-pointer dark:text-indigo-50'>
                Sign up
              </Link>
            </div>

            <div
              className={`${styles.darkInput} flex ml-4 sm:ml-8 items-center gap-x-2 relative `}>
              <input
                type='checkbox'
                className='opacity-0 absolute z-10'
                onClick={(e) => {
                  darkMode(e)
                }}
              />
              <span>
                <Icon icon='icon-park-twotone:sun-one' />
              </span>
              <div
                className={`${styles.darkButton} bg-indigo-400 rounded-3xl flex items-center pl-1 `}>
                <div
                  className={`${styles.pin} bg-indigo-800 rounded-full`}></div>
              </div>
              <span>
                <Icon icon='ph:moon-stars-duotone' />
              </span>
            </div>
            <div className='mobileMenu flex lg:hidden font-medium text-lg tracking-tight px-2.5 py-2 bg-indigo-700 hover:shadow-lg shadow-indigo-700/50 hover:shadow-indigo-600/40 text-indigo-100 duration-300 rounded-md outline-offset-4 outline-2 outline-indigo-600/50 outline-dotted hover:bg-indigo-800 cursor-pointer dark:text-indigo-50 ml-6'>
              {menuStatus ? (
                <Icon
                  icon='heroicons-outline:menu'
                  width={20}
                  height={20}
                  onClick={() => menuHandel()}
                />
              ) : (
                <Icon
                  icon='ic:round-close'
                  width={20}
                  height={20}
                  onClick={() => menuHandel()}
                />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
