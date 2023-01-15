import { Icon } from '@iconify/react'
import { useState } from 'react'
import Search from '../../search'
import BlogList from './blogList'
import CategoryList from './categoryList'

const HomeContext = () => {
  const [filterStatus, setFilterStatus] = useState<boolean>(false)
  const [filterCategory, setFilterCategory] = useState<string>('')
  return (
    <>
      <div className='container mx-auto pt-6 pb-20 px-6 '>
        <div className=' grid grid-cols-12 bg-white dark:bg-zinc-800 outline-double outline-zinc-200 dark:outline-zinc-900 outline-offset-4 outline-8  rounded-xl border-2 border-zinc-200 dark:border-zinc-900 gap-5 '>
          <div className='col-span-12 xl:col-span-3 bg-zinc-100 dark:bg-zinc-900 xl:rounded-tl-xl xl:rounded-bl-xl xl:rounded-tr-none rounded-tr-xl rounded-tl-xl flex justify-between px-5 xl:px-0 items-stretch py-4 xl:py-0 '>
            <CategoryList />
            <div className='flex xl:hidden items-center relative'>
              <button
                type='button'
                className={` duration-300 rounded-full w-10 h-10 flex justify-center items-center
          ${
            filterStatus
              ? 'bg-blue-600 text-blue-300'
              : 'bg-zinc-200 text-zinc-500 dark:bg-zinc-800'
          }
          
          `}
                onClick={() => setFilterStatus(!filterStatus)}>
                <Icon
                  icon='icon-park-twotone:filter'
                  className=''
                  fontSize={24}
                />
              </button>
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
          <div className='col-span-12 xl:col-span-9 lg:py-4'>
            <BlogList />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeContext
