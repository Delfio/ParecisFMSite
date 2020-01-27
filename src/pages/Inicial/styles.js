import styled from 'styled-components';

import Banner from '../../assets/bannerSite1.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Banner});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const Div = styled.div`
  margin-top: 10%;
  img{
    max-width: 180px;
    width: 100%;
    height: 100%;
  }

`;

export const DivInput = styled.div`
  display:flex;
  justify-content: center;
  /* margin-right: 50% !important; */
  margin-left: -23% !important;

  @media (max-width: 993px){
    margin-left: 0% !important;

  }

  div{
    background-color: #fff;
    border-radius: 7px;
    
    input{
      color: grey;

    }
  }
`;