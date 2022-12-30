import React, { useState } from 'react'
import ListItem from './listItem'

const CategoryList = () => {
  const [category, setCategory] = useState<string>('')
  const [activeCategory, setActiveCategory] = useState<String>('')
  return (
    <div className='hidden lg:flex-col items-center'>
      <ul className=' overflow-auto gap-4 pb-6 pt-2 lg:py-0 lg:w-full text-sm font-medium text-zinc-900 dark:text-white hidden lg:flex-col lg:space-y-6 px-4 '>
        <ListItem
          text='Front-end Developer'
          category={category}
          setCategory={setCategory}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <ListItem
          text='Back-end Developer'
          category={category}
          setCategory={setCategory}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <ListItem
          text='Mobile Developer'
          category={category}
          setCategory={setCategory}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <ListItem
          text='Project Management'
          category={category}
          setCategory={setCategory}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <ListItem
          text='Software Testing'
          category={category}
          setCategory={setCategory}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      </ul>
    </div>
  )
}

export default CategoryList
