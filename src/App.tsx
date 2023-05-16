import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar'
import {SideBar} from './components/sideBar'


function App() {
  return (
    <body>
      <div className='menu'>
        <SideBar selectedButtonType={''} />
        <div className='sideRight'>
          <NavBar />
          <div className='sideContent'>
            
            <h1>Dashboard</h1>
            
            <div className='displayContent1'>
              
            </div>
          </div>
        </div>  
      </div>
    </body>
  );
}

export default App;
