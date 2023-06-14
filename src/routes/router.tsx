import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SettingsContent from '../screen/contents/settingsContent'
import ChatContent from '../screen/contents/chatContent'
import ProfileVolunteerContent from '../screen/profile'
import VolunteerContent from '../screen/volunteer'
import { Projects } from '../screen/projectsPage'
import { LoginPage } from '../screen/login'
import App from '../App'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/home' element={<VolunteerContent />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/send' element={<ChatContent />} />
          <Route path='/settings' element={<SettingsContent />} />
          <Route path='/profile' element={<ProfileVolunteerContent />} />
        </Route>

        <Route path='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
