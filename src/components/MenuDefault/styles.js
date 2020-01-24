import styled from 'styled-components';

export const Container = styled.nav`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  background-image: linear-gradient(to bottom, #c0242b, #e3353d);

  box-shadow: 0 25px rgba(0,0,0);
`;

export const Button = styled.button`
  background-color: #9e1e24;
  color: #fff;
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
`;