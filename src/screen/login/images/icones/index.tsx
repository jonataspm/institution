import lockslash from './lock-slash.svg';
import lock from './lock.svg'
import mail from './mail.svg'
import user from './user.svg'


interface IconPaths {
    [key: string]: string;
  }
  
export const Icones : IconPaths = {
    Usuario: user,
    mail: mail,
    Senha: lock,
    SenhaCortada: lockslash
  }
  