import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ post }: any) => {
  const date = post.createdAt.split('T')[0]
  return (
    <>
      <div className='flex flex-col sm:grid sm:grid-cols-12 px-4 py-6 gap-8 bg-zinc-50 dark:bg-zinc-800 rounded-lg border-2 border-zinc-300/40 dark:border-zinc-900/80 hover:bg-zinc-100 duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 hover:cursor-pointer hover:relative hover:border-in'>
        <div className='avatar flex flex-col items-center sm:col-span-3 col-span-12 xl:col-span-2'>
          <Image
            src={post.userId.image || '/images/avatar.png'}
            alt='avatar'
            width={100}
            height={100}
            className='rounded-full outline-offset-4 	outline-zinc-700 outline-2 outline-dashed'
          />
          <div className='postAuthor flex sm:hidden gap-3 mt-4 mb-2 justify-center items-center'>
            <span className='text-lg font-semibold text-zinc-900 dark:text-zinc-400'>
              {' '}
              {post.userId.name}
            </span>
          </div>
          <div className='userSocial sm:mt-6 flex gap-2'>
            <Link
              href={'/'}
              className='hover:scale-125 duration-300 dark:text-zinc-400 dark:hover:text-blue-700 hover:text-blue-700 '>
              <Icon icon='ph:facebook-logo-duotone' width={22} height={22} />
            </Link>
            <Link
              href={'/'}
              className='hover:scale-125 duration-300 dark:text-zinc-400 dark:hover:text-blue-400 hover:text-blue-400'>
              <Icon icon='ph:twitter-logo-duotone' width={22} height={22} />
            </Link>
            <Link
              href={'/'}
              className='hover:scale-125 duration-300 dark:text-zinc-400 dark:hover:text-pink-400 hover:text-pink-400'>
              <Icon icon='ph:instagram-logo-duotone' width={22} height={22} />
            </Link>
          </div>
        </div>

        <Link
          href={`/post/${post.url}-${post._id}`}
          className='postContext sm:col-span-9 col-span-10 flex flex-col justify-between'>
          <div className='postDetail mb-6 sm:mb-0 text-center sm:text-start'>
            <h3 className='text-lg sm:text-3xl mb-4 font-bold text-zinc-900 dark:text-zinc-400 '>
              {post.title}
            </h3>
            <p className='text-sm sm:text-base text-zinc-700 dark:text-zinc-400 mb-5'>
              {post.description.substring(0, 160) + '...'}
            </p>
          </div>

          <div className='postMeta mt-4 flex gap-6 justify-center sm:justify-start'>
            <div className='postDate flex gap-3 justify-center items-center'>
              <Icon
                icon='ph:calendar-duotone'
                width={20}
                height={20}
                className=' text-zinc-900 dark:text-zinc-400'
              />
              <span className='text-sm sm:text-base text-zinc-900 dark:text-zinc-400'>
                {' '}
                {date}
              </span>
            </div>
            <div className='postAuthor hidden sm:flex gap-3 justify-center items-center'>
              <Icon
                icon='ph:user-duotone'
                width={20}
                height={20}
                className='text-zinc-900 dark:text-zinc-400'
              />
              <span className='text-sm sm:text-base text-zinc-900 dark:text-zinc-400'>
                {' '}
                {post.author}
              </span>
            </div>

            <div className='postComments flex gap-3 justify-center items-center'>
              <Icon
                icon='ph:chat-text-duotone'
                width={20}
                height={20}
                className='text-zinc-900 dark:text-zinc-400'
              />
              <span className='text-sm sm:text-base text-zinc-900 dark:text-zinc-400'>
                {' '}
                {post.comments}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default BlogCard
