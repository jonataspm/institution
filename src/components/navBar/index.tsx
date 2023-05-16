import React, {Component} from "react";
import { InputMenu, NavBarDiv } from "./style";
 
export class NavBar extends Component{
    render(){return (
            <NavBarDiv>
            <img className="logo" src="" alt="logo" />
            <InputMenu type="text" placeholder="Pesquisar" name="" id=""/>
           
            <div className='profile'>
                <a>Olá, joojontas</a>
                <img src="" alt=""/>
                <i/>
            </div>

      </NavBarDiv>
    );
    }
  }