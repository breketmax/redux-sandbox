import React from "react";
import { Link } from "react-router-dom";
import "./ShopHeader.scss";

const ShopHeader = () => {
    return(
        <header className="shop-header">
            <div className="shop-name text-dark">
                <Link to="/">ReStore</Link>
            </div>
            <div className="cart-block">
                <Link to="/cart">
                <i className="bi bi-cart-fill"></i>
                    5 items ($400)
                </Link>
            </div>

        </header>
    );
};

export default ShopHeader;