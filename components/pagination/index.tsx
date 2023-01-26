import { Icon } from '@iconify/react'
import { useDispatch, useSelector } from 'react-redux'
import { SET_CURRENT_PAGE } from '@store/postsSlices'

export default function App() {
  const dispatch = useDispatch()
  const postState = useSelector((state: any) => state.posts)
  const totalPage = Math.ceil(postState.data?.length / postState.dataShowLenght)

  const paginationPage = (page: number) => {
    dispatch(SET_CURRENT_PAGE(page))
  }

  const paginationArea = () => {
    const items = []
    let threePoints = true
    for (let number = 1; number <= totalPage; number++) {
      if (
        number <= 1 ||
        number >= totalPage ||
        (number >= postState.currentPage - 1 &&
          number <= postState.currentPage + 1)
      ) {
        items.push(
          <li
            key={number}
            className={`page-item flex items-center justify-center border-2 border-b-4 rounded-md cursor-default duration-500 hover:scale-105 hover:duration-200 ${
              postState.currentPage === number
                ? 'outline-dashed outline-2 sm:outline-offset-4 outline-offset-2 outline-zinc-800 dark:outline-zinc-900 border-zinc-900 bg-zinc-400 dark:bg-blue-700 dark:text-blue-900  '
                : 'border-zinc-300 dark:border-zinc-900'
            }`}
            onClick={() => {
              paginationPage(number)
            }}>
            <a className='text-xs sm:text-lg font-medium page-link min-h-[24px] min-w-[24px] sm:min-h-[40px] sm:min-w-[40px]  flex items-center justify-center cursor-pointer dark:text-zinc-200 duration-500 '>
              {number}
            </a>
          </li>
        )
      } else {
        if (threePoints === true) {
          items.push(
            <li key={number} className='page-item threePoints'>
              <a className='page-link '>...</a>
            </li>
          )
          threePoints = false
        }
      }
    }
    return items
  }

  const paginationNext = () => {
    if (postState.currentPage < totalPage) {
      dispatch(SET_CURRENT_PAGE(postState.currentPage + 1))
    } else {
      dispatch(SET_CURRENT_PAGE(totalPage))
    }
  }

  const paginationPrev = () => {
    if (postState.currentPage > 1) {
      dispatch(SET_CURRENT_PAGE(postState.currentPage - 1))
    } else {
      dispatch(SET_CURRENT_PAGE(1))
    }
  }

  return (
    <>
      <div className='paginationArea'>
        <nav className=''>
          <ul className='pagination flex gap-2 sm:gap-4 items-center'>
            <li className='page-item previous hover:scale-105 duration-200'>
              <a
                className='page-link flex justify-center items-center bg-blue-700 min-h-[28px] min-w-[28px] sm:px-4 sm:py-2 rounded-md text-white cursor-pointer space-x-1 border-2 border-b-4 border-blue-800'
                onClick={() => {
                  paginationPrev()
                }}>
                <Icon
                  icon='ph:caret-left-duotone'
                  inline={true}
                  className='text-xl'
                />
                <span className='hidden sm:flex text-xl'>Prev</span>
              </a>
            </li>

            {paginationArea()}

            <li className='page-item next hover:scale-105 duration-200'>
              <a
                onClick={() => {
                  paginationNext()
                }}
                className='page-link flex justify-center items-center bg-blue-700 min-h-[28px] min-w-[28px] sm:px-4 sm:py-2 rounded-md text-white cursor-pointer space-x-1 border-2 border-b-4 border-blue-800'>
                <span className='hidden sm:flex text-xl'>Next</span>
                <Icon
                  icon='ph:caret-right-duotone'
                  inline={true}
                  className='text-xl'
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
