import styled from "styled-components";

export const PlaylistContainer = styled.div`
    cursor: pointer;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5px;
    border-radius:15px;
    box-shadow: 2px 2px 12px black;
    :hover{
        box-shadow: 2px 2px 12px orange;
     }
`
export const CardText = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 20px;
`
export const PlaylistImg = styled.div`
    height: 200px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: rgba(40, 37, 37, 0.745);
    font-size: 2rem;
    color: #808080;
    border:0.3px solid rgba(40, 37, 37, 0.745);
    border-radius:15px 15px 0px 0px;
`
export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    color: whitesmoke;
    font-size: 1.3rem;
    :hover{
        color: orange;
    }

    
`