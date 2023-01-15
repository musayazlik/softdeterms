import Layout from '@components/layout'
import PageTitle from '@components/pageTitle'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CATEGORIES } from 'store/categoriesSlices'
import { useQuill } from 'react-quilljs'

const PostCreate = ({ csrfToken }: any) => {
  const { quill, quillRef } = useQuill()
  const [value, setValue] = useState()
  const router = useRouter()
  const { data: session } = useSession()
  const dispatch = useDispatch()

  const categoriesData = useSelector((state: any) => state.categories.data)

  useEffect(() => {
    if (categoriesData.length === 0) {
      axios
        .get(`${process.env.NEXT_PUBLIC_URL}/api/categories`)
        .then((res) => {
          dispatch(SET_CATEGORIES(res.data.data))
        })
        .catch((err) => console.log(err))
    }
  }, [categoriesData])

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
        author: session?.user?.name,
        description: e.target.description.value,
        content: value,
        userId: session?.user?.id,
        categoryId: e.target.categoryId.value,
      }),
    })
    const data = await res.json()
    if (data.success) {
      await router.push('/')
    }
  }

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quillRef.current.firstChild.innerHTML)
        setValue(quillRef.current.firstChild.innerHTML)
      })
    }
  }, [quill, quillRef])

  return (
    <Layout>
      <div className='container mx-auto mt-40'>
        <PageTitle title='Create a Post' />
        <div className='flex justify-center'>
          <div className='w-full lg:w-1/2'>
            <form className='mb-20' onSubmit={(e) => createPost(e)}>
              <div className='mb-6'>
                <input type='hidden' name='csrfToken' value={csrfToken} />

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
                    placeholder='Type the word or term... E.g: "Next.js" or "React"'
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
                    disabled
                    defaultValue={session?.user?.name || ''}
                    placeholder='Full Name'
                    className='w-full px-3 py-3.5 text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 leading-tight text-gray-800 border-2 border-zinc-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-600 focus:shadow-blue-600/20 duration-300 focus:text-blue-700'
                  />
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='author'
                    className='block mb-1 text-lg font-bold text-zinc-700 dark:text-zinc-300'>
                    Category
                  </label>
                  <select
                    name='categoryId'
                    id='categoryId'
                    required
                    className='w-full px-3 py-3.5 text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 leading-tight text-gray-800 border-2 border-zinc-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-600 focus:shadow-blue-600/20 duration-300 focus:text-blue-700'>
                    <option value=''>Select Category</option>
                    {categoriesData?.map((category: any) => {
                      return (
                        <option key={category._id} value={category._id}>
                          {category.name}
                        </option>
                      )
                    })}
                  </select>
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='description'
                    className='block mb-1 text-lg font-bold text-zinc-700 dark:text-zinc-300'>
                    Description
                  </label>
                  <input
                    type='text'
                    name='description'
                    id='description'
                    required
                    placeholder='Description'
                    className='w-full px-3 py-3.5 text-sm font-medium dark:bg-zinc-700 dark:text-zinc-200 leading-tight text-gray-800 border-2 border-zinc-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-blue-600 focus:shadow-blue-600/20 duration-300 focus:text-blue-700'
                  />
                </div>

                <div className='mb-6'>
                  <label
                    htmlFor='content'
                    className='block mb-1 text-lg font-bold text-zinc-700 dark:text-zinc-300'>
                    Content
                  </label>
                  <div className='relative rounded-sm min-h-[200px]'>
                    <div id='content' ref={quillRef} />
                  </div>
                </div>
                <div className='mb-6 flex justify-center gap-8'>
                  <button
                    type='submit'
                    className=' px-8 py-4 text-white bg-blue-600 rounded shadow hover:bg-blue-800 focus:outline-none focus:shadow-outline focus:shadow-blue-600/20 duration-300 font-semibold'>
                    Create Post
                  </button>
                  <button
                    type='button'
                    onClick={() => router.push('/')}
                    className=' px-8 py-4 text-red-600 hover:text-white rounded hover:bg-red-800 focus:outline-none focus:shadow-outline duration-300 font-semibold'>
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
