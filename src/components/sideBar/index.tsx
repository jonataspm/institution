import React, {Component} from "react";
import {ButtonBar} from "../buttonBar/index"
import { Logoutbutton, SideBarDiv } from "./style";

export class SideBar extends Component{
    render(){return (
        <SideBarDiv>
            
            <ButtonBar type='l' name='menu'/>
            <ButtonBar type='l' name='home'/>
            <ButtonBar type='l' name='people'/>
            <ButtonBar type='l' name='send'/>
            <ButtonBar type='l' name='setting'/>
           
            <Logoutbutton >
                <ButtonBar type='l' name='logout'/>
            </Logoutbutton>

        </SideBarDiv>
    );
    }
}