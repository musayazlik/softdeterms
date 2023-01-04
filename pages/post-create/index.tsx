import Layout from '@components/layout'
import PageTitle from '@components/pageTitle'
import { useSession } from 'next-auth/react'
import { getCsrfToken } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useEffect } from 'react'

type Id = string

const PostCreate = ({ csrfToken }: any) => {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/')
    }
  }, [session])

  const createPost = async (e: any) => {
    e.preventDefault()
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken,
      },
      body: JSON.stringify({
        title: e.target.title.value,
        author: e.target.author.value,
        description: e.target.description.value,
        userId: e.target.userId.value,
      }),
    })
    const data = await res.json()
    if (data.success) {
      router.push('/')
    }
  }

  console.log('====================================')
  console.log(session?.user)
  console.log('====================================')

  return (
    <Layout>
      <div className='container mx-auto mt-40'>
        <PageTitle title='Create a Post' />
        <div className='flex justify-center'>
          <div className='w-full lg:w-1/2'>
            <form className='mb-20' onSubmit={(e) => createPost(e)}>
              <div className='mb-6'>
                <input type='hidden' name='csrfToken' value={csrfToken} />
                <input type='hidden' name='userId' value={'sfgrggdfgdfg'} />
                <div className='mb-6'>
                  <label
                    htmlFor='title'
                    className='block mb-1 text-lg font-bold text-zinc-700 dark:text-zinc-300'>
                    Title
                  </label>
                  <input
                    type='text'
                    name='title'
                    id='title'
                    required
                    placeholder='What is session?'
                    className='w-full px-3 py-3.5 text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 leading-tight text-gray-800 border-2 border-zinc-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-600 focus:shadow-blue-600/20 duration-300 focus:text-blue-700'
                  />
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='author'
                    className='block mb-1 text-lg font-bold text-zinc-700 dark:text-zinc-300'>
                    Author
                  </label>
                  <input
                    type='text'
                    name='author'
                    id='author'
                    required
                    defaultValue={session?.user?.name || ''}
                    placeholder='Full Name'
                    className='w-full px-3 py-3.5 text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 leading-tight text-gray-800 border-2 border-zinc-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-600 focus:shadow-blue-600/20 duration-300 focus:text-blue-700'
                  />
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='description'
                    className='block mb-1 text-lg font-bold text-zinc-700 dark:text-zinc-300'>
                    Description
                  </label>
                  <textarea
                    name='description'
                    id='description'
                    cols={10}
                    rows={10}
                    required
                    placeholder='Enter detailed information about the term or word...'
                    className='w-full px-3 py-3 text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 leading-tight text-gray-800 border-2 border-zinc-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-600 focus:shadow-blue-600/20 duration-300 focus:text-blue-700'></textarea>
                </div>
                <div className='mb-6 grid grid-cols-2 gap-8'>
                  <button
                    type='submit'
                    className='w-full px-3 py-4 text-white bg-blue-600 rounded shadow hover:bg-blue-700 focus:outline-none focus:shadow-outline focus:shadow-blue-600/20 duration-300'>
                    Create Post
                  </button>
                  <button
                    type='button'
                    onClick={() => router.push('/')}
                    className='w-full px-3 py-4 text-white bg-red-600 rounded shadow hover:bg-red-700 focus:outline-none focus:shadow-outline focus:shadow-blue-600/20 duration-300'>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PostCreate

export async function getServerSideProps(context: any) {
  const csrfToken = await getCsrfToken(context)

  return {
    props: { csrfToken },
  }
}
