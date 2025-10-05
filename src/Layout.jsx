import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
     <Navbar />

     <main className="m-20 " >
        <Outlet />
     </main>
    
    <Footer />
    </>
  )
}

export default Layout
