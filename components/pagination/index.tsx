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
            className={`page-item flex items-center justify-center border-2  rounded-md cursor-default ${
              pagination.currentPage === number
                ? 'outline-dashed outline-2 outline-offset-4 outline-zinc-800 border-zinc-900 bg-zinc-600 text-white '
                : 'border-zinc-300'
            }`}
            onClick={() => {
              paginationPage(number)
            }}>
            <a className='page-link w-10  h-9 flex items-center justify-center cursor-pointer'>
              {number}
            </a>
          </li>
        )
      } else {
        if (threePoints === true) {
          items.push(
            <li key={number} className='page-item threePoints'>
              <a className='page-link'>...</a>
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
          <ul className='pagination flex gap-4 items-center'>
            <li className='page-item previous'>
              <a
                className='page-link flex bg-zinc-600 px-3 py-2 rounded-md text-white cursor-pointer'
                onClick={() => {
                  paginationPrev()
                }}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-chevron-left'>
                  <polyline points='15 18 9 12 15 6'></polyline>
                </svg>
                <span>Prev</span>
              </a>
            </li>

            {paginationArea()}

            <li className='page-item next'>
              <a
                onClick={() => {
                  paginationNext()
                }}
                className='page-link flex bg-zinc-600 px-3 py-2 rounded-md text-white cursor-pointer'>
                <span>Next</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='feather feather-chevron-right'>
                  <polyline points='9 18 15 12 9 6'></polyline>
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
