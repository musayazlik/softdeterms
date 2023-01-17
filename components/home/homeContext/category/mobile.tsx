import { useState } from 'react'
import { Icon } from '@iconify/react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { FILTER_POSTS, SET_POSTS } from '@store/postsSlices'

const Mobile = () => {
  const [dropdown, setDropdown] = useState<boolean>(false)
  const [filterCategory, setFilterCategory] = useState<string>('All')
  const categories = useSelector((state: any) => state.categories.data)
  const dispatch = useDispatch()

  const handleFilter = (categoryId: string, categoryName: string) => {
    if (categoryId === null) {
      axios.get(`/api/posts`).then((res) => {
        dispatch(SET_POSTS(res.data.posts))
      })
    } else {
      axios.get(`/api/posts?categoryId=${categoryId}`).then((res) => {
        dispatch(SET_POSTS(res.data.posts))
      })
    }
    setFilterCategory(categoryName)
  }

  return (
    <>
      <div className='flex xl:hidden items-center relative'>
        <button
          type='button'
          className={` duration-300 rounded-full w-10 h-10 flex justify-center items-center
          ${
            dropdown
              ? 'bg-blue-600 text-blue-300'
              : 'bg-zinc-200 text-zinc-500 dark:bg-zinc-800'
          }
          
          `}
          onClick={() => setDropdown(!dropdown)}>
          <Icon icon='icon-park-twotone:filter' className='' fontSize={24} />
        </button>
        {dropdown && (
          <div className='text-sm font-semibold text-zinc-900 dark:text-zinc-400 ml-2 absolute top-12 bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-900 rounded-md min-w-[280px] -left-5 z-20 dark:shadow-lg dark:shadow-zinc-900/80 shadow-lg shadow-zinc-400/40'>
            <ul>
              <li
                onClick={() => handleFilter('', 'All')}
                className={`py-3 px-4 hover:bg-blue-600 duration-300 hover:text-blue-900 first:rounded-t-md cursor-pointer last:rounded-b-md ${
                  filterCategory === 'All' ? 'bg-blue-600 text-blue-300' : ''
                } `}>
                All
              </li>
              {categories.map((category: any) => (
                <li
                  key={category.id}
                  onClick={() => handleFilter(category._id, category.name)}
                  className={`py-3 px-4 hover:bg-blue-600 duration-300 hover:text-blue-900 first:rounded-t-md cursor-pointer last:rounded-b-md ${
                    filterCategory === category.name
                      ? 'bg-blue-600 text-blue-300'
                      : ''
                  } `}>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default Mobile
