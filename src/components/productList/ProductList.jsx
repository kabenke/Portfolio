import React from 'react';
import   "./productList.css";
import Product from "../product/Product";
import products from "../../data";

const ProductList = () => {
    return (
        <div className="p1">
             <div className="p1-text">
                 <h1 className="p1-title">
                     Meine Zertifikat
                 </h1>
                 <p className="p1-desc">
                     ich habe an Kurse und Training teilgenommen und am Ende Zertifikaten
                     bekommen . Hiermit ein paar Davon
                 </p>
             </div>
            <div className="p1-list">
                {
                    products.map((item) =>
                    <Product key={item.id} img={item.img} link={item.link}/>
                    )
                }
            </div>
        </div>
    );
};

export default ProductList;