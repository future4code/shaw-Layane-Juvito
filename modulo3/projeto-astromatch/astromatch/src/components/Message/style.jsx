import styled from "styled-components";

export const MyMessage = styled.div`
display:flex ;
justify-content:right;
color:darkgray;

padding-right:0px;
p{
  padding: 5px;
  font-size:1.1rem
}

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  p{
    font-size: 0.9rem;
  }
}
`
export const Chat = styled.div`
background-color: rgba(255, 166, 0, 0.281);
padding:0px 20px;
box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
border-radius:15px 15px 0px 20px;
overflow-wrap:break-word;
max-width: 250px;
margin:10px;
div{
  width:100%;
  display:flex;
  justify-content:flex-end;
}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  max-width:150px;
  font-size: 12px;
}
`
export const DoubleCheck = styled.div`
position: relative;
bottom:5px;
right: -10px;
height: 5px;
`
export const MatchMessage = styled.div`
display:flex ;
justify-content:left;
color:darkgray;
font-size:1.1rem;
p{
  display:flex;
  flex-direction:column;
  padding:10px 20px ;
  background-color: rgba(23, 23, 23, 0.433);
  overflow-wrap:break-word;
  max-width: 250px;
  box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
  border-radius:20px 15px 15px 0px;
}
span{
  color:orange ;
  opacity:60% ;
  font-weight:500;
  font-size:1rem ;
  
}
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  p{
    font-size: 0.9rem;
    max-width: 150px;
  }
  span{
    font-size: 0.8rem;
  }
}
`
