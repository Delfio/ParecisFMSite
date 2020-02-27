import styled from "styled-components";

import { Input as RocketInput } from "@rocketseat/unform";

export const Container = styled.div`
  height: 100%;
  display: flex !important;
  align-items: "center" !important;
  @media (min-width: 1680px) {
    margin-top: 35px;
  }
`;

export const DivBanner = styled.div`
  @media (max-width: 760px) {
    background-image: url(${props => props.bg});
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

  label {
    font-size: 1em;
  }
`;

export const Input = styled(RocketInput)`
  background-color: #e8e8e8 !important;
  border-radius: 5px !important;
  box-shadow: 0 2px #9e9e9e !important;
  &::placeholder {
    color: #9e9e9e;
    margin-left: 25px !important;
  }
`;

export const Button = styled.button`
  margin-top: 3%;
  border-radius: 7px;

  &:hover {
    background-color: #9e1e24 !important;
    box-shadow: 0 2px 2px 0 rgba(80, 11, 11, 0.8);
  }
`;

export const SectionIMG = styled.section`
  display: flex;
  position: relative;
  justify-content: space-around;
  background-image: url(${props => props.bg}) !important;
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
    h5 {
      font-weight: 600;
    }
  }
`;

export const Ul = styled.ul`
  li {
    transition: all 0.2s ease-in-out;
    @media (max-width: 900px) {
      margin-bottom: 15px;
    }
    &:hover {
      transform: scale(1.02);
    }
  }
  button {
    text-align: center;
    margin-top: -5%;
    width: 70%;
    height: 3em;
    border-radius: 7px;
    box-shadow: 0 2px 2px 0 rgba(80, 11, 11, 0.2);
  }
`;

export const OuvirButton = styled.button`
  &:hover {
    background-color: #9e1e24 !important;
    box-shadow: 0 2px 2px 0 rgba(80, 11, 11, 0.9);
  }
`;

export const Programacao = styled.div`
  background-color: #ffeb3b;
`;

export const UlProgramacao = styled.ul`
  /* border-right: solid 3px #000; */
  margin-left: 2% !important;
  display: table;
  flex-direction: column;
  min-height: 400px !important;

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: solid 3px rgba(0, 0, 0, 0.2);
  }
  div {
  }
  li {
    margin-bottom: 18px;

    h6 {
      font-size: 15px;
      margin-bottom: 15px;
    }

    p {
      margin: 0;
    }
  }
`;

export const DivLocutor = styled.div`
  /* width: 250px; */
  height: 20vh;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  border-radius: 50%;

  @media (min-width: 1680px) {
    height: 27vh;
  }
`;

export const DivInfosLocutor = styled.div`
  margin: 0 !important;
  padding: 0 !important;
  margin-left: -20px !important;

  @media (min-width: 1680px) {
    margin-left: -50px !important;
  }
`;

export const DivInfos = styled.div`
  border-top: solid 2px rgba(255, 255, 255, 0.1);
`;

export const ButtonPlay = styled.button`
  background-color: #ffc107 !important;
  /* background-color: #9e1e24; */
  color: #ffc107;
  border: none;
  cursor: pointer;
  border-radius: 7px;
  box-shadow: 0 5px #891a1f;
  i {
    display: flex;
    position: top;
    margin-top: -13px;
  }
  &:hover {
    color: #e5e5e5;
    background-color: #86181d;
  }
  @media (max-width: 395px) {
    font-size: 2px;
  }
`;

export const DivPrincipal = styled.div`
  @media (min-width: 1800px) {
    margin-top: 14vh;
    height: 600px;
    align-content: stretch;
    flex: 1;
  }
`;
