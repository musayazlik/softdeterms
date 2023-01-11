import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../../../pagination'

import BlogCard from './blogCard'

const BlogList = () => {
  const [pagination, setPagination] = useState({
    currentPage: 1,
    dataShowLenght: 4,
  })
  const data = useSelector((state: any) => state.posts.data.posts)

  return (
    <>
      <div className='flex flex-col sm:grid p-4 gap-y-6'>
        {data
          ?.slice(
            (pagination.currentPage - 1) * pagination.dataShowLenght,
            pagination.dataShowLenght * pagination.currentPage
          )
          ?.map((post: any) => (
            <BlogCard key={post._id} post={post} />
          ))}

        {data?.length === 0 && (
          <div className='flex flex-col items-center justify-center'>
            <p className='text-xl text-gray-500'>No posts found</p>
          </div>
        )}

        <div className='flex justify-center'>
          <Pagination
            dataLenght={data?.length || 1}
            pagination={pagination}
            setPagination={setPagination}
          />
        </div>
      </div>
    </>
  )
}

export default BlogList
