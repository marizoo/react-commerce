import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";
import styled from "styled-components";
import Button from "./UI/button/Button";

const ScApp = styled.div`
    width: 100vw;
    height: 100vh;
    background: var(--primary-bg);
    color: var(--primary-color);
`;

const ToggleButton = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: end;
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
                <ToggleButton>
                    <Button onClick={toggleTheme}>light/dark</Button>
                </ToggleButton>
                <Navbar />
                <Footer />
            </ScApp>
        </>
    );
};

export default App;

// https://www.youtube.com/watch?v=377AQ0y6LPA
