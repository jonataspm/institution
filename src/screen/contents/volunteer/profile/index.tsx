import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { ProfileVoluenteer } from './style';
import { BarCont } from '../style';
import { Profileimage } from '../../../../images';

const ProfileVoluenteerContent = () => {
    return(
        <ProfileVoluenteer>

            <a className='TitleProfile'>
                <KeyboardBackspaceIcon className='BackPointer'/>
                <h1>Voluntarios</h1>
            </a>

            <div className='TitleProfileDisplay'>
            <BarCont>
                    <h3>Ficha do Voluntariado</h3>    
                </BarCont>
                    <div className='Part1'>
                        <div className='profilePart'>
                            <img src={Profileimage['jonatas']}  alt="jonatas" />
                            <h3>Jonatas Pinheiro Mendes</h3>
                            <p>Projeto: <b className='sit'>Manutenção e Suporte tecnico</b></p>
                            <p>Situação: <b className='sit'>Em Andamento</b></p>
                        </div>
                    </div>
                    <div className='Part2'>
                    </div>  
            </div>

        </ProfileVoluenteer>
    );
}

export default ProfileVoluenteerContent;

/* CODE SCAPE



*/