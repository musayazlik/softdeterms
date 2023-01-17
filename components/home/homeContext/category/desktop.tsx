import { SET_POSTS } from '@store/postsSlices'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListItem from './listItem'

const Desktop = ({ data }: any) => {
  const [category, setCategory] = useState<string>('')
  const [filterCategory, setFilterCategory] = useState<string>('All')
  const dispatch = useDispatch()

  const categories = useSelector((state: any) => state.categories.data)

  const handleFilter = (categoryId: string, categoryName: string) => {
    if (categoryName === 'All') {
      axios.get(`/api/posts`).then((res) => {
        dispatch(SET_POSTS(res.data.posts))
      })
    } else {
      axios.get(`/api/posts?categoryId=${categoryId}`).then((res) => {
        dispatch(SET_POSTS(res.data.posts))
      })
    }
    setFilterCategory(categoryName)
  }

  return (
    <div className='hidden xl:flex lg:flex-col items-center w-full '>
      <ul className=' overflow-auto gap-0 text-sm font-medium text-zinc-900 dark:text-white hidden lg:flex-col lg:flex lg:space-y-6 px-4 w-full py-5 '>
        <ListItem
          name={'All'}
          category={category}
          setCategory={setCategory}
          setFilterCategory={setFilterCategory}
          filterCategory={filterCategory}
          handleFilter={handleFilter}
        />
        {categories?.map((category: any, index: number) => (
          <ListItem
            key={index}
            id={category._id}
            name={category.name}
            category={category}
            setCategory={setCategory}
            setFilterCategory={setFilterCategory}
            filterCategory={filterCategory}
            handleFilter={handleFilter}
          />
        ))}
      </ul>
    </div>
  )
}

export default Desktop
