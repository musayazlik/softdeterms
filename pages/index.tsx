/** Next */
import Link from 'next/link'
import Head from 'next/head'

/** Components */
import AnimationsCupe from '../components/home/animationsCupe'
import Layout from '../components/layout'

/** Icons */
import { Icon } from '@iconify/react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='App'>
      <Head>
        <title>SoftDevTerms - Musa Yazlık</title>
        <meta name='description' content='Generated by SoftDevWords' />
        <meta name='author' content='Musa Yazlık' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <main className=''>
          <div className='flex  min-h-[700px] pt-52 pb-24 relative '>
            <AnimationsCupe />
            <section className='container mx-auto max-w-3xl flex flex-col justify-center items-start rounded-3xl  '>
              <div className='flex flex-col items-center  '>
                <h1 className=' text-2xl lg:text-5xl font-bold text-zinc-200 shadow-lg shadow-blue-800/20 bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-700/20 via-blue-900/20 to-zinc-900/20 backdrop-blur-sm px-14 py-6 mb-12 border-b-4 border-blue-800'>
                  SoftDeTerms
                </h1>
                <p className=' bg-zinc-800/20 dark:bg-zinc-900/20 text-zinc-200 text-center px-4 sm:px-14 py-8 backdrop-blur-sm font-medium text-md sm:text-lg leading-7 '>
                  As a software developer, learn words and terms related to the
                  software profession from a single point.
                </p>
              </div>

              <div className='col-span-12 lg:col-span-4 flex w-full items-center justify-center h-full mt-16 gap-x-4 md:gap-x-8  text-zinc-200'>
                <Link href={'/'} className='hover:scale-150 duration-300 '>
                  <Icon
                    icon='ph:facebook-logo-duotone'
                    width={32}
                    height={32}
                    className='hover:drop-shadow-md'
                  />
                </Link>
                <Link href={'/'} className='hover:scale-150 duration-300 '>
                  <Icon
                    icon='ph:twitter-logo-duotone'
                    width={32}
                    height={32}
                    className='hover:drop-shadow-md'
                  />
                </Link>
                <Link
                  href={'/'}
                  className='hover:scale-150 duration-300 rounded-3xl'>
                  <Icon
                    icon='ph:instagram-logo-duotone'
                    width={32}
                    height={32}
                    className='hover:drop-shadow-md'
                  />
                </Link>
                <Link
                  href={'/'}
                  className='hover:scale-150 duration-300 rounded-3xl'>
                  <Icon
                    icon='ph:linkedin-logo-duotone'
                    width={32}
                    height={32}
                    className='hover:drop-shadow-md'
                  />
                </Link>
                <Link
                  href={'/'}
                  className='hover:scale-150 duration-300 rounded-3xl'>
                  <Icon
                    icon='ph:github-logo-duotone'
                    width={32}
                    height={32}
                    className='hover:drop-shadow-md'
                  />
                </Link>
                <Link
                  href={'/'}
                  className='hover:scale-150 duration-300 rounded-3xl'>
                  <Icon
                    icon='ph:dribbble-logo-duotone'
                    width={32}
                    height={32}
                    className='hover:drop-shadow-md'
                  />
                </Link>
              </div>
            </section>
          </div>

          <div className='container mx-auto mt-32 px-8'>
            <section className='my-16'>
              <div className='flex flex-col md:grid grid-cols-12 items-center justify-center w-full h-full gap-20'>
                <div className='col-span-6 h-full'>
                  <div className='flex flex-col items-start justify-around h-full '>
                    <div className='flex flex-col items-start'>
                      <h2 className='mb-6 font-semibold w-auto text-xl underline underline-offset-4 dark:decoration-slate-50 decoration-wavy before:w-full before:h-5 before:bg-blue-400 before:inline-block before:absolute relative before:-z-10 px-4 before:left-0 before:rounded-sm before:shadow-md before:shadow-blue-400/50'>
                        Heartbeat of Words
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quod. Quisquam, quod. Quisquam, quod.
                        Quisquam, quod. Quisquam, quod. Quisquam, quod.
                        Quisquam, quod.
                      </p>
                    </div>
                    <div className='mt-12'>
                      <Link
                        href={'/'}
                        className=' px-4 py-2 border-2 border-blue-800 text-blue-200 outline-2 outline-dashed outline-offset-4 outline-zinc-800 dark:outline-zinc-200 text-xl font-semibold rounded-md bg-blue-600'>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className='col-span-6'>
                  <Image src='/programming.svg' width={500} height={500} />
                </div>
              </div>
            </section>
          </div>
        </main>
      </Layout>
    </div>
  )
}
