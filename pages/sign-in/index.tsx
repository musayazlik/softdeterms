import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import {
  useSession,
  signIn,
  signOut,
  getSession,
  getProviders,
} from 'next-auth/react'
import { useRouter } from 'next/router'
/** Components */
import AnimationsCupe from '../../components/home/animationsCupe'
/** Icons */
import { Icon } from '@iconify/react'

interface IProviders {
  [key: string]: any
}

const SignIn = ({ providers }: any) => {
  const { data: session } = useSession()
  const router = useRouter()
  const { error } = useRouter().query

  const errors: IProviders = {
    Signin: 'Try signing with a different account.',
    OAuthSignin: 'Try signing with a different account.',
    OAuthCallback: 'Try signing with a different account.',
    OAuthCreateAccount: 'Try signing with a different account.',
    EmailCreateAccount: 'Try signing with a different account.',
    Callback: 'Try signing with a different account.',
    OAuthAccountNotLinked:
      'To confirm your identity, sign in with the same account you used originally.',
    EmailSignin: 'Check your email address.',
    CredentialsSignin:
      'Sign in failed. Check the details you provided are correct.',
    default: 'Unable to sign in.',
  }

  useEffect(() => {
    const SignInError = ({ error }: any) => {
      const errorMessage = error && (errors[error] ?? errors.default)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: errorMessage,
      })
    }
    if (error) {
      SignInError({ error })
    }
  }, [error])

  return (
    <>
      {/* <button onClick={() => signIn('github')}>Sign in with Github</button> */}
      <div className=''>
        <div className='flex flex-col items-center justify-center text-center relative'>
          <div className='w-full min-h-[50vh] z-10 flex justify-center items-center mx-4'>
            <div className='inline-flex flex-col items-center justify-center max-w-md mx-auto bg-white/95 dark:bg-zinc-900/95 shadow-zinc-800/20 shadow-lg absolute rounded-xl px-4 py-4 sm:px-12 sm:py-20 sm:outline-double sm:outline-offset-8 sm:outline-8 sm:outline-zinc-900 top-0 bottom-0 my-auto h-fit '>
              <h1 className='text-4xl font-bold text-zinc-800 dark:text-zinc-200'>
                Sign In
              </h1>
              <p className='text-zinc-500 dark:text-zinc-300 mt-2'>
                Sign in to your account to continue
              </p>
              <div className='flex flex-col items-center justify-center w-full mt-8 gap-y-4'>
                <button
                  onClick={() =>
                    signIn('github', {
                      redirect: false,
                    })
                  }
                  className='inline-flex items-center justify-start w-full gap-x-3 px-4 py-2.5 text-md font-semibold border-2 border-b-4 border-zinc-900 text-white bg-zinc-800 rounded-md hover:bg-blue-800 focus:outline-none focus-visible:ring-2 duration-300 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-105'>
                  <Icon icon='ph:github-logo-duotone' width={30} />
                  Sign in with Github
                </button>
                <button
                  onClick={() =>
                    signIn('google', {
                      redirect: false,
                    })
                  }
                  className='inline-flex items-center justify-start w-full gap-x-3.5 px-4 py-2.5 text-md border-2 border-b-4 border-zinc-400 font-semibold text-zinc-600 bg-white rounded-md duration-300 hover:bg-zinc-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-105'>
                  <Icon icon='eva:google-fill' width={28} />
                  Sign in with Google
                </button>
                {/* Facebook Auth */}
                {/* <button
                  onClick={() =>
                    signIn('facebook', {
                      redirect: false,
                    })
                  }
                  className='inline-flex items-center justify-start w-full gap-x-3 px-4 py-2.5 text-md border-2 border-b-4 border-blue-700 font-semibold text-white bg-blue-500 rounded-md duration-300 hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:scale-105'>
                  <Icon
                    icon='ph:facebook-logo-duotone'
                    className='text-white'
                    width={26}
                  />
                  Sign in with Facebook
                </button> */}
              </div>
            </div>
          </div>
          <div className='w-full relative min-h-[50vh] '>
            <div
              className='flex absolute bg-blue-600 w-full min-h-[50vh] md:h-full shadow-inner'
              style={{
                clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0% 100%)',
              }}>
              <AnimationsCupe />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  const providers: any = await getProviders()
  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  return {
    props: {
      session,
      providers,
    },
  }
}
