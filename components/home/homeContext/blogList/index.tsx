import React from 'react'
import Pagination from '../../../pagination'
import BlogCard from './blogCard'

const BlogList = () => {
  return (
    <>
      <div className='flex flex-col sm:grid p-4 gap-y-6'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />

        <div className='flex justify-center'>
          <Pagination />
        </div>
      </div>
    </>
  )
}

export default BlogList
