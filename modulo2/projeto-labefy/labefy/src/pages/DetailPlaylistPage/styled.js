import styled from "styled-components";

export const MainContainer = styled.div`
    flex-grow:1;
    background-color: darkgray;
    display: flex;
    flex-direction: column;
    height: 100%;
    header{
        background-color:rgba(11, 11, 11, 0.597);
        width: 100%;
        display: flex;
        height: 30%;
        padding: 20px;
    }
    main{
        background-color: rgba(40, 37, 37, 0.948);
        flex-grow: 1;
        height: 70%;
    }
`
export const PlaylistImg = styled.div`
    height: 100%;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: rgba(40, 37, 37, 0.745);
    box-shadow: 2px 2px 12px black;
    font-size: 2rem;
    color: #808080;
    border:0.3px solid rgba(40, 37, 37, 0.745);
`
export const HeaderContainer = styled.div`
    padding: 10px 0px 0px 10px;
    flex-grow: 1;   
    color: whitesmoke;
    display: flex;
    flex-direction: column;
    gap:10px;
    h1{
        text-align: center;
        font-size: 4rem;
        cursor: pointer;
        text-shadow: 8px 8px 8px orange;
    }
`