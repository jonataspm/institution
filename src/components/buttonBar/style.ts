import React from "react";
import styled, { css } from 'styled-components';

interface TypeProps {
  type: 'l' | 'b';
}

export const ButtonSideBar = styled.a<TypeProps>`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  min-height: 60px;
  height: 10%;
  width: 100%;
  

    .buttonContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 60px;
      margin: auto;
    }

    &.active {
      background-color: var(--Pcolor);
      color: white;

      img{
        filter: brightness(1000%);
      }
    }
    
    &:hover:not(.active) {
      background-color: var(--SubColor);
    }
`;