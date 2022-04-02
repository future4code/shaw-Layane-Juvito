// ======================================================================
// ==========Componente responsável pela estilização das pags============
// ======================================================================
import styled, { createGlobalStyle } from "styled-components";

// ============= Componente reseta o css e altera o scroll ==============
export const GlobalStyle = createGlobalStyle`
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    
  *::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }
  *::-webkit-scrollbar-thumb {
      background-color: orange;
      opacity:40%;
  }
  *::-webkit-scrollbar-track {
      background: transparent;
  }
`
// ===================== Estilização App.js =======================
export const MainContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    justify-content:center;
    min-height:100vh;
    width: 100vw;
    background-color: black;
    color:white;
`
export const Obrigatorio = styled.p`
    color: orange;
    margin:0px;
    padding-bottom: 5px;
    font-size: 0.9rem;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 0.6rem;
    }
`
// ========== Estilização comum as diferentente etapas ============
export const FieldsetForm = styled.fieldset`
    display: flex;
    flex-direction: column;
    background-color: rgb(41, 40, 40);
    gap:10px;
    border: 2px solid orange;
    font-size: 1.1rem;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 0.9rem;
    }

`
export const Legend = styled.legend`
    color: orange;
    font-weight: bold;
`
export const Button = styled.button`
    cursor: pointer;
    background-color: orange;
    font-weight: bold;
    font-size: 1rem;
    border: 1px solid orange;
    outline:none;
    border-radius:5px;
    padding: 10px;
    width:60%;
    margin: auto;

    :hover{
        background-color: transparent;
        color: orange;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 0.8rem;
    }
`
// ========== Estilização pergunta aberta e pergunta fechada ============
// --------------------------- comum as duas: ---------------------------
export const Pergunta = styled.label`
    font-size: 1.1rem;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 0.9rem;
    }
`
// --------------------------- pergunta aberta ---------------------------
export const Input = styled.input`
    border:none;
    outline:none;
    background-color: rgba(27, 26, 26, 0.795);
    box-shadow: 1px 1px 1px orange;
    color:orange;
    padding: 5px;
    font-size: 1rem;
    border-radius: 5px 0px 5px 0px;
`
// --------------------------- pergunta fechada ---------------------------
export const Select = styled.select`
    outline: none;
    border:none;
    padding: 5px;
    color:white;
    font-size:1rem;
    background-color: rgba(27, 26, 26, 0.795);
    border-radius: 5px 0px 5px 0px;
    
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 0.8rem;
    }
`
export const Options = styled.option`
    background-color: rgba(39, 38, 38, 0.952);
`
// ============================Estilização etapa final============================
export const ButtonHome = styled.button`
    cursor: pointer;
    background-color: orange;
    font-weight: bold;
    font-size: 0.9rem;
    border: 1px solid orange;
    outline:none;
    border-radius:5px;
    padding: 10px;
    width:30%;
    margin: auto;
    :hover{
        background-color: transparent;
        color: orange;
    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 0.8rem;
    }
`
export const MensagemFinal = styled.div`
    display:flex;
    flex-direction: column;
    gap:10px;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 0.85rem;
    }
`
export const ContainerRespostas = styled.div`
    border: 1px solid orange;
    border-radius: 10px 0px 10px 0px;
    padding: 0px 10px;
    font-size:0.9rem ;
    width: 80%;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 0.8rem;
    }
`
export const ContainerButoes = styled.div`
    display: flex;
    width: 100%;
    
    
`