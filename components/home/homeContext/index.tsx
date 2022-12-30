import { Icon } from '@iconify/react'
import { useState } from 'react'
import Search from '../../search'
import BlogList from './blogList'
import CategoryList from './categoryList'

const HomeContext = () => {
  const [filterStatus, setFilterStatus] = useState<boolean>(false)
  return (
    <>
      <div className='container mx-auto py-20 px-6 '>
        <div className=' grid grid-cols-12 bg-white dark:bg-zinc-800 outline-double outline-zinc-50 dark:outline-zinc-900 outline-offset-4 outline-8  rounded-xl border-2 border-zinc-50 dark:border-zinc-900 gap-5 '>
          <div className='col-span-12 lg:col-span-3 bg-zinc-100 dark:bg-zinc-900 py-4 lg:rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl rounded-tl-xl flex justify-between px-5 lg:px-0 items-stretch '>
            <CategoryList />
            <div className='flex items-center relative'>
              <Icon
                icon='ph:funnel-duotone'
                fontSize={40}
                className={`cursor-pointer dark:text-zinc-300 bg-zinc-200 dark:bg-zinc-800 shadow-zinc-400/10 shadow-sm  p-2 rounded-full duration-200
                ${
                  filterStatus
                    ? 'shadow-sm shadow-zinc-300/60 bg-zinc-300 scale-105 dark:text-blue-800 dark:bg-blue-600 dark:border-2 dark:border-blue-800'
                    : 'dark:border-2 dark:border-zinc-600'
                }
                `}
                onClick={() => setFilterStatus(!filterStatus)}
              />
              {filterStatus && (
                <div className='text-sm font-semibold text-zinc-900 dark:text-zinc-400 ml-2 absolute top-12 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-900 rounded-md min-w-[280px] -left-5 z-20 dark:shadow-lg dark:shadow-zinc-900/80 shadow-lg shadow-zinc-400/40'>
                  <ul>
                    <li className='py-3 px-4 hover:bg-blue-600 duration-300 hover:text-blue-900 first:rounded-t-md cursor-pointer'>
                      Frontend Developer
                    </li>
                    <li className='py-3 px-4 hover:bg-blue-600 duration-300 hover:text-blue-900 cursor-pointer'>
                      Backend Developer
                    </li>
                    <li className='py-3 px-4 hover:bg-blue-600 duration-300 hover:text-blue-900 cursor-pointer'>
                      Mobile Developer
                    </li>
                    <li className='py-3 px-4 hover:bg-blue-600 duration-300 hover:text-blue-900 cursor-pointer'>
                      Project Management
                    </li>
                    <li className='py-3 px-4 hover:bg-blue-600 duration-300 hover:text-blue-900 last:rounded-b-md first:rounded-t-md cursor-pointer'>
                      Software Testing
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <Search />
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
