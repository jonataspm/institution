import './App.css'
import { Outlet } from 'react-router-dom'
import { SideBar } from './components/sideBar'
import { NavBar } from './components/navBar'

function App() {
  return (
    <div className='menu'>
      <SideBar selectedButtonType='' />
      <div className='sideRight'>
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default App
