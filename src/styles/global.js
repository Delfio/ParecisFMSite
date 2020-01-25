import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800&display=swap');

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    background-color: #f3f3f3;
  }

  button{
    cursor: pointer;
  }

`;