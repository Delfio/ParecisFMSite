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
  align-items: center;
  /* margin-right: 50% !important; */

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

export const Li = styled.li`

  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center !important;

  background-color: white;

  &:hover{
    background-color: rgba(0,0,0,0.1) !important;
  }

  img{
    height: 100%;
    width: 100%;
    background-color: none !important;
  }

  p{
    font-weight: 600;
    color: red;
  }
`;