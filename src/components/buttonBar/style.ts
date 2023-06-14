import styled from 'styled-components'

interface TypeProps {
  type?: 'l' | 'b'
}

export const ButtonSideBar = styled.a<TypeProps>`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  min-height: 40px;
  height: 10%;
  width: 100%;
  cursor: pointer;

  .buttonContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60px;
    margin: auto;
    font-size: 12px;
  }

  &.active {
    background-color: var(--Pcolor);
    color: white;

    img {
      filter: brightness(1000%);
    }
  }

  &:hover:not(.active) {
    background-color: var(--SubColor);
  }
`
