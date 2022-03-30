import React, {useContext} from 'react';
import   "./product.css";
import {ThemeContext} from "../context";


const Product = ({img,link}) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

   return (
        <div  className="p">
              <div className="p-browser">
                  <div className="p-circle"/>
                  <div className="p-circle"/>
                  <div className="p-circle"/>
              </div>
            <a href={link}  target="_blank">
            <img src={img} alt="" className="p-img"/>
            </a>
        </div>

    );
};

export default Product;