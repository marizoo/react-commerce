import { css, createGlobalStyle } from "styled-components";

// All global style
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
  box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif; 
}

img {
    max-width: 100%;
}

a {
    text-decoration: none;
    color: inherit;
}

button{
    cursor: pointer;
    color: inherit;
    font-family: inherit;
}

ul {
    list-style: none;
    color: inherit;
    margin: 0;
    padding: 0;
}

:root, .light-theme {
    --white-color: #ff0000;
    --gray-bg: lightgray;
    --brand-color: hotpink;
    --brand-color1: limegreen;
  }

  .dark-theme {
    --primary-color: #ff0000;
    --primary-bg: #212121;
  }


`;

// Center and Column Styles
// to use it :
// ${GloColumn};

export const GloCenter = () => {
    return css`
        display: flex;
        justify-content: center;
        align-items: center;
    `;
};

export const GloColumn = () => {
    return css`
        display: flex;
        flex-direction: column;
        align-items: center;
    `;
};

// MEDIA QUERIES
// to use it :
// ${GloSmall({
// 	flexDirection: "column" ,
// 	justifyContent : "space-between"
// 	})}
export const GloSmall = (props) => {
    return css`
        @media only screen and (max-width: 576px) {
            ${props}
        }
    `;
};

export const GloMedium = (props) => {
    return css`
        @media only screen and (max-width: 768px) {
            ${props}
        }
    `;
};

export const GloLarge = (props) => {
    return css`
        @media only screen and (max-width: 992px) {
            ${props}
        }
    `;
};

export const GloXL = (props) => {
    return css`
        @media only screen and (max-width: 1200px) {
            ${props}
        }
    `;
};

export const GloXXL = (props) => {
    return css`
        @media only screen and (max-width: 1400px) {
            ${props}
        }
    `;
};
