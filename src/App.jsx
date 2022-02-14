import React, { useState } from "react";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";
import styled from "styled-components";
import ToggleTheme from "./UI/toggleTheme/ToggleTheme";
import Products from "./components/products/Products";

const ScApp = styled.div`
    width: 100vw;
    background: var(--primary-bg);
    color: var(--primary-color);
    position: relative;
`;

const App = () => {
    const [mainCss, setMainCss] = useState("light");
    const toggleTheme = () => {
        setMainCss((currentCss) => (currentCss === "light" ? "dark" : "light"));
    };

    return (
        <>
            <GlobalStyles />
            <ScApp className={`${mainCss}-theme`}>
                <ToggleTheme onToggleTheme={toggleTheme} mainCss={mainCss} />
                <Navbar />
                <Products />
                <Footer />
            </ScApp>
        </>
    );
};

export default App;

// https://www.youtube.com/watch?v=377AQ0y6LPA
// till: 25:28
