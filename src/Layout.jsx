import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function Layout() {
  return (
    <>
     <Navbar />

     <main className=" mx-3 mt-20 lg:m-20  " >
        <Outlet />
     </main>
    
    <Footer />
    </>
  )
}

export default Layout
