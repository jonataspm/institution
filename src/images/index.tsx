import menu from './normal/menu.svg'
import home from './normal/home.svg'
import send from './normal/send.svg'
import logout from './normal/logout.svg'
import people from './normal/people.svg'
import setting from './normal/setting.svg'
import briefcase from './normal/briefcase.svg'
import Bmenu from './bold/menu.svg'
import Bhome from './bold/home.svg'
import Bsend from './bold/send.svg'
import Blogout from './bold/logout.svg'
import Bpeople from './bold/people.svg'
import Bsetting from './bold/setting.svg'
import Bbriefcase from './bold/briefcase.svg'
import jonatas from './profiles/jonatas.png'
import flavio from './profiles/flavio.png'
import logo from './assets/logo.png'
import fakeDash from './profiles/fakeDash.png'
import logoLP from './profiles/logo.png'
import joao from './profiles/Joao.png'
import fakeChat from './profiles/fakeChat.png'
interface ImagePaths {
  [key: string]: string
}

export const Normalimage: ImagePaths = {
  menu: menu,
  home: home,
  send: send,
  logout: logout,
  people: people,
  setting: setting,
  briefcase: briefcase,
}

export const Boldimage: ImagePaths = {
  menu: Bmenu,
  home: Bhome,
  send: Bsend,
  logout: Blogout,
  people: Bpeople,
  setting: Bsetting,
  briefcase: Bbriefcase,
}

export const ProfileImage: ImagePaths = {
  jonatas: jonatas,
  flavio: flavio,
  joao: joao,
  logo: logoLP,
  fakeDash: fakeDash,
  fakeChat: fakeChat,
}

export const Logo: ImagePaths = {
  logo: logo,
}
