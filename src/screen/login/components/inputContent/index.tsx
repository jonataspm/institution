import React from "react";
import { x } from "./style";
import {Icones} from "../../images/icones/index"

type InputProps = {
    name: string;
    type: string;
    onClick?:()=> void;
  };

export function InputContent({name, type, onClick}:InputProps) {

    let src = Icones[name];

    return (
        <div>
            <div>
            <img className="icon" src={src} alt={name} onClick={onClick}/>
            </div>
            <div>
                <h5>{name}</h5> 
                <input type={type}/> 
            </div>
        </div>
    );
  }
