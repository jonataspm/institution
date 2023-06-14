import { InputMenu, NavBarDiv } from './style'
import { Logo } from '../../images/index'
import { useNavigate } from 'react-router'

export const Header = () => {
  const navigate = useNavigate()
  return (
    <NavBarDiv>
      <img
        className='logo'
        style={{ width: 60, height: 60, cursor: 'pointer' }}
        src={Logo['logo']}
        alt='logo'
        onClick={() => {
          navigate('/home')
        }}
      />

      <InputMenu type='text' placeholder='Pesquisar' name='' id='' />

      <div className='profile'>
        <a>Olá, Jonatas</a>
        <img src='' alt='' />
        <i />
      </div>
    </NavBarDiv>
  )
}
