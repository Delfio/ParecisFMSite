import styled from 'styled-components';

import { Input as RocketInput } from '@rocketseat/unform';

export const Container = styled.div`
  height: 100%;
  display: flex !important;
  align-items: 'center' !important;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  font-size: 5em;
  margin-top: 5%;
  @media (min-width: 1679px ){
    padding: 25px;
  }
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
  ::placeholder{
    color: #9e9e9e;
    margin-left: 25px !important;
  }
`;

export const Button = styled.button`

  border-radius: 7px;

  &:hover{
    background-color: #9e1e24  !important;
    box-shadow: 0 2px 2px 0 rgba(80,11,11, 0.8);
  }

`;

/* width: '100%', height: '100%', marginTop: '15px', padding: '0.7em' */