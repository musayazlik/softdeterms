import Image from 'next/image'
import React from 'react'
import Layout from '../../components/layout'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <>
      <Layout>
        <div className='mt-28 container mx-auto pt-16 pb-28'>
          <div className='title flex justify-center'>
            <h1 className='text-4xl font-bold mx-auto mb-4 cursor-default text-zinc-900 dark:text-zinc-100 relative inline-block'>
              About Us
              <span className='w-full bg-blue-600 h-4 block relative -translate-y-4 -z-10 rounded-sm shadow-lg shadow-blue-600/80'></span>
            </h1>
          </div>

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
