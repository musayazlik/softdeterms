import axios from 'axios'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import ListItem from './listItem'

const CategoryList = () => {
  const [categories, setCategories] = useState<any>([])
  const [category, setCategory] = useState<string>('')
  const [activeCategory, setActiveCategory] = useState<String>('All')

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_URL}/api/categories`).then((res) => {
      setCategories(res.data)
    })
  }, [])

  console.log(categories)

  return (
    <div className='hidden xl:flex lg:flex-col items-center w-full '>
      <ul className=' overflow-auto gap-0 text-sm font-medium text-zinc-900 dark:text-white hidden lg:flex-col lg:flex lg:space-y-6 px-4 w-full py-5 '>
        {categories?.data?.map((category: any) => (
          <ListItem
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
