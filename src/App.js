import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MoreInfo from "./components/MoreInfo";
import PageNotFound from "./components/PageNotFound";
import Footer from "./components/Footer";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

export const custom_theme = createTheme({
  palette: {
    primary: {
      main: "#12cd7c",
      contrastText: "#fff",
    },
    secondary: {
      main: "#15EA23",
      contrastText: "#fff",
    },
    warning: {
      main: "#0da418",
    },
  },
  typography: {
    fontFamily: "Ubuntu",
  },
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
          <Route path="/more-info" element={<MoreInfo />}></Route>
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        <Footer/>
      </ThemeProvider>
    </>
  );
};

export default App;
