import React, { useEffect, useRef } from 'react'
import { Icon } from '@iconify/react'

const DarkMode = ({ customClass }: { customClass: string }) => {
  const ref = useRef<HTMLInputElement>(null)
  const darkMode = (e: any): void => {
    if (e.target.checked === true) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true') {
      ref.current!.checked = true
      document.documentElement.classList.add('dark')
    } else {
      ref.current!.checked = false
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <>
      <div className={`darkInput  ${customClass}  `}>
        <input
          type='checkbox'
          className='opacity-0 absolute z-10'
          onClick={(e) => {
            darkMode(e)
          }}
          ref={ref}
        />
        <span>
          <Icon icon='icon-park-twotone:sun-one' />
        </span>
        <div className='darkButton bg-blue-500 rounded-3xl flex items-center pl-1'>
          <div className='pin pinDark bg-blue-900 rounded-full'></div>
        </div>
        <span>
          <Icon icon='ph:moon-stars-duotone' />
        </span>
      </div>
    </>
  )
}

export default DarkMode
