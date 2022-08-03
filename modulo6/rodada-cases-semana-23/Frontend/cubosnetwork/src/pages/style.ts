import styled from "styled-components";
import { SquareProps } from "../interfaces/SquareProps";

export const MainContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    gap:2%;
    color:#394b50;
    max-width: 100vw;
    margin-bottom: 40px;
`

export const LegendContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    height: 45vh;
    flex-wrap: wrap;
`

export const Legend = styled.div`
    display:flex;
    align-items: center;
    gap:5px;
    margin-right: 15px;
`

export const Square = styled.div`
    width: 25px;
    height: 25px;
    background: ${(props: SquareProps)=> props.color};
    border-radius: 3px;
`

export const Legendtext = styled.p`
    color: ${(props: SquareProps)=> props.color};
    font-weight: bold;
    font-size: 0.8rem;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 10vh;
    gap: 15px;
    margin: 40px 0;
    color:#394b50;
`

export const Title = styled.h1`
    font-size: 25px;

`
export const Table = styled.table`
    border-spacing: 0px;
    width: 40%;
    text-align: center;
    font-size: 0.85rem;
    td, th {
        border: 1px solid gray;
        padding:0.5rem 0;
    }
`

export const IndexColumn = styled.th`
    width: 10%;
`

export const NameColumn = styled.th`
    width: 35%;
`

export const ParticipationColumn = styled.th`
    width: 20%;
`

export const GraphicContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
`

export const Container =styled.div`
    width: 50%;
`

export const ResetButton =styled.span`
    cursor: pointer;
    position: relative;
    display: inline-block;
    >span{
        visibility: hidden;
        background-color: #00b8e2;
        color: #fff;
        text-align: center;
        border-radius: 6px 6px 0px 6px;
        padding: 5px 10px;
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        margin-left: -60px;
    };
    &:hover{
        >span{
            visibility: visible;
        }
    };
`