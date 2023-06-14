import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Projects } from '../screen/projectsPage'
import { LoginPage } from '../screen/login'
import { HomePage } from '../screen/main'
import App from '../App'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/projects' element={<Projects />} />
        </Route>

        <Route path='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
