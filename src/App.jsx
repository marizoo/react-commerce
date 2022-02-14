import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => {
    return (
        <div>
            <GlobalStyles />
            <Navbar />
            <Footer />
        </div>
    );
};

export default App;

// https://www.youtube.com/watch?v=377AQ0y6LPA
