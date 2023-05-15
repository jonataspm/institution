import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar'
import {SideBar} from './components/sideBar'


function App() {
  return (
    <body>
      <div className='menu'>
        <SideBar />
        <div className='sideRight'>
          <NavBar />
          <div className='sideContent'>
            
            <h1>Dashboard</h1>
            
            <div className='displayContent1'>
              <div className='screenSideContent'>
                <p>Testando</p>
              </div>
              <div className='screenSideContentProject'>
                <p>Testando</p>
              </div>
              <div className='screenSideContent'>
                <p>Testando</p>
              </div>
            </div>

            <div className='displayContent2'>
              <div className='screenSideContent'>
                <p>Testando</p>
              </div>

              <div className='screenSideContentProject'>
                <p>Testando</p>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </body>
  );
}

export default App;
