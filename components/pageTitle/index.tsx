import React from 'react'

interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return (
    <div className='title flex justify-center'>
      <h1 className='text-4xl font-bold mx-auto mb-4 cursor-default text-zinc-900 dark:text-zinc-100 relative inline-block'>
        {title}
        <span className='w-full bg-blue-600 h-4 block relative -translate-y-4 -z-10 rounded-sm shadow-lg shadow-blue-600/80'></span>
      </h1>
    </div>
  )
}

export default PageTitle
