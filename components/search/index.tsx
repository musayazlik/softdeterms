import { Icon } from '@iconify/react'
import React from 'react'

const Search = () => {
  const [searchStatus, setSearchStatus] = React.useState<boolean>(false)
  return (
    <>
      <div className='flex xl:hidden shadow-md shadow-zinc-200/40 dark:shadow-zinc-900 rounded-md dark:rounded-lg sm:relative'>
        {searchStatus && (
          <div className='flex gap-x-4 justify-center items-center absolute z-20 sm:top-14 mt-14 sm:mt-0 right-0 left-0 sm:left-auto mx-auto sm:right-0 px-4 py-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800 shadow-md shadow-zinc-400/40 dark:shadow-zinc-900/40 outline-dashed outline-1 outline-offset-4 outline-zinc-400 dark:outline-zinc-600 w-[90vw] max-w-sm '>
            <input
              type='text'
              placeholder='Search'
              className='px-4 py-2 border-2 border-zinc-200 dark:border-blue-600 dark:bg-zinc-900 dark:text-zinc-200  outline-none rounded-md font-medium w-full '
            />
            <button
              type='button'
              className=' bg-blue-600 w-10 h-10 flex justify-center items-center duration-200 rounded-sm border-2 border-b-4 focus:border-b-2 border-blue-900/50'>
              <Icon
                icon='material-symbols:chevron-right-rounded'
                className='text-blue-900 h-12 w-12'
              />
            </button>
          </div>
        )}

        <button
          type='button'
          className={` duration-300 rounded-full w-10 h-10 flex justify-center items-center
          ${
            searchStatus
              ? 'bg-blue-600 text-blue-300'
              : 'bg-zinc-200 text-zinc-500 dark:bg-zinc-800'
          }
          
          `}
          onClick={() => setSearchStatus(!searchStatus)}>
          <Icon icon='icon-park-twotone:search' className='' fontSize={24} />
        </button>
      </div>
    </>
  )
}

export default Search
