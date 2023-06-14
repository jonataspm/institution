import React from 'react'
import styled from 'styled-components'

export const NavBarDiv = styled.div`
  box-shadow: 0 2px 3px -2px gray;
  background: var(--Bcolor);
  display: flex;
  min-height: 60px;
  max-height: 5%;
  padding-left: 2%;
  padding-right: 2%;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 10%;
  }
`

export const InputMenu = styled.input`
  padding: 0.5rem;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: white;
  transition: width 0.4s ease-in-out;

  width: 20%;
  height: 40px;

  &:focus {
    width: 44%;
  }
`
