import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-flow:column nowrap;
    flex-grow:1;
    height: 100%;
    background-color: rgba(40, 37, 37, 0.948);
`
export const ScrollContainer = styled.div`
display:flex;
overflow: auto;
flex: none;
flex-flow: column nowrap;
overflow-y: scroll;
height:85%;
`
export const TrackContainer = styled.div`
    display: grid;
    grid-template-columns:5% 5% 30% 50% 10%;
    padding: 5px 0px;
    margin: 0px 10px;
    border-radius: 15px;
    p{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: #999797; 
    }
    
    :hover{
        background-color: rgba(255, 166, 0, 0.388);
    }
`
export const TrackIcon = styled.div`
    font-size: 2rem;
    padding: 5px;
    background-color: rgba(11, 11, 11, 0.597);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #808080; 
    
    
`
export const TrackInfo = styled.div`
    
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    color: #999797; 

    h3{
        color:whitesmoke
    } 
`
export const Input = styled.input`
    padding: 10px;
    border:none;
    outline: none;
    border-radius: 5px;
    background-color:rgba(11, 11, 11, 0.597);
    color: orange;
    
`
export const DeleteButton = styled.div`
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
color: #808080;
:hover{
    color: orange;
}
   
`

export const InputContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 25% 25% 25% 10%;
    grid-template-rows: auto;
    justify-content: center;
    gap: 10px;
    padding: 10px 0px;
`
export const Button = styled.div`
font-size: 2rem;
color:#808080;

:hover{
    color:orange
}
   
`
