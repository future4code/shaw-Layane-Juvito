import {BrowserRouter, Routes, Route } from 'react-router-dom'
import HistoryPage from '../pages/History/HistoryPage'
import HomePage from '../pages/Home/HomePage'


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/history" element={<HistoryPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router