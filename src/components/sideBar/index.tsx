import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { Logoutbutton, SideBarDiv } from './style'
import { ButtonBar } from '../buttonBar'

interface NavButtonProps {
  iconName: string
  label: string
  onclick: () => void
}

export const SideBar = () => {
  const navigate = useNavigate()

  const navButtons: NavButtonProps[] = [
    {
      iconName: 'menu',
      label: 'Inicio',
      onclick: () => {
        navigate('/home')
      },
    },
    {
      iconName: 'people',
      label: 'Voluntarios',
      onclick: () => {
        navigate('/test')
      },
    },
    {
      iconName: 'send',
      label: 'Chat',
      onclick: () => {
        navigate('/chat')
      },
    },
  ]

  return (
    <SideBarDiv>

      {navButtons.map((nav) => {
        return (
          <ButtonBar
            type={nav.iconName === "menu" ? "b" : "l"}
            name={nav.label}
            onClick={() => nav.onclick()}
          />
        )
      })}
    </SideBarDiv>
  )
}