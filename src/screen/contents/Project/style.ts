import { colors } from '@mui/material';
import { Profileimage } from './../../../images/index';
import React from "react";
import styled from 'styled-components';

export const ProjectDiv = styled.div`
    margin-top: 1%;
    width: 100%;
    height: 80vh;
    border-radius: 11px;
    background: var(--Bcolor); ;
    box-shadow: 0 1px 5px 0px gray;

    .TableDiv{
      padding: 10px;
      
    }

    .AddProject{  
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        text-align: center;
       justify-content: center;

        p{  
            margin-top: 5px;
            font-size: 13px;
            color: gray;
        }

        .addcicleIco{
            font-size: 30px;
            color: var(--Pcolor);
        }

        .addhexaIco{
            font-size: 20px;
            color: var(--Pcolor);
        }

        .div-line-holder{
            display: flex;
            align-items: center;
            width: 30%;

            .line-holder{
                border: 1px dashed var(--Pcolor);
                width: 100%;
                margin-left: 10px;
                margin-right: 10px;
            }
        }
    }
    
`;

export const BarCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7%;
  padding: 9px;
  border-bottom: 1px solid #DBDBDB;
    
    .filterSide{
        display: flex;
        align-items: center;

        .icon2{
            color: #989B9F;
            margin-left: 20px;
        }
    }
    
`;

export const InputSearchBar = styled.div`
        display: flex;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;
        padding: 5px; /* Adicionado */

        input {
            border: none;
            border-style: none;
            outline: none;
        }
        .icon {
            color: #989B9F;
        }
`;