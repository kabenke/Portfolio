import React from 'react';
import   "./product.css";
import Swal from "sweetalert";

const Product = ({img,link}) => {
    return (
        <div className="p">
              <div className="p-browser">
                  <div className="p-circle"/>
                  <div className="p-circle"/>
                  <div className="p-circle"/>
              </div>
            <a href={link} onClick={
                Swal.fire({
                    imageUrl: link,
                    imageHeight: 10,
                    imageAlt: 'A tall image'
                })
            }>view</a>
            <img src={img} alt="" className="p-img"/>
        </div>

    );
};

export default Product;