
// Funções responsáveis pela navegação entre as páginas

export const navigateAdmin = (navigate) => {
    navigate(`admin/trips/list'`)
}
export const navigateTrips = (navigate) => {
    navigate(`trips/list`)
}
export const navigateTripDetail = (navigate) => {
    navigate(`admin/trips/:id`)
}
export const navigateCreateTrip = (navigate) => {
    navigate(`admin/trips/create`)
}
export const navigateApplication = (navigate) => {
    navigate(`../trips/application`)
}
export const navigateUserdetail = (navigate) => {
    navigate(`admin/trips/:tripIid/candidate/:id`)
}
export const navigateHome = (navigate) => {
    navigate('/')
}
export const navigateLogin = (navigate) => {
    navigate('login')
}