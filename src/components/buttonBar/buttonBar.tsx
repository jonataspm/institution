import React from "react";
import { ButtonSideBar } from "./style";

type ButtonBarProps = {
    type: string;
    name: string;
}

export function ButtonBar({type, name }: ButtonBarProps) {
    const src = `../../images/${type}/${name}.svg`;
    const href =`#${name}`;

    return (
        <ButtonSideBar href={href}>
            <img src={src} alt={name}/>
            <p>{name}</p>
        </ButtonSideBar>
    );
}
