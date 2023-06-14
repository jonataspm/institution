import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import { ProfileVolunteer } from './style'
import { BarCont } from '../volunteer/style'
import { ProfileImage } from '../../images'
import { useNavigate } from 'react-router'

const ProfileVolunteerContent = () => {
  const navigate = useNavigate()
  
  return (
    <ProfileVolunteer>
      <p  className='TitleProfile'>
        <KeyboardBackspaceIcon
          className='BackPointer'
          onClick={() => {
            navigate(-1)
          }}
        />
        <h1>Voluntários</h1>
      </p>

      <div className='TitleProfileDisplay'>
        <BarCont>
          <h3>Ficha do Voluntariado</h3>
        </BarCont>
        <div className='Part1'>
          <div className='profilePart'>
            <img src={ProfileImage['jonatas']} alt='jonatas' />
            <h3>Jonatas Pinheiro Mendes</h3>
            <p>
              Projeto: <b className='sit'>Manutenção e Suporte tecnico</b>
            </p>
            <p>
              Situação: <b className='sit'>Em Andamento</b>
            </p>
          </div>
        </div>
        <div className='Part2'></div>
      </div>
    </ProfileVolunteer>
  )
}

export default ProfileVolunteerContent
