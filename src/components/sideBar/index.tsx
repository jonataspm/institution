import { ButtonBar } from '../buttonBar/index'
import { SideBarDiv } from './style'

// Hooks
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ISideBarDiv {
  name: string
  onclick(): void
}

export const SideBar = () => {
  const navigate = useNavigate()

  const [selectedButton, setSelectedButton] = useState('home')

  const sideBarOptions: ISideBarDiv[] = [
    {
      name: 'menu',
      onclick: () => handleButtonClick('menu'),
    },
    {
      name: 'home',
      onclick: () => {
        handleButtonClick('home')
        navigate('/home')
      },
    },
    {
      name: 'people',
      onclick: () => {
        handleButtonClick('people')
        navigate('/people')
      },
    },
    {
      name: 'briefcase',
      onclick: () => {
        handleButtonClick('briefcase')
        navigate('/projects')
      },
    },
    {
      name: 'send',
      onclick: () => {
        handleButtonClick('send')
        navigate('/send')
      },
    },
    {
      name: 'setting',
      onclick: () => {
        handleButtonClick('setting')
        navigate('/settings')
      },
    },
    {
      name: 'logout',
      onclick: () => navigate('/login'),
    },
  ]

  const handleButtonClick = (buttonType: string) => {
    setSelectedButton(buttonType)
  }

  return (
    <SideBarDiv>
      {sideBarOptions.map((btn, key) => (
        <ButtonBar
          key={key}
          type={selectedButton === `${btn.name}` ? 'b' : 'l'}
          name={`${btn.name}`}
          onClick={btn.onclick}
        />
      ))}
    </SideBarDiv>
  )
}

export default SideBar
