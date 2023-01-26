import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../../../pagination'

import BlogCard from './blogCard'

const BlogList = () => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    dataShowLenght: 4,
  })
  const postState = useSelector((state: any) => state.posts)

  return (
    <>
      <div className='col-span-12 xl:col-span-9 lg:py-4'>
        <div className='flex flex-col sm:grid p-4 gap-y-6'>
          {postState.data
            ?.slice(
              (postState.currentPage - 1) * postState.dataShowLenght,
              postState.dataShowLenght * postState.currentPage
            )
            ?.map((post: any) => (
              <BlogCard key={post._id} post={post} />
            ))}

          {postState.data?.length === 0 && (
            <div className='flex flex-col items-center justify-center'>
              <p className='text-xl text-gray-500'>No posts found</p>
            </div>
          )}

          <div className='flex justify-center'>
            <Pagination />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogList
