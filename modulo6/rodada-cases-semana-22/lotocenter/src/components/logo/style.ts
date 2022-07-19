import styled from 'styled-components'

export const LogoContainer = styled.div`
    display:grid;
    margin:100px;
    grid-template-rows: 35px 35px;
    grid-template-columns: 35px 35px;
    grid-template-areas: 
    "topLeft topRight"
    "bottomLeft bottomRight";
`

export const TopLeftHeart= styled.div`
    grid-area: 'topLeft';
    margin:5px;
    height: 30px;
    width: 30px;
    position: relative;
    background-color: white;

    &:before,
    &:after {
        content: "";
        background-color: white;
        border-radius: 50%;
        height: 30px;
        position: absolute;
        width: 30px;
    };
    &:before {
        top: -15px;
    };

    &:after {
        left: 15px;
    };
`
export const TopRightHeart = styled.div`
    grid-area: 'topRight';
    margin:5px;
    height: 30px;
    transform: rotate(-90deg);
    width: 30px;
    position: relative;
    background-color: white;

    &:before,
    &:after {
        content: "";
        background-color: white;
        border-radius: 50%;
        height: 30px;
        position: absolute;
        width: 30px;
    };
    &:before {
        top: -15px;
    };

    &:after {
        left: 15px;
    };
`

export const BottomRightHeart = styled.div`
    grid-area: 'bottomRight';
    margin:5px;
    height: 30px;
    transform: rotate(-270deg);
    width: 30px;
    position: relative;
    background-color: white;

    &:before,
    &:after {
        content: "";
        background-color: white;
        border-radius: 50%;
        height: 30px;
        position: absolute;
        width: 30px;
    };
    &:before {
        top: -15px;
    };

    &:after {
        left: 15px;
    };
`
export const BottomLeftHeart = styled.div`
    grid-area: 'bottomLeft';
    margin:5px;
    height: 30px;
    transform: rotate(-180deg);
    width: 30px;
    position: relative;
    background-color: white;

    &:before,
    &:after {
        content: "";
        background-color: white;
        border-radius: 50%;
        height: 30px;
        position: absolute;
        width: 30px;
    };
    &:before {
        top: -15px;
    };

    &:after {
        left: 15px;
    };
`

