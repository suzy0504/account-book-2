import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #f3e0d1;
        font-family: 'NEXON Lv1 Gothic OTF';  
        padding: 2rem;
        display: flex;
        justify-content: center;
       

        @font-face {
    font-family: 'NEXON Lv1 Gothic OTF';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
    }

    input {
        border-radius: 5px;
        height: 25px;
        border: 0;
    }

    button {
        background-color: white;
        border: 0;
        font-size: 20px;
        font-family: 'NEXON Lv1 Gothic OTF'; 
    }

    
`;

export default GlobalStyle;
