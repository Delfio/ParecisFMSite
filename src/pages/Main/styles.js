import styled from 'styled-components';

import { Input as RocketInput } from '@rocketseat/unform';

export const Container = styled.div`
  height: 100%;
  display: flex !important;
  align-items: 'center' !important;
  @media(min-width: 1680px) {
    margin-top: 35px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  font-size: 10em;
  margin-top: 5%;
`;

export const DivForm = styled.div`
  label{
    font-size: 1em;
  }
`;

export const Input = styled(RocketInput)`
  background-color: #e8e8e8 !important;
  border-radius: 5px !important;
  box-shadow: 0 2px #9e9e9e !important;
  &::placeholder{
    color: #9e9e9e;
    margin-left: 25px !important;
  }
`;

export const Button = styled.button`
  margin-top: 3%;
  border-radius: 7px;

  &:hover{
    background-color: #9e1e24  !important;
    box-shadow: 0 2px 2px 0 rgba(80,11,11, 0.8);
  }

`;

export const SectionIMG = styled.section`
  
  display: flex;
  position: relative;
  justify-content: space-around;
  background-image: url(${props=> props.bg}) !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 310px;

  border-radius: 5px;

  div {
    position: absolute;
    bottom: 0;
    display: block;
    justify-content: center;
    text-align: center;

    p {
      margin-top: -5px;
      color: white;
    }
    h5{
      font-weight: 600;
    }
  }

`;

export const Ul = styled.ul`
  li {
    transition: all .2s ease-in-out;
    
    &:hover{
      transform: scale(1.02);
    }
  }
  button{
    text-align: center;
    margin-top: -5%;
    width: 70%;
    height: 3em;
    border-radius: 7px;
    box-shadow: 0 2px 2px 0 rgba(80,11,11, 0.2);
  }
`;

export const OuvirButton = styled.button`
  &:hover{
    background-color: #9e1e24  !important;
    box-shadow: 0 2px 2px 0 rgba(80,11,11, 0.9);
  }
`;

export const Programacao = styled.div`

  background-color: #ffeb3b;

`

export const UlProgramacao = styled.ul`
  border-right: solid 3px #000;
  margin-left: 2% !important;
  display: table;
  flex-direction: column;
  min-height: 400px !important;
  div{

  }
  li {
    margin-bottom: 18px;

    h6 {
      font-size: 15px;
      margin-bottom: 15px;
    }
    
    p{
      margin: 0
    }
  }

`;