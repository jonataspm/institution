import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { SideBar } from './components/sideBar';
import { useState } from 'react';
import { NavBar } from './components/navBar';


function App() {
  const navigate = useNavigate()


  const handleButtonClick = (content: string) => {

    console.log(content)

    switch (content) {
      case "home":
        return navigate('/home');
      case "people":
        return navigate('/people');
      case "test":
        return navigate('/test');
      case "logout":
        return navigate('/');
      default:
        return navigate('/home');
    }
  };

  return (
    <div className="menu">
      <SideBar />
      <div className="sideRight">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
