import React from "react";
import { ButtonSideBar } from "./style";
import { Normalimage } from "../../images";
import { Boldimage } from "../../images";
import { useNavigate } from "react-router-dom";


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
  
  function NavTo(){
    useNavigate()(`/${name}`)
  }

    return (
      <ButtonSideBar className={active} onClick={NavTo} type={type}>
        <div className="buttonContent">
          <img className="icon" src={src} alt={name} />
          <p>{name}</p>
        </div>
      </ButtonSideBar>
    );
  }
