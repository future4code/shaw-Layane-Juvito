import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 83% 17%;

`
export const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  border:none;
  outline: none;
  border-radius: 10px;
  outline: none;
  background-color:orange;
  font-weight: bold;
  :hover{
    background-color:#00e1ff ;
  }
`
export const ResetCOntainer = styled.div`
  color: whitesmoke;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:10px;
  img{
    max-height: 100%;
    width: 100%;
  }
`
export const Img = styled.img`
    position: relative;
    top:0px;
    max-height: 100%;
    max-width: 100%;
`
export const ProfileContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-rows: 70% 30%;
`
export const ImgBlur = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items:center;
  justify-content: center;
  backdrop-filter: blur( 19px );
  -webkit-backdrop-filter: blur( 13.5px );
`
export const ImgContainer = styled.div`
    height: 100%;
    max-width: 100%;
    background: url(${props => props.img});
    background-size: cover;
    border-bottom: 1px solid gray;
`
export const ButtonsContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-around;

`
export const PulseLike = styled.div`
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    background-color: #1c9c63;
    border-radius: 50%;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 50px;
    font-size: 18px;
    position: relative;
    :hover{
        :after,
        :before{
          content: "";
          position: absolute;
          left: -10px;
          top: -10px;
          right: -10px;
          bottom: -10px;
          border: 1px solid #1c9c63;
          border-radius: 50%;
          animation: pulse 1.5s linear infinite;
        }
        :after{
          animation-delay: .4s;
        }
    }
    
    @keyframes pulse {
        0%{
          transform: scale(.5);
          opacity:0;
        }
      
        50%{
          transform: scale(1);
          opacity:1;
        }
        100%{
          transform: scale(1.4);
          opacity:0;
        }
      }
`
export const Pulse = styled.div`
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    background-color: #e22b34;
    border-radius: 50%;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 50px;
    font-size: 18px;
    position: relative;
    :hover{
        :after,
        :before{
          content: "";
          position: absolute;
          left: -10px;
          top: -10px;
          right: -10px;
          bottom: -10px;
          border: 1px solid #e22b34;;
          border-radius: 50%;
          animation: pulse 1.5s linear infinite;
        }
        :after{
          animation-delay: .4s;
        }
    }
    
    @keyframes pulse {
        0%{
          transform: scale(.5);
          opacity:0;
        }
      
        50%{
          transform: scale(1);
          opacity:1;
        }
        100%{
          transform: scale(1.4);
          opacity:0;
        }
      }
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:1%;
    color: white;
    padding: 2% 5%;
    p{
        margin-top:2%;
        font-size: 1.4rem;
    }
    h1{
        color:#00e1ff;
    }
    h2{
        color: orange;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    p{
      font-size: 1.1rem;
    }
    h1{
      font-size: 1.3rem;
    }
    h2{
      font-size: 1.2rem;
    }
    }
   
`