import React from 'react';
import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/navBar'
import {SideBar} from './components/sideBar'
import { LoginPage } from './screen/login';
import HomeContent from './screen/contents/homeContent';
import VoluenteerContent from './screen/contents/volunteer';
import ProfileVoluenteerContent from './screen/contents/volunteer/profile';


//<VoluenteerContent />

function App() {
  return (
    <body>
    <div className='menu'>
      <SideBar selectedButtonType={''} />
      <div className='sideRight'>
        <NavBar />
        <div className='sideContent'>
          <VoluenteerContent/>         
        </div>
      </div>  
    </div>
  </body>
  );
}

export default App;
