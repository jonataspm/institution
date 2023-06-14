import React from 'react';
import { VolunteeDiv, VolunteeDiv2, VolunteerList, BarCont, InputSearchBar, ProfileCard } from './style';
import { Profileimage } from '../../../images';

//Material
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const VoluenteerContent = () => {
    return(
        <div>

            <h1>Voluntarios</h1>
            <VolunteerList>
                <VolunteeDiv>
                    <BarCont>
                        <h3>Voluntarios</h3>
                        <div className='filterSide'>
                            <InputSearchBar>
                                <SearchIcon className='icon'/> 
                                <input type="text" placeholder='Pesquisar'/>
                            </InputSearchBar>
                            <FilterListIcon className='icon2'/>
                        </div>
                    </BarCont>

                    <ProfileCard>
                        <img src={Profileimage['jonatas']}  alt="jonatas" />
                        <div className='ProfileTexts'>
                            <h4>Jonatas Pinheiro Mendes</h4>
                            <p>Manutenção e Suporte Tecnico</p>
                        </div>
                        <ArrowForwardIosIcon className='ArrowIcon'/>
                    </ProfileCard>

                    <ProfileCard>
                        <img src={Profileimage['flavio']}  alt="flavio" />
                        <div className='ProfileTexts'>
                            <h4>Flavio Eduardo</h4>
                            <p>Ambulatorio</p>
                        </div>
                        <ArrowForwardIosIcon className='ArrowIcon'/>
                    </ProfileCard>

                </VolunteeDiv>
                    
                <VolunteeDiv2>
                    <BarCont>
                        <h3>Novos Voluntarios</h3>
                        <div className='filterSide'>
                            <InputSearchBar>
                                <SearchIcon className='icon'/> 
                                <input type="text" placeholder='Pesquisar'/>
                            </InputSearchBar>
                            <FilterListIcon className='icon2'/>
                        </div>
                    </BarCont>
                </VolunteeDiv2>
            </VolunteerList>
        </div>
    );
}

export default VoluenteerContent;