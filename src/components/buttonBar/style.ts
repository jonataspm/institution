import styled from 'styled-components'

export const ButtonSideBar = styled.a`
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
  
    &.active {
    background-color: #04AA6D;
    color: white;
  }
  
  &:hover:not(.active) {
    background-color: #555;
    color: white;
  }
`;