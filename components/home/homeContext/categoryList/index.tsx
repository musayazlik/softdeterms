import axios from 'axios'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ListItem from './listItem'

const CategoryList = ({ data }: any) => {
  const [category, setCategory] = useState<string>('')
  const [activeCategory, setActiveCategory] = useState<String>('All')
  const dispatch = useDispatch()

  const categories = useSelector((state: any) => state.categories.data.data)

  return (
    <div className='hidden xl:flex lg:flex-col items-center w-full '>
      <ul className=' overflow-auto gap-0 text-sm font-medium text-zinc-900 dark:text-white hidden lg:flex-col lg:flex lg:space-y-6 px-4 w-full py-5 '>
        {categories?.map((category: any, index: number) => (
          <ListItem
            key={index}
            text={category.name}
            category={category}
            setCategory={setCategory}
            setActiveCategory={setActiveCategory}
            activeCategory={activeCategory}
          />
        ))}
      </ul>
    </div>
  )
}

export default CategoryList
