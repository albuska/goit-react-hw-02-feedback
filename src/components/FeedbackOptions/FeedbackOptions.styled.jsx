import styled from "styled-components";

export const Button = styled.button`
    width: 70px;
    padding: 5px;
    background-color: #6B8E23;
    color: #ffffff;
    border: none; 
    cursor: pointer;

 :not(:last-child) {
    margin-right: 20px;

 :hover {
    background-color: #008000; 
 }
 }
`