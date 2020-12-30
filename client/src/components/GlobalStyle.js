import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background: #65CCB8;
    height: 100%;
    background-image: url("../images/skyline.jpg");
    background-repeat: no-repeat;
    background-position: 36.8% 4%;
    @media (min-width: 576px) {
        background-position: 38% 10%;
    }
    @media (min-width: 768px) {
        background-position: 42% 5%;
    }
    @media (min-width: 992px) {
        background-position: 42% 0%;
    }
    @media (min-width: 1200px) {
        background-position: top;
    } ;
}
`;

export default GlobalStyle;
