import styled from 'styled-components'

export const Container = styled.div`
    width: 296px;
    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap:10px;
    padding: 10px;
    color:whitesmoke;
    @media screen and (max-device-width : 800px) {
       width: 90%;
       padding: 10px 0;
       height: fit-content;
       border-bottom: 1px solid #bda2c63d;
    }
`

export const Avatar = styled.img`
    width: 90%;
    border-radius: 50%;
    border: 2px solid #211f1fb8;
    margin: 0 auto;
    @media screen and (max-device-width : 800px) {
       width: 80%;
    }
`

export const Link = styled.a`
    display: flex;
    gap:5px;
    text-decoration: none;
`

export const Name = styled.p`
    font-weight: 700;
    font-size: 1.1rem;
    color:whitesmoke;
    :hover{
        color: #fd882f;
    }
`

export const UserName = styled.span`
    font-weight: 200;
    font-size: 1.1rem;
    color: #cdc8c8c9;
    :hover{
        color: #fd882f;
    }
`

export const Paragraph = styled.p`
    display: flex;
    align-items: center;
    gap:5px;
    font-size: 0.9rem; 
`

export const Follow = styled.span`
    color: #cdc8c8c9;
    font-weight: 200;
`

export const FollowContainer = styled.span`
    cursor: pointer;
    display: flex;
    align-items: center;
    gap:3px;
    &:hover{
        color: #fd882f;
    >span {
        color: #fd882f  
    }
}
`

export const Bio = styled.p`
    font-size: 0.9rem;
    font-weight: 500;

`

export const RepoNumber = styled.span`
    background-color: #7c7a7a74;
    border-radius: 40%;
    font-size: 0.7rem;
    padding: 3px 7px;

`