import React from 'react';
import   "./productList.css";
import Product from "../product/Product";
import products from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
             <div className="pl-text">
                 <h1 className="pl-title">
                     Meine Zertifikate
                 </h1>
                 <p className="pl-desc">
                     ich habe an Kurse und Training teilgenommen und am Ende Zertifikaten
                     bekommen . Hiermit ein paar Davon
                 </p>
             </div>
            <div className="pl-list">
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