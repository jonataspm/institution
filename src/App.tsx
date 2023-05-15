import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar'
import {SideBar} from './components/sideBar'


function App() {
  return (
    <body>
      <div className='menu'>
          <NavBar />
          <SideBar />
          
      </div>
    </body>
  );
}

export default App;
