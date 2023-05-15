import React, {Component} from "react";
import {ButtonBar} from "../buttonBar/buttonBar"

const type = "";

function Tapped(){

}

export class SideBar extends Component{
    render(){return (
        <div className="side-bar">
            <ButtonBar type='normal' name='menu'/>
            <ButtonBar type='normal' name='home'/>
            <ButtonBar type='normal' name='volutarios'/>
            <ButtonBar type='normal' name='chat'/>
            <ButtonBar type='normal' name='ajuste'/>
            <ButtonBar type='normal' name='sair'/>
        </div>
    );
    }
}