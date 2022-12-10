import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

/* Image */
import Logo from '../../public/logo.svg'
import { Icon } from '@iconify/react'

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(true)
  const router = useRouter()
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
      <header
        className={`${
          menuStatus === true ? 'shadow-blue-300/20' : 'shadow-blue-900/40'
        } bg-white shadow-lg  dark:bg-zinc-900/100 text-blue-600 dark:text-zinc-50 dark:shadow-zinc-900/40 w-full fixed z-20 min-h-[90px] `}>
        <div className='xl:container mx-auto flex flex-wrap p-5 flex-row items-center justify-between '>
          <a className='flex flex-col gap-y-2 title-font font-medium items-center  md:mb-0 '>
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
          </a>
          <nav className=' mx-auto hidden lg:flex flex-wrap items-center justify-center  lg:gap-x-4 xl:gap-x-8 '>
            <Link
              href={'/'}
              className={`  font-medium text-lg tracking-tight px-4 py-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer ${
                router.pathname == '/'
                  ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
                  : ''
              }`}>
              Home
            </Link>
            <Link
              href={'/about-us'}
              className={`  font-medium text-lg tracking-tight px-4 py-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer ${
                router.pathname == '/about-us'
                  ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
                  : ''
              }`}>
              About us
            </Link>
            <Link
              href={'/support'}
              className={`  font-medium text-lg tracking-tight px-4 py-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer ${
                router.pathname == '/support'
                  ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
                  : ''
              }`}>
              Support
            </Link>
            <Link
              href={'/contact-us'}
              className={`  font-medium text-lg tracking-tight px-4 py-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer ${
                router.pathname == '/contact-us'
                  ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
                  : ''
              }`}>
              Contact us
            </Link>
          </nav>

          <div className='flex '>
            <div className='mx-auto hidden lg:flex gap-x-4'>
              <Link
                href={'/sign-in'}
                className=' font-medium text-lg tracking-tight px-4 py-2 bg-transparent hover:shadow-lg shadow-blue-700/80 text-blue-600 duration-300 rounded-md hover:bg-blue-700 hover:text-blue-100 hover:shadow-blue-600/40 cursor-pointer dark:text-blue-50 '>
                Sign in
              </Link>

              <Link
                href={'/sign-up'}
                className='font-medium text-lg tracking-tight px-4 py-2 bg-blue-700 hover:shadow-lg shadow-blue-700/50 hover:shadow-blue-600/40 text-blue-100 duration-300 rounded-md outline-offset-4 outline-2 outline-blue-600/50 outline-dotted hover:bg-blue-800 cursor-pointer dark:text-blue-50'>
                Sign up
              </Link>
            </div>

            <div className='darkInput hidden sm:flex ml-4 sm:ml-8 items-center gap-x-2 relative'>
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
              <div className='darkButton bg-blue-500 rounded-3xl flex items-center pl-1'>
                <div className='pin pinDark bg-blue-900 rounded-full'></div>
              </div>
              <span>
                <Icon icon='ph:moon-stars-duotone' />
              </span>
            </div>
            <div className='mobileMenu flex lg:hidden font-medium text-lg tracking-tight px-2.5 py-2 bg-blue-700 hover:shadow-lg shadow-blue-700/50 hover:shadow-blue-600/40 text-blue-100 duration-300 rounded-md outline-offset-4 outline-2 outline-blue-600/50 outline-dotted hover:bg-blue-800 cursor-pointer dark:text-blue-50 ml-6'>
              <Icon
                icon='heroicons-outline:menu'
                width={20}
                height={20}
                onClick={() => setMenuStatus(!menuStatus)}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuStatus && (
        <nav className=' mx-auto flex lg:hidden flex-col items-center justify-center w-full bg-white fixed z-30 pt-6 pb-6 gap-y-2 px-5  mt-[90px] shadow-lg shadow-blue-900/10 dark:shadow-zinc-900/40 dark:bg-neutral-900 '>
          <div className='flex justify-end w-full mt-4'>
            <div className='darkInput inline-flex ml-4 sm:ml-8 gap-x-2 relative justify-end text-blue-600 dark:text-zinc-50  '>
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
              <div className='darkButton bg-blue-500 rounded-3xl flex items-center pl-1'>
                <div className='pin pinDark bg-blue-900 rounded-full'></div>
              </div>
              <span>
                <Icon icon='ph:moon-stars-duotone' />
              </span>
            </div>
          </div>
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
          </div>
        </nav>
      )}
    </>
  )
}

export default Header
