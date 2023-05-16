import React from "react";
import { ButtonSideBar } from "./style";
import { Normalimage } from "../../images";
import { Boldimage } from "../../images";

type ButtonBarProps = {
    type: string;
    name: string;
}

export function ButtonBar({type, name }: ButtonBarProps) {
    let src = "";

    if (type === "l") {
        src = Normalimage[name];
      } else if (type === "b") {
        src = Boldimage[name];
      }

    const href =`#${name}`;

    return (
        <ButtonSideBar href={href}>
            <div className="buttonContent">
                <img className="icon" src={src} alt={name}/>
                <p>{name}</p>
            </div>
        </ButtonSideBar>
    );
}
