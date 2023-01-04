import React, { useState } from 'react'
import ListItem from './listItem'

const CategoryList = () => {
  const [category, setCategory] = useState<string>('')
  const [activeCategory, setActiveCategory] = useState<String>('All')
  return (
    <div className='hidden xl:flex lg:flex-col items-center w-full '>
      <ul className=' overflow-auto gap-0 text-sm font-medium text-zinc-900 dark:text-white hidden lg:flex-col lg:flex lg:space-y-6 px-4 w-full py-5 '>
        <ListItem
          text='All'
          category={category}
          setCategory={setCategory}
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
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
