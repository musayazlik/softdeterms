import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import AnimationsCupe from '../../components/home/animationsCupe'
import { Icon } from '@iconify/react'

const SignIn = () => {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === 'authenticated') {
    router.push('/')
  }
  return (
    <>
      {/* <button onClick={() => signIn('github')}>Sign in with Github</button> */}
      <div className=''>
        <div className='flex  items-center justify-center h-screen text-center relative'>
          <div className='w-2/4'>
            <div className='flex flex-col items-center justify-center h-full max-w-md mx-auto'>
              <h1 className='text-4xl font-bold text-zinc-800 dark:text-zinc-200'>
                Sign In
              </h1>
              <p className='text-zinc-500 dark:text-zinc-300 mt-2'>
                Sign in to your account to continue
              </p>
              <div className='flex flex-col items-center justify-center w-full mt-8 lg:px-20 gap-y-3'>
                <button
                  onClick={() => signIn('github')}
                  className='inline-flex items-center justify-start w-full gap-x-3 px-4 py-2.5 text-md font-semibold border-2 border-b-4 border-zinc-900 text-white bg-zinc-800 rounded-md hover:bg-zinc-900 focus:outline-none focus-visible:ring-2 duration-300 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-105'>
                  <Icon icon='ph:github-logo-duotone' width={30} />
                  Sign in with Github
                </button>
                <button
                  onClick={() => signIn('google')}
                  className='inline-flex items-center justify-start w-full gap-x-3.5 px-4 py-2.5 text-md border-2 border-b-4 border-zinc-400 font-semibold text-zinc-600 bg-white rounded-md duration-300 hover:bg-zinc-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-105'>
                  <Icon icon='flat-color-icons:google' width={28} />
                  Sign in with google
                </button>
                <button
                  onClick={() => signIn('facebook')}
                  className='inline-flex items-center justify-start w-full gap-x-3 px-4 py-2.5 text-md border-2 border-b-4 border-blue-800 font-semibold text-white bg-blue-600 rounded-md duration-300 hover:bg-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-105'>
                  <Icon
                    icon='ph:facebook-logo-duotone'
                    className='text-white'
                    width={28}
                  />
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
          <div className='w-2/4 min-h-screen relative'></div>
          <div
            className='absolute bg-blue-600 w-full h-full shadow-inner'
            style={{
              clipPath: 'polygon(70% 0, 100% 0%, 100% 100%, 40% 100%)',
            }}>
            <AnimationsCupe />
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn
