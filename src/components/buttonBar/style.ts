import React from "react";
import styled from 'styled-components';

export const ButtonSideBar = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  min-width: 60px;
  max-width: 5%;
  min-height: 60px;
  max-height: 5%;
  text-decoration: none;
  text-align: center;

    .buttonContent{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    img,p{
      margin: 0;
    }

    p{
      flex: 1;
    }


    &.active {
      background-color: #04AA6D;
      color: white;
    }
    
    &:hover:not(.active) {
      background-color: var(--SubColor);
    }
`;