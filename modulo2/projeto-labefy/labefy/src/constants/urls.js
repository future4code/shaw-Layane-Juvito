let crendencial ='layane-bastos-shaw'

export const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';

export const changeUser = (data)=>{
    crendencial = data
}

export const headers = {
    headers:{
        Authorization: crendencial
    }
}

