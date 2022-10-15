import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const custom_theme = createTheme({
  palette: {
    primary: {
      main: '#80A3FF',
      contrastText: "#fff"
    }, 
    secondary: {
      main: '#F5B041',
      contrastText: "#fff"
    }
  },
  typography: {
     fontFamily: 'Ubuntu' 
  }
});

const App = () => {
  return (
    <>
      <ThemeProvider theme={custom_theme}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
