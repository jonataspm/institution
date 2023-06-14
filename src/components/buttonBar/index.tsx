import { ButtonSideBar } from "./style";
import { Normalimage } from "../../images";
import { Boldimage } from "../../images";
import { useEffect, useState } from "react";


export type ButtonType = "l" | "b";
export type ActiveType = "active" | "Notactive";

type ButtonBarProps = {
  type: ButtonType;
  name: string;
  onClick?: () => void;
};

export const ButtonBar = ({ type, name, onClick }: ButtonBarProps) => {

    const [src, setSrc] = useState("")
    const [active, setActive] = useState<ActiveType>("Notactive")

    useEffect(() => {
      switch(type) {
        case "l":
          setSrc(Normalimage[name])
          setActive("Notactive")
          break
        case "b":
          setSrc(Boldimage[name])
          setActive("active")
          break
        default:
          return 
        }
    }, [type, name])
  
    return (
      <ButtonSideBar className={active} onClick={onClick} type={type}>
        <div className="buttonContent">
          <img className="icon" src={src} alt={name} />
          <p>{name}</p>
        </div>
      </ButtonSideBar>
    );
  }
