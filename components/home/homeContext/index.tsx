import { Icon } from '@iconify/react'

import Search from '../../search'
import BlogList from './blogList'
import DesktopCategories from './category/desktop'
import MobileCategories from './category/mobile'

const HomeContext = () => {
  return (
    <>
      <div className='container mx-auto pt-6 pb-20 px-6 '>
        <div className=' grid grid-cols-12 bg-white dark:bg-zinc-800 outline-double outline-zinc-200 dark:outline-zinc-900 outline-offset-4 outline-8  rounded-xl border-2 border-zinc-200 dark:border-zinc-900 gap-5 '>
          <div className='col-span-12 xl:col-span-3 bg-zinc-100 dark:bg-zinc-900 xl:rounded-tl-xl xl:rounded-bl-xl xl:rounded-tr-none rounded-tr-xl rounded-tl-xl flex justify-between px-5 xl:px-0 items-stretch py-4 xl:py-0 '>
            <DesktopCategories />
            <MobileCategories />
          </div>
          <BlogList />
        </div>
      </div>
    </>
  )
}

export default HomeContext
