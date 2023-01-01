import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({
    currentPage: 1,
    dataShowLenght: 3,
  })
  const totalPage = Math.ceil(data.length / pagination.dataShowLenght)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const paginationPage = (page: number) => {
    setPagination({ ...pagination, currentPage: page })
  }

  const paginationArea = () => {
    const items = []
    let threePoints = true
    for (let number = 1; number <= totalPage; number++) {
      if (
        number <= 1 ||
        number >= totalPage ||
        (number >= pagination.currentPage - 1 &&
          number <= pagination.currentPage + 1)
      ) {
        items.push(
          <li
            key={number}
            className={`page-item flex items-center justify-center border-2 border-b-4 rounded-md cursor-default duration-500 hover:scale-105 hover:duration-200 ${
              pagination.currentPage === number
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
    if (pagination.currentPage < totalPage) {
      setPagination({ ...pagination, currentPage: pagination.currentPage + 1 })
    } else {
      setPagination({ ...pagination, currentPage: totalPage })
    }
  }

  const paginationPrev = () => {
    if (pagination.currentPage > 1) {
      setPagination({ ...pagination, currentPage: pagination.currentPage - 1 })
    } else {
      setPagination({ ...pagination, currentPage: 1 })
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
