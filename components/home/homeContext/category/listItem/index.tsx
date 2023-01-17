import { Icon } from '@iconify/react'
import React from 'react'

interface Props {
  id?: string
  name: string
  category: string
  setCategory: any
  filterCategory: string
  setFilterCategory: any
  handleFilter: any
}

const ListItem = ({
  id,
  name,
  category,
  setCategory,
  filterCategory,
  setFilterCategory,
  handleFilter,
}: Props) => {
  return (
    <li
      className={`py-3 flex flex-nowrap items-center gap-2 whitespace-nowrap px-4 w-full rounded-lg font-semibold shadow-lg text-base cursor-pointer  ${
        filterCategory === name
          ? 'tracking-tight bg-blue-700 hover:shadow-lg shadow-blue-700/50 hover:shadow-blue-600/40 text-blue-100 rounded-md outline-offset-4 outline-2 outline-blue-600/50 outline-dotted hover:bg-blue-800 cursor-pointer dark:text-blue-50 border-2 border-b-4 border-blue-800 duration-300 '
          : 'shadow-zinc-300/40 bg-white dark:bg-zinc-800 dark:shadow-zinc-900 border-2 border-b-4 border-zinc-200 dark:border-zinc-700 duration-300 '
      } `}
      onClick={() => {
        setFilterCategory(name)
        handleFilter(id, name)
      }}>
      <Icon icon='icon-park-outline:dot' />
      {name}
    </li>
  )
}

export default ListItem
