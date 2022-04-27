import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import TripsDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'
import TripsListPage from '../pages/TripsListPage/TripsListPage'
import UserDetailsPage from '../pages/UserDetailsPage/UserDetailsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element = {<HomePage />} />
                <Route path = {'/login'} element = {<LoginPage />} />
                <Route path = {'/trips/list'} element = {<TripsListPage />} />
                <Route path = {'/admin/trips/:id'} element = {<TripsDetailsPage />} />
                <Route path = {'/admin/trips/create'} element = {<CreateTripPage />} />
                <Route path = {'/trips/application'} element = {<ApplicationFormPage />} />
                <Route path = {'/admin/trips/:tripIid/candidate/:id'} element = {<UserDetailsPage />} />
                <Route path = {'/admin/trips/list'} element = {<AdminHomePage />} />
            </Routes>
        </BrowserRouter>
    )
}