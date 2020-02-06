import styled from 'styled-components';

export const Container = styled.div`
  min-width: 250px;
  min-height: 450px;
  height: 60vh;
  width: 60vw;

  display: block;

  ul {
    margin-left: 5%;
    li {
      margin-top: 5%;
    }
  }

  @media (max-width: 900px ) {
    box-shadow: 5px 5px 25px rgba(0,0,0,0);
    
  }

  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 5px 5px 18px rgba(0,0,0,0.2);
`;
