import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "../screen/login"
import { HomePage } from "../screen/main"
import { TestComponent } from "../screen/test"
import App from "../App"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<App />} >
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path='/test' element={<TestComponent />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}