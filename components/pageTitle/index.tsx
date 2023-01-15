import React from 'react'

interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return (
    <div className='title flex justify-center mb-20'>
      <h1 className='text-4xl font-bold tracking-tighter mx-auto cursor-default text-zinc-800 dark:text-zinc-100 relative inline-block before:w-full before:bg-blue-600 before:h-4 before:block before:absolute before:bottom-0 before:shadow-blue-600/80 before:shadow-lg before:rounded-sm before:-z-10 px-3 before:left-0 '>
        {title}
      </h1>
    </div>
  )
}

export default PageTitle
