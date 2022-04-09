import styled from "styled-components";

export const MainContainer = styled.div`
    flex-grow:1;
    background-color: darkgray;
    background-color: rgba(40, 37, 37, 0.948);
    height: 100%;
    h1{
        color: whitesmoke;
        padding: 5px 20px;
        border-bottom: 3px double  #808080;
    }
`
export const ListContainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
`
export const PlaylistContainer = styled.div`
    cursor: pointer;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5px;
    box-shadow: 2px 2px 12px black;
    :hover{
        box-shadow: 2px 2px 12px orange;
     }
`
export const ScrollContainer = styled.div`
    width: 100%;
    display:flex;
    overflow: auto;
    flex: none;
    flex-flow: column nowrap;
    overflow-y: scroll;
    height:90%;
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
     
`