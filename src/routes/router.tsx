import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SettingsContent from '../screen/contents/settingsContent'
import ChatContent from '../screen/contents/chatContent'
import HomeContent from '../screen/contents/homeContent'
import ProfileVolunteerContent from '../screen/profile'
import { LandingPage } from '../screen/landing-page'
import VolunteerContent from '../screen/volunteer'
import { Projects } from '../screen/projects'
import { LoginPage } from '../screen/login'
import App from '../App'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/home' element={<HomeContent />} />
          <Route path='/send' element={<ChatContent />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/people' element={<VolunteerContent />} />
          <Route path='/settings' element={<SettingsContent />} />
          <Route path='/profile' element={<ProfileVolunteerContent />} />
        </Route>

        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
