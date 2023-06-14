import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar'
import {SideBar} from './components/sideBar'
import { LoginPage } from './screen/login';
import HomeContent from './screen/contents/homeContent';



function App() {
  return (
    <body>
    <div className='menu'>
      <SideBar selectedButtonType={''} />
      <div className='sideRight'>
        <NavBar />
        <div className='sideContent'>
          <HomeContent/>         
        </div>
      </div>  
    </div>
  </body>
  );
}

export default App;
