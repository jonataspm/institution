import {
  VolunteeDiv,
  VolunteeDiv2,
  VolunteerList,
  BarCont,
  InputSearchBar,
  ProfileCard,
} from './style'
import { ProfileImage } from '../../images'

//Material
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { useNavigate } from 'react-router'

const VolunteerContent = () => {
  const navigate = useNavigate()

  return (
    <div style={{ margin: 16 }}>
      <h1>Voluntarios</h1>
      <VolunteerList>
        <VolunteeDiv>
          <BarCont>
            <h3>Voluntarios</h3>
            <div className='filterSide'>
              <InputSearchBar>
                <SearchIcon className='icon' />
                <input type='text' placeholder='Pesquisar' />
              </InputSearchBar>
              <FilterListIcon className='icon2' />
            </div>
          </BarCont>

          <ProfileCard onClick={() => navigate('/profile')}>
            <img src={ProfileImage['jonatas']} alt='jonatas' />
            <div className='ProfileTexts'>
              <h4>Jonatas Pinheiro Mendes</h4>
              <p>Manutenção e Suporte Tecnico</p>
            </div>
            <ArrowForwardIosIcon className='ArrowIcon' />
          </ProfileCard>

          <ProfileCard>
            <img src={ProfileImage['flavio']} alt='flavio' />
            <div className='ProfileTexts'>
              <h4>Flavio Eduardo</h4>
              <p>Ambulatorio</p>
            </div>
            <ArrowForwardIosIcon className='ArrowIcon' />
          </ProfileCard>
        </VolunteeDiv>

        <VolunteeDiv2>
          <BarCont>
            <h3>Novos Voluntarios</h3>
            <div className='filterSide'>
              <InputSearchBar>
                <SearchIcon className='icon' />
                <input type='text' placeholder='Pesquisar' />
              </InputSearchBar>
              <FilterListIcon className='icon2' />
            </div>
          </BarCont>
        </VolunteeDiv2>
      </VolunteerList>
    </div>
  )
}

export default VolunteerContent
