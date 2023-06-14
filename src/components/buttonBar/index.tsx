import { ButtonSideBar } from "./style";
import { Normalimage } from "../../images";
import { Boldimage } from "../../images";
import { useEffect } from "react";


export type ButtonType = "l" | "b";
export type ActiveType = "active" | "Notactive";

type ButtonBarProps = {
  type: ButtonType;
  name: string;
  onClick?: () => void;
};

export const ButtonBar = ({ type, name, onClick }: ButtonBarProps) => {
    let src = "";
    let active: ActiveType = "Notactive"
    
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
