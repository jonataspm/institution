import React from "react";
import { ButtonSideBar } from "./style";
import { Normalimage } from "../../images";
import { Boldimage } from "../../images";


type ButtonType = "l" | "b";

type ButtonBarProps = {
  type: ButtonType;
  name: string;
  onClick?: () => void;
};

export function ButtonBar({ type, name, onClick }: ButtonBarProps) {
    let src = "";
    let active = ""
    
    if (type === "l") {
      src = Normalimage[name];
      active = "Notactive"
    } else if (type === "b") {
      src = Boldimage[name];
      active = "active"
    }
  
    return (
      <ButtonSideBar className={active} onClick={onClick} type={type}>
        <div className="buttonContent">
          <img className="icon" src={src} alt={name} />
          <p>{name}</p>
        </div>
      </ButtonSideBar>
    );
  }
