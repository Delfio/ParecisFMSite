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

export const DivBanner = styled.div`
  @media (max-width: 760px) {
    background-image: url(${props=> props.bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 170px;
    div {
      margin-top: 25px;
      height: 80%;
      width: 100%;
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  font-size: 10em;
  margin-top: 5%;
`;

export const DivForm = styled.div`

  @media (min-width: 1690px) {
    margin-top: 5%;
  }

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
    @media (max-width: 900px) {
      margin-bottom: 15px;
    }
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

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: solid 3px rgba(0,0,0,0.2);
  }
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

export const DivLocutor = styled.div`
  flex: 1;
  width: 450px;
  height: 450px;
  min-height: 100%;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: block;
  position: relative;

  @media(min-width: 1680px) {
    width: 500px;
    height: 500px;
    margin-top: 48px;
  }
  &::after{
    content: ' ';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    z-index: 25;
    background: linear-gradient(to right, rgba(24,24,24,0) 50%, #181818 100%);
  }
`;

export const DivInfosLocutor = styled.div`
  width: 450px;
  height: 450px;
  display: block;
  position: relative;

  z-index: 5;
  /* box-shadow: -3px 0px 15px rgba(0,0,0,0.8); */

  @media(min-width: 1680px) {
    margin-top: 45px;
    width: 450px;
    height: 450px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-weight: 200;
  }

  h4{
    font-weight: 600;
    color: #ff9b00;
    font-size: 55px;
  }

  /* background-image: linear-gradient(to top right, rgba(0,0,0), rgba(0,0,0)); */

`;

export const DivInfos = styled.div`

  border-top: solid 2px rgba(255,255,255, 0.1);

`;

export const ButtonPlay = styled.button`
  background-color: #ffc107 !important;
  /* background-color: #9e1e24; */
  color: #ffc107;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  box-shadow: 0 5px #891a1f;
  i{
    display: flex;
    position: top;
    margin-top: -13px
  }
  &:hover{
    color: #e5e5e5;
    background-color: #86181d; 
  }
  @media (max-width: 395px) {
    font-size: 2px;
  }
`;