import React from "react";
import "./ProductPageComponent.css";

const ProductPageComponent = (props) => {

    const {title, products} = props;
    return (
        <div className="product-page">
            <h3 className="product-heading">{title}</h3>
            <div className="item--container">
                {products}
            </div>
        </div>
    )
}

export default ProductPageComponent;