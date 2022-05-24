import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/error/ErrorPage'
import FeedPage from '../pages/feed/FeedPage'
import LoginPage from '../pages/login/LoginPage'
import PostPage from '../pages/post/PostPage'
import SignUpPage from '../pages/signup/SignUpPage'


const Router = () => {
    
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<LoginPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/feed' element={<FeedPage />} />
                <Route path='/post/:id' element={<PostPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router