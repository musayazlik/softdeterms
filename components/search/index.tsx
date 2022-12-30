import { Icon } from '@iconify/react'
import React from 'react'

const Search = () => {
  return (
    <>
      <div className='flex shadow-md shadow-zinc-200/40 dark:shadow-zinc-900 rounded-md dark:border-2 dark:border-zinc-800 dark:rounded-lg'>
        <input
          type='text'
          placeholder='Search'
          className='px-4 py-2 border-2 border-zinc-200 dark:bg-zinc-800 dark:border-0 dark:text-zinc-200  outline-none rounded-l-md font-medium'
        />
        <button
          type='button'
          onClick={() => window.location.reload()}
          className='bg-zinc-200 dark:bg-zinc-700 dark:hover:bg-blue-600 h-full px-3 hover:bg-blue-600 hover:text-white  duration-300 rounded-r-md '>
          <Icon
            icon='ph:magnifying-glass-duotone'
            className='text-zinc-600 hover:text-white duration-200'
            fontSize={24}
          />
        </button>
      </div>
    </>
  )
}

export default Search
