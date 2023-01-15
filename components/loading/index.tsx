import React from 'react'

import S from './style.module.scss'

const Loading = () => {
  return (
    <div
      className={` flex w-screen h-screen bg-white/90 dark:bg-zinc-900/90 fixed top-0 left-0 z-50 justify-center items-center `}>
      <div className={`${S.loadingContainer}`}>
        <div className={`${S.loadingCircle}`}></div>
        <div className={`${S.loadingCircle}`}></div>
        <div className={`${S.loadingCircle}`}></div>
        <div className={`${S.loadingCircle}`}></div>
        <div className={`${S.loadingCircle}`}></div>
        <div className={`${S.loadingCircle}`}></div>
      </div>
    </div>
  )
}

export default Loading
