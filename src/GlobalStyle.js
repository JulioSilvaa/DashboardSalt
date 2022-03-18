import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    margin:0 ;
    padding:0 ;
    box-sizing: border-box ;
}

body{
    background:#E5E5E5 ;
    max-width: 100% ;
}

.ContainerApp{
    max-width: 1444px ;
    margin: 0 auto ;
}

`;

export default GlobalStyle;
