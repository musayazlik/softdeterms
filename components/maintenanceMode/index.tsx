import styles from './style.module.scss'

const MaintenanceMode = () => {
  return (
    <div className={`${styles.context} `}>
      <div className={`${styles.fadeIn} `}>
        <img
          className={`${styles.PinziBG} `}
          src='https://newkidsontheblog.de/assets/Pinzi-BG.svg'
          alt=''
        />
        <img
          className={`${styles.PinziHead} `}
          src='https://newkidsontheblog.de/assets/Pinzi-Head.svg'
          alt=''
        />
        <img
          className={`${styles.PinziBubble} `}
          src='https://newkidsontheblog.de/assets/Pinzi-Bubble.svg'
          alt=''
        />
      </div>
      <div className={`${styles.infobox} `}>
        <a href='https://www.instagram.com/musa_yazlik/' target='_blank'>
          Instagram
        </a>
        <h1 className='title'>We are in maintenance...</h1>
        <p className='description'>
          Our site is currently under maintenance. We are trying to optimize
          your site for you. See you soon...
        </p>
      </div>
    </div>
  )
}

export default MaintenanceMode
