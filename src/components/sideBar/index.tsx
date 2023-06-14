import { ButtonBar } from "../buttonBar/index";
import { SideBarDiv } from "./style";

// Hooks
import { useState } from "react";
import { useNavigate } from 'react-router-dom'


type SideBarProps = {
  selectedButtonType: string;
};

// type SideBarState = {
//   selectedButtonType: string;
// };

interface ISideBarDiv {
  name: string;
  onclick(): void;
}

export const SideBar = ({ selectedButtonType }: SideBarProps) => {

  const navigate = useNavigate()

  const [selectedButton, setSelectedButton] = useState("home" || selectedButtonType)

  const sideBarOptions: ISideBarDiv[] = [
    {
      name: "menu",
      onclick: () => handleButtonClick("menu"),
      
    },
    {
      name: "home",
      onclick: () => {
        handleButtonClick("home")
        navigate("/home")
      }
    },
    {
      name: "people",
      onclick: () => {
        handleButtonClick("people")
        navigate("/people")
      }
    },
    {
      name: "send",
      onclick: () => {
        handleButtonClick("send")
        navigate("/send")
      }
    },
    {
      name: "setting",
      onclick: () => {
        handleButtonClick("setting")
        navigate("/setting")
      }
    },
    {
      name: "logout",
      onclick: () => navigate("/")
    }
  ]

  const handleButtonClick = (buttonType: string) => {
    setSelectedButton(buttonType)
  }
  
  return (
    <SideBarDiv>
        {sideBarOptions.map((btn, key) => (
          <ButtonBar key={key} type={selectedButton === `${btn.name}` ? "b" : "l"} name={`${btn.name}`} onClick={btn.onclick} />
        ))}
    </SideBarDiv>
    
  )
}

export default SideBar