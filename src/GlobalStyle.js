import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


*{
    margin:0 ;
    padding:0 ;
    box-sizing: border-box ; 
    

}

body{
 
   width:100vw;
   
}

.ContainerApp{
    max-width: 1444px ;
    height: 100vh ;
    margin: 0 auto ;
    background:#E5E5E5 ;
}

.apexcharts-menu-icon svg{
   filter: brightness( 0.5) sepia(1) saturate(5) hue-rotate(250deg);  


}


`;

export default GlobalStyle;
