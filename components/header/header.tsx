import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

/* Image */
import { Icon } from '@iconify/react'
import DarkMode from './darkMode'
import MobileMenu from './mobileMenu'
import { getCsrfToken, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { GetServerSidePropsContext } from 'next'

const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false)
  const { pathname } = useRouter()
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

  const { data: session } = useSession()

  const postsPath = pathname.split('/').filter(Boolean).pop()

  return (
    <>
      <header
        className={`shadow-blue-300/20 bg-white shadow-lg dark:bg-zinc-900/100 text-blue-600 dark:text-zinc-50 dark:shadow-zinc-900/40 w-full fixed z-50 min-h-[90px] `}>
        <div className='xl:container mx-auto flex flex-wrap py-5 px-6 flex-row items-center justify-between '>
          <Link
            href={'/'}
            className='flex flex-col gap-y-1 title-font font-medium items-center  md:mb-0'>
            <span className='font-maxblack text-xl xl:text-2xl'>
              SoftDeTerms
            </span>
            <div className='flex gap-x-4'>
              <span className='w-[4px] h-[4px] bg-blue-800 dark:bg-zinc-800  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-700 dark:bg-zinc-700  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-600 dark:bg-zinc-600  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-500 dark:bg-zinc-500  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-600 dark:bg-zinc-600  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-700 dark:bg-zinc-700  rounded-full'></span>
              <span className='w-[4px] h-[4px] bg-blue-800 dark:bg-zinc-800  rounded-full'></span>
            </div>
          </Link>
          <nav className=' mx-auto hidden lg:flex flex-wrap items-center justify-center  lg:gap-x-4 xl:gap-x-8 '>
            <Link
              href={'/'}
              className={`  flex items-center gap-x-2  font-bold text-base tracking-tight px-4 py-2.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer ${
                pathname == '/'
                  ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
                  : ''
              }`}>
              <Icon icon='bx:home' fontSize={22} />

              <span className='mt-0.5'>Home</span>
            </Link>
            <Link
              href={'/about-us'}
              className={` flex items-center gap-x-2 font-bold text-base tracking-tight px-4 py-2.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer ${
                pathname == '/about-us'
                  ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
                  : ''
              }`}>
              <Icon icon='bx:user-pin' fontSize={22} />
              About
            </Link>
            <Link
              href={'/posts'}
              className={` flex items-center gap-x-2 font-bold text-base tracking-tight px-4 py-2.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer ${
                postsPath == 'posts'
                  ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
                  : ''
              }`}>
              <Icon icon='bx:book-open' fontSize={22} />
              Posts
            </Link>
            <Link
              href={'/contact-us'}
              className={` flex items-center gap-x-2 font-bold text-base tracking-tight px-4 py-2.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-700/50 hover:text-blue-100 duration-300 rounded-md hover:outline-offset-4 outline-2 hover:outline-blue-600/50 hover:outline-dotted cursor-pointer ${
                pathname == '/contact-us'
                  ? 'bg-blue-700 shadow-lg shadow-blue-700/50 text-blue-100 outline-offset-4 outline-2 outline-blue-600/50 outline-dotted'
                  : ''
              }`}>
              <Icon icon='bx:envelope' fontSize={22} />
              Contact
            </Link>
          </nav>

          <div className='flex '>
            {session?.user ? (
              <div className='flex items-center gap-x-3'>
                <Link href={'/dashboard'} className=''>
                  <Image
                    src={session?.user?.image!}
                    width={40}
                    height={40}
                    alt='Avatar Logo'
                    className='rounded-full outline-offset-2 outline-2 outline-dotted outline-blue-800 hover:scale-110 cursor-pointer hover:shadow-lg hover:shadow-blue-800/50 duration-300'
                    title='Dashboard'
                  />
                  <img src='' alt='' />
                </Link>
                <button
                  onClick={() => signOut()}
                  className='font-bold text-white bg-red-600 text-lg tracking-tight p-1  hover:shadow-lg shadow-red-700/50 hover:shadow-red-600/40 duration-300 rounded-full border-2 border-red-800 hover:scale-110 cursor-pointer opacity-80 '
                  title='Loyout'>
                  <Icon
                    icon='material-symbols:exit-to-app-rounded'
                    width={16}
                  />
                </button>
              </div>
            ) : (
              <div className='mx-auto hidden lg:flex gap-x-4'>
                <Link
                  href={'/sign-in'}
                  className='font-extrabold text-lg tracking-tight px-4 py-2 bg-blue-700 hover:shadow-lg shadow-blue-700/50 hover:shadow-blue-600/40 text-blue-100 duration-300 rounded-md outline-offset-4 outline-2 outline-blue-600/50 outline-dotted hover:bg-blue-800 cursor-pointer dark:text-blue-50'>
                  Sign in
                </Link>

                {/* <Link
                  href={'/sign-up'}
                  className='font-medium text-lg tracking-tight px-4 py-2 bg-blue-700 hover:shadow-lg shadow-blue-700/50 hover:shadow-blue-600/40 text-blue-100 duration-300 rounded-md outline-offset-4 outline-2 outline-blue-600/50 outline-dotted hover:bg-blue-800 cursor-pointer dark:text-blue-50'>
                  Sign up
                </Link> */}
              </div>
            )}

            <DarkMode
              customClass={
                'hidden sm:flex ml-4 sm:ml-8 items-center gap-x-2 relative'
              }
            />

            <div className='mobileMenu flex lg:hidden font-medium text-lg tracking-tight px-2.5 py-2 bg-blue-700 hover:shadow-lg shadow-blue-700/50 hover:shadow-blue-600/40 text-blue-100 duration-300 rounded-md outline-offset-4 outline-2 outline-blue-600/50 outline-dotted hover:bg-blue-800 cursor-pointer dark:text-blue-50 ml-6'>
              {/* <Icon
                icon='heroicons-outline:menu'
                width={20}
                height={20}
                onClick={() => setMenuStatus(!menuStatus)}
              /> */}
              <button
                onClick={() => setMenuStatus(!menuStatus)}
                className={`${
                  menuStatus && 'active'
                } flex flex-col items-center justify-center  h-7 w-7 `}>
                <span className='w-[30px] h-[4px] bg-zinc-100 block rounded-3xl'></span>
                <span className='w-[30px] h-[4px] bg-zinc-100 rounded-3xl my-1'></span>
                <span className='w-[30px] h-[4px] bg-zinc-100 rounded-3xl'></span>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {menuStatus && (
          <>
            <nav className=' mx-auto flex lg:hidden flex-col items-center justify-center w-full bg-white absolute z-40 pt-6 pb-6 gap-y-2 px-5 shadow-lg shadow-blue-900/10 dark:shadow-zinc-900/40 dark:bg-neutral-900 '>
              <div className='flex sm:hidden justify-center w-full mt-4'>
                <DarkMode
                  customClass={
                    'inline-flex ml-4 sm:ml-8 gap-x-2 relative text-blue-600 dark:text-zinc-50'
                  }
                />
              </div>

              {/* Mobile Menu Component */}
              <MobileMenu />
            </nav>
            <div
              className='mobileMenuWrapper absolute z-30 w-screen h-screen bg-transparent '
              onClick={() => setMenuStatus(false)}></div>
          </>
        )}
      </header>
    </>
  )
}

export default Header
