import React, { useState } from 'react'
import { ButtonBar } from '../buttonBar/index'
import { Logoutbutton, SideBarDiv } from './style'

type SideBarProps = {
  selectedButtonType: string
}

export const SideBar: React.FC<SideBarProps> = ({ selectedButtonType }) => {
  const [buttonType, setButtonType] = useState(selectedButtonType)

  const handleButtonClick = (buttonType: string) => {
    setButtonType(buttonType)
  }

  return (
    <SideBarDiv>
      <ButtonBar
        type={buttonType === 'menu' ? 'b' : 'l'}
        name='menu'
        onClick={() => handleButtonClick('menu')}
      />
      <ButtonBar
        type={buttonType === 'home' ? 'b' : 'l'}
        name='home'
        onClick={() => handleButtonClick('home')}
      />
      <ButtonBar
        type={buttonType === 'people' ? 'b' : 'l'}
        name='people'
        onClick={() => handleButtonClick('people')}
      />
      <ButtonBar
        type={buttonType === 'send' ? 'b' : 'l'}
        name='send'
        onClick={() => handleButtonClick('send')}
      />
      <ButtonBar
        type={buttonType === 'setting' ? 'b' : 'l'}
        name='setting'
        onClick={() => handleButtonClick('setting')}
      />
      <Logoutbutton>
        <ButtonBar
          type={buttonType === 'logout' ? 'b' : 'l'}
          name='logout'
          onClick={() => handleButtonClick('logout')}
        />
      </Logoutbutton>
    </SideBarDiv>
  )
}

