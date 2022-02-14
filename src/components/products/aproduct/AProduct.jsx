import React from "react";
import { ScAproduct } from "./aproduct.styled";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import shirtMan1 from "../../../images/shirt-man1.jpg";

const AProduct = ({ product }) => {
    return (
        <ScAproduct>
            <div className="cardMedia">
                <img src={shirtMan1} alt="shirt" />
            </div>

            <div className="cardContent">
                <div className="cardContent-title">
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                </div>

                <div className="cardContent-desc">
                    <p>{product.description}</p>
                </div>
                <div className="cardContent-button">
                    <MdOutlineAddShoppingCart style={{ fontSize: "22px" }} />
                </div>
            </div>
        </ScAproduct>
    );
};

export default AProduct;
