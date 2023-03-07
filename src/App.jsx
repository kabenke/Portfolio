import React, {useContext} from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import CookiesAlert from "./components/cookies/Cookies";
import {ThemeContext} from "./components/context";
import CopyRigth from "./components/copyrigth/copyRigth";

const App = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
  return (
          <div style={{backgroundColor : darkMode ?  "#222" : "#fff" , color : darkMode && "white" }}>
              <CookiesAlert/>
              <Toggle/>
              <Intro/>
              <About/>
              <ProductList/>
              <Contact/>
              <CopyRigth/>
          </div>
  );
};

export default App;