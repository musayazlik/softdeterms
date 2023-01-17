import Layout from '@components/layout'
import { decode } from 'html-entities'
import Parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import Loading from '@components/loading'

const PostDetail = () => {
  const router = useRouter()
  const [post, setPost] = useState<any>([] as any)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    router.prefetch('/')
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_URL}/api/posts/${router.query.id}`,
    })
      .then((res) => {
        setPost(res.data.posts)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name='description' content={post?.description} />
        <meta name='author' content={post?.author} />
      </Head>
      <Layout>
        <div className='container mx-auto mt-40 mb-20'>
          <div className='max-w-7xl mx-auto'>
            <div className='flex justify-center mt-20'>
              <div className='w-full px-8'>
                <Link
                  className='bg-blue-600 hover:bg-blue-800 duration-200 pl-5 pr-8 py-4 rounded-t-2xl text-white font-semibold text-lg inline-flex justify-center items-center gap-3'
                  href={'/'}>
                  <Icon
                    icon='line-md:arrow-left-circle-twotone'
                    width={26}
                    height={26}
                  />
                  Home Back
                </Link>
              </div>
            </div>
            <div className='flex justify-center'>
              <div className='w-full shadow-xl shadow-zinc-300/20 dark:shadow-zinc-900/20 rounded-3xl rounded-t-2xl'>
                <div className='content-informations bg-zinc-100 dark:bg-zinc-900 border-b-4 border-zinc-600 dark:border-blue-600 py-4 px-8 flex space-x-10 rounded-t-2xl'>
                  <div className=' flex flex-col items-center space-y-2 justify-center '>
                    <Image
                      src={post?.userId?.image}
                      className='rounded-full outline-offset-0 	outline-zinc-700 dark:outline-zinc-400 dark:outline-offset-2 outline-2 outline-dashed'
                      width={80}
                      height={80}
                      alt='Profile Photo'
                    />
                    <div className='font-semibold text-zinc-800 dark:text-zinc-400 whitespace-nowrap'>
                      {post?.author}
                    </div>
                    <div className='social'>
                      <div className='userSocial flex gap-2'>
                        <Link
                          href={'/'}
                          className='hover:scale-125 duration-300 dark:text-zinc-400 dark:hover:text-blue-700 hover:text-blue-700 '>
                          <Icon
                            icon='ph:facebook-logo-duotone'
                            width={22}
                            height={22}
                          />
                        </Link>
                        <Link
                          href={'/'}
                          className='hover:scale-125 duration-300 dark:text-zinc-400 dark:hover:text-blue-400 hover:text-blue-400'>
                          <Icon
                            icon='ph:twitter-logo-duotone'
                            width={22}
                            height={22}
                          />
                        </Link>
                        <Link
                          href={'/'}
                          className='hover:scale-125 duration-300 dark:text-zinc-400 dark:hover:text-pink-400 hover:text-pink-400'>
                          <Icon
                            icon='ph:instagram-logo-duotone'
                            width={22}
                            height={22}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col space-y-2 py-2'>
                    <h1 className='text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-400'>
                      {post?.title}
                    </h1>

                    <p className='text-zinc-800 dark:text-zinc-400 tracking-tight '>
                      {post?.description}
                    </p>
                  </div>
                </div>
                <div className='p-6 text-zinc-800 dark:text-zinc-400'>
                  {Parse(decode(post?.content))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>

      {loading && <Loading />}
    </>
  )
}

export default PostDetail
