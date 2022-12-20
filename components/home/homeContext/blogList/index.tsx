import React from 'react'
import BlogCard from '../../../blog/blogCard'

const BlogList = () => {
  return (
    <>
      <div className='grid p-4 gap-y-6'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  )
}

export default BlogList
