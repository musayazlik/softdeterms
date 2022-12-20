import { useState } from 'react'
import BlogList from './blogList'
import ListItem from './listItem'

const HomeContext = () => {
  const [category, setCategory] = useState<string>('')
  const [activeCategory, setActiveCategory] = useState<String>('')
  return (
    <>
      <div className='container mx-auto py-20 px-6 '>
        <div className=' grid grid-cols-12 bg-white dark:bg-zinc-800 outline-double outline-zinc-50 dark:outline-zinc-900 outline-offset-4 outline-8  rounded-xl border-2 border-zinc-50 dark:border-zinc-900 gap-5 '>
          <div className='col-span-12 lg:col-span-3 bg-zinc-100 dark:bg-zinc-900 py-4 lg:rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl rounded-tl-xl '>
            <div className='flex lg:flex-col items-center'>
              <ul className=' overflow-auto gap-4 pb-6 pt-2 lg:py-0 lg:w-full text-sm font-medium text-zinc-900 dark:text-white flex lg:flex-col lg:space-y-6 px-4'>
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
          </div>
          <div className='col-span-12 lg:col-span-9 lg:py-4'>
            <BlogList />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeContext
