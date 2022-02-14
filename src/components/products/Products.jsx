import React from "react";
import AProduct from "./aproduct/AProduct";
import { ScProducts } from "./products.styled";
import shirtMan1 from "../../images/shirt-man1.jpg";

const products = [
    {
        id: 1,
        name: "Shoes",
        description: "Running shoes.",
        price: "us$ 78",
    },
    {
        id: 2,
        name: "Macbook",
        description: "Apple Macbook",
        price: "us$ 1899",
    },
];

const Products = () => {
    return (
        <ScProducts>
            {products.map((product) => (
                <div key={product.id} className="productCard">
                    <AProduct product={product} />
                </div>
            ))}
        </ScProducts>
    );
};

export default Products;
