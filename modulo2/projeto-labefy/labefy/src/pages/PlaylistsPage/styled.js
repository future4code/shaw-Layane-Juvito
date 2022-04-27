import styled from "styled-components";

export const MainContainer = styled.div`
    flex-grow:1;
    background-color: darkgray;
    background-color: rgba(40, 37, 37, 0.948);
    height: 100%;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px double  #808080;
    h1{
        color: whitesmoke;
        padding: 5px 20px;
        
    }

`
export const InputContainer = styled.div`
    color:orange;
    display: flex;
    align-items: center;
    margin-right: 20px;
    border-radius: 5px 0px;
    box-shadow: 1px 1px 4px #808080;
    padding: 5px;
    width: 40%;
    input{
        padding: 5px 10px;
        background-color: transparent;
        border: none;
        color: orange;
        outline: none;
        width: 95%;
        ::-webkit-input-placeholder { 
            padding: 5px;
            color:orange;
        }
    }
`
export const ListContainer = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 10px;
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
