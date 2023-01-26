import HomeContext from '@components/home/homeContext'
import { SET_CATEGORIES } from '@store/categoriesSlices'
import { wrapper } from '@store/index'
import { SET_POSTS } from '@store/postsSlices'
import Link from 'next/link'
import React from 'react'
import { useSession } from 'next-auth/react'
import { Icon } from '@iconify/react'
import Layout from '@components/layout'

const PostIndex = () => {
  const { data: session } = useSession()
  return (
    <>
      <Layout>
        <div className='container mx-auto mt-40'>
          <div className='flex items-center justify-end mr-8 '>
            {session && (
              <Link
                href={'/posts/create'}
                className='flex gap-2 items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white dark:text-blue-900 font-semibold text-xl rounded-md border-2 border-b-4 border-blue-800 hover:scale-105 duration-300 shadow-md shadow-blue-600/40 dark:shadow-blue-800/40 mb-4'>
                <Icon icon='ic:twotone-add-circle' fontSize={28} />
                Post Create
              </Link>
            )}
          </div>
        </div>
        <HomeContext />
      </Layout>
    </>
  )
}

export default PostIndex

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    const postsRes = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`)
    const categoriesRes = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/categories`
    )
    const categoriesData = await categoriesRes.json()
    const postsData = await postsRes.json()
    await store.dispatch(SET_CATEGORIES(categoriesData.data) as any)
    await store.dispatch(SET_POSTS(postsData.posts) as any)
    return {
      props: { postsData, categoriesData },
    }
  }
)
