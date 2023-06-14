import './App.css'
import { Outlet } from 'react-router-dom'
import { SideBar } from './components/sideBar'
import { Header } from './components/header'

function App() {
  return (
    <div className='menu'>
      <SideBar />
      <div className='sideRight'>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}

export default App
