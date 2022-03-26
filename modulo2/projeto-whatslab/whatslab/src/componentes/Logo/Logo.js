import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const Whats = styled.span`
  background-color:orange;
  padding:8px;
  border-radius:0px 10px 0px 10px ;
  font-weight:bold;
`
const Lab = styled.span`
  background-color:rgb(43, 42, 41);
  padding:8px 2px;
  margin-left: -8px;
  border-radius:0px 10px 0px 10px ;
  color:orange;
  font-weight:bold;
`

export default class Logo extends React.Component{
    render(){
        return(
            <div>
                <Whats>whats</Whats><Lab>Lab</Lab>
            </div>
        )
    }
}