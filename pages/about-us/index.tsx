import React from 'react'
/** Next Package */
import Image from 'next/image'
import Link from 'next/link'
/** Icons */
import { Icon } from '@iconify/react'
/** Components */
import Layout from '../../components/layout'
import PageTitle from '../../components/pageTitle'

const AboutUs = () => {
  return (
    <>
      <Layout>
        <div className='mt-28 container mx-auto pt-16 pb-28'>
          <PageTitle title='About Us' />

          <div className='flex flex-col gap-y-4 mt-8 max-w-4xl mx-auto'>
            <div className='image flex justify-center'>
              <Image
                src='/avatar.png'
                alt='image'
                width={140}
                height={140}
                className='outline-dotted outline-4 outline-offset-8 outline-blue-600 rounded-full shadow-xl shadow-blue-600/20 dark:shadow-blue-600/50 mb-8'
              />
            </div>
            <div className='text-center'>
              <h1 className=' font-bold text-zinc-800 dark:text-zinc-100 text-3xl'>
                Musa Yazlık
              </h1>
              <p className='text-zinc-600/50 dark:text-zinc-100 my-4 font-semibold'>
                CEO & Founder
              </p>

              <p className='text-zinc-900 dark:text-zinc-100 text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                voluptas, quod, quia, voluptates quae voluptatibus quibusdam
                doloremque quas quidem nemo voluptatum. Quisquam, quae. Quisquam
                quae, quod quibusdam voluptas quidem voluptate. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Quis voluptas,
                quod, quia, voluptates quae voluptatibus quibusdam doloremque
                quas quidem nemo voluptatum. Quisquam, quae. Quisquam quae, quod
                quibusdam voluptas quidem voluptate. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quis voluptas, quod, quia,
                voluptates quae voluptatibus quibusdam doloremque quas quidem
                nemo voluptatum. Quisquam, quae. Quisquam quae, quod quibusdam
                voluptas quidem voluptate. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quis voluptas, quod, quia,
                voluptates quae voluptatibus quibusdam doloremque quas quidem
                nemo voluptatum. Quisquam, quae. Quisquam quae, quod quibusdam
                voluptas quidem voluptate. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quis voluptas, quod, quia,
                voluptates quae voluptatibus quibusdam doloremque quas quidem
                nemo voluptatum. Quisquam, quae. Quisquam quae, quod quibusdam
                voluptas quidem voluptate. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quis voluptas, quod, quia,
                voluptates quae voluptatibus quibusdam doloremque quas quidem
                nemo voluptatum. Quisquam, quae. Quisquam quae, quod quibusdam
                voluptas quidem voluptate.
              </p>

              <div className='social flex justify-center gap-x-6 mt-8'>
                <Link
                  href={'/'}
                  className='hover:scale-125 duration-300 text-zinc-700 dark:text-zinc-200'>
                  <Icon
                    icon='ph:facebook-logo-duotone'
                    width={28}
                    height={28}
                  />
                </Link>
                <Link
                  href={'/'}
                  className='hover:scale-125 duration-300 text-zinc-700 dark:text-zinc-200'>
                  <Icon icon='ph:twitter-logo-duotone' width={28} height={28} />
                </Link>
                <Link
                  href={'/'}
                  className='hover:scale-125 duration-300 text-zinc-700 dark:text-zinc-200'>
                  <Icon
                    icon='ph:linkedin-logo-duotone'
                    width={28}
                    height={28}
                  />
                </Link>
                <Link
                  href={'/'}
                  className='hover:scale-125 duration-300 text-zinc-700 dark:text-zinc-200'>
                  <Icon icon='ph:github-logo-duotone' width={28} height={28} />
                </Link>
                <Link
                  href={'/'}
                  className='hover:scale-125 duration-300 text-zinc-700 dark:text-zinc-200'>
                  <Icon
                    icon='ph:dribbble-logo-duotone'
                    width={28}
                    height={28}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default AboutUs
