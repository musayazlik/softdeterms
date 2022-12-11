import Head from 'next/head'
import Image from 'next/image'
import AnimationsCupe from '../components/home/animationsCupe'
import Layout from '../components/layout'
import { Icon } from '@iconify/react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='App'>
      <Head>
        <title>SoftDevWords - Musa Yazlık</title>
        <meta name='description' content='Generated by SoftDevWords' />
        <meta name='author' content='Musa Yazlık' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <main className='flex mb-20 min-h-[700px] pt-52 pb-24 relative '>
          <AnimationsCupe />
          <section className='container mx-auto max-w-3xl flex flex-col justify-center items-start rounded-3xl  '>
            <div className='flex flex-col items-center  '>
              <h1 className='text-5xl font-bold text-zinc-200 shadow-lg shadow-blue-800/20 bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-blue-700/20 via-blue-900/20 to-zinc-900/20 backdrop-blur-sm px-14 py-6 mb-12 border-b-4 border-blue-800'>
                SoftDeTerms
              </h1>
              <p className=' bg-blue-600/20 dark:bg-zinc-900/20 text-zinc-200 text-center px-10 py-8 backdrop-blur-sm font-medium text-lg leading-6 '>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit, et temporibus repellat nesciunt sapiente cum ducimus
                soluta saepe similique beatae aspernatur ipsam eos numquam a
                magni voluptas vitae natus eveniet ut provident dolore
                voluptates minus? Temporibus quo quod cum blanditiis voluptates
                sequi facilis dolorem excepturi vero, id quibusdam, voluptatem
                provident dolore accusantium aliquid ea ullam, tempore saepe
                assumenda debitis doloribus?
              </p>
            </div>

            <div className='col-span-12 lg:col-span-4 flex w-full items-center justify-center h-full mt-16 gap-x-8  text-zinc-200'>
              <Link href={'/'} className='hover:scale-150 duration-300 '>
                <Icon
                  icon='ph:facebook-logo-duotone'
                  width={36}
                  height={36}
                  className='hover:drop-shadow-md'
                />
              </Link>
              <Link href={'/'} className='hover:scale-150 duration-300 '>
                <Icon
                  icon='ph:twitter-logo-duotone'
                  width={36}
                  height={36}
                  className='hover:drop-shadow-md'
                />
              </Link>
              <Link
                href={'/'}
                className='hover:scale-150 duration-300 rounded-3xl'>
                <Icon
                  icon='ph:instagram-logo-duotone'
                  width={36}
                  height={36}
                  className='hover:drop-shadow-md'
                />
              </Link>
              <Link
                href={'/'}
                className='hover:scale-150 duration-300 rounded-3xl'>
                <Icon
                  icon='ph:linkedin-logo-duotone'
                  width={36}
                  height={36}
                  className='hover:drop-shadow-md'
                />
              </Link>
              <Link
                href={'/'}
                className='hover:scale-150 duration-300 rounded-3xl'>
                <Icon
                  icon='ph:github-logo-duotone'
                  width={36}
                  height={36}
                  className='hover:drop-shadow-md'
                />
              </Link>
              <Link
                href={'/'}
                className='hover:scale-150 duration-300 rounded-3xl'>
                <Icon
                  icon='ph:dribbble-logo-duotone'
                  width={36}
                  height={36}
                  className='hover:drop-shadow-md'
                />
              </Link>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  )
}
