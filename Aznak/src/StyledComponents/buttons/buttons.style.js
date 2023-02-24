import styled from 'styled-components'

export const HomePageButton  = styled.button`
   
    width: 10%;
    height: 5vh;
    background: none;
    border-color: rgb(243, 243, 10) ;
    outline: none;
    /* background-color: rgb(243, 243, 10); */
    margin-top: 10px;
    border: none; 
    font-weight: bold;
    border: 2px rgb(243, 243, 10) solid;
    color: rgb(243, 243, 10);
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    transition: .5s;
    &:hover{
        background-color: rgb(243, 243, 10);
        color: black;
        transform: translateY(-5px);
    }

` 

