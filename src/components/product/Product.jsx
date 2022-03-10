import React from 'react';
import   "./product.css";

const Product = ({img,link}) => {
    return (
        <div className="p">
              <div className="p-browser">
                  <div className="p-circle"/>
                  <div className="p-circle"/>
                  <div className="p-circle"/>
              </div>
            <a href={link}  target="_blank">view</a>
            <img src={img} alt="" className="p-img"/>
        </div>

    );
};

export default Product;