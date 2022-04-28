import styled from 'styled-components'

export const AdiminHomePageContainer = styled.div`
    width: 100%;
    min-height: 80vh;
    background-color: #151414;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    
`
export const TripsListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,auto);
    grid-template-rows:auto;
    row-gap: 10px;
    column-gap: 10px;
`
export const CardContainer = styled.div`
    width: 30vh;
    height: 30vh;
    background: url(${props => props.image});
    background-size: cover;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid #FF951A; */
    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    :hover{
        opacity: 60%;
    }
    div{
        cursor: pointer;
        width: 100%;
        height: 90%;
    }
    p{
        color: #FF951A;
        font-size: 1.4rem;
        font-weight: bold;
        -webkit-text-stroke: 0.7px black;
        text-align: center;
        padding: 5px;
    }
    span{
        cursor: pointer;
        height: 10%;
        border-radius: 10px;
        border:none;
        margin-right: 10px;
        margin-bottom: 10px;
        color:white;
        align-self: end;
        font-size: 1.3rem;
        :hover{
            color: #18F2A4;
        }
    }

   
`
export const CreateCardContainer = styled.div`
    cursor: pointer;
    width: 30vh;
    height: 30vh;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid #FF951A; */
    -webkit-box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    color: #452ED1;
    background: url('https://img.freepik.com/vetores-gratis/astronauta-trabalhando-no-laptop-e-escrevendo-a-ilustracao-dos-desenhos-animados-conceito-de-negocio-de-ciencia-isolado-estilo-flat-cartoon_138676-3447.jpg');
    background-size: cover;
    font-size: 1.4rem;
    font-weight: bold;
    -webkit-text-stroke: 0.7px black;
    text-align: center;
    padding: 5px;
    :hover{
        opacity: 60%;
    }
`