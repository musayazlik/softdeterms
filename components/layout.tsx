/** Next Router */
import { useRouter } from 'next/router'

/** Components */
import Footer from './footer/footer'
import Header from './header/header'

export interface props {
  children?: React.ReactNode
}

const Layout = ({ children }: props) => {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-between'>
        <div className=''>
          <Header />
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
