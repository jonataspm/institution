import React, {Component} from "react";
import {buttonBar} from '../buttonBar';


export class SideBar extends Component{
    render(){return (
        <div className="side-bar">
            <buttonBar 
            type="bold"
            name="menu"
            />
            <button>Volutarios</button>
            <button>Projetos</button>
            <button>Chat</button>
            <button>Ajuste</button>
            <button>Sair</button>
        </div>
    );
    }
}