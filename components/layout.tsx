import Footer from './footer/footer'
import Header from './header/header'

export interface props {
  children?: React.ReactNode
}

const Layout = ({ children }: props) => {
  return (
    <>
      <Header />

      {children}

      <Footer />
    </>
  )
}

export default Layout
