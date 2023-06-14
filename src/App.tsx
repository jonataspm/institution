import './App.css'
import { Outlet } from 'react-router-dom'
import { SideBar } from './components/sideBar'
import { NavBar } from './components/navBar'
import { LandingPage } from './screen/LandingPage/LandingPage'

function App() {
  return (
    // <div className='menu'>
    //   <SideBar />
    //   <div className='sideRight'>
    //     <NavBar />
    //     <Outlet />
    //   </div>
    // </div>
    <LandingPage />
  )
}

export default App
