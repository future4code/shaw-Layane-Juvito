
// Funções responsáveis pela navegação entre as páginas

export const navigateAdmin = (navigate) => {
    navigate(`../admin/trips/list`)
}
export const navigateTrips = (navigate) => {
    navigate(`../trips/list`)
}
export const navigateTripDetail = (navigate,id) => {
    navigate(`../admin/trips/${id}`)
}
export const navigateCreateTrip = (navigate) => {
    navigate(`../admin/trips/create`)
}
export const navigateApplication = (navigate,id) => {
    navigate(`../trips/application/${id}`)
}
export const navigateUserdetail = (navigate, tripId, userId) => {
    navigate(`../admin/trips/${tripId}/candidate/${userId}`)
}
export const navigateHome = (navigate) => {
    navigate('/')
}
export const navigateLogin = (navigate) => {
    navigate('../login')
}
export const navigatePage = (navigate, path) => {
    navigate(path)
}