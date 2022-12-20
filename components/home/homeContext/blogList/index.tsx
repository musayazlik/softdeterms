import React from 'react'
import BlogCard from '../../../blog/blogCard'

const BlogList = () => {
  return (
    <>
      <div className='grid gap-y-6'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </>
  )
}

export default BlogList
