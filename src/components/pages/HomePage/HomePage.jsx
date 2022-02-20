import React from "react";
import BookList from "../../book-list";
import ShoppingCartTable from "../../shopping-cart-table";
import "./HomePage.css";

const HomePage = () => {
    return (
        <>
            <BookList />
            <ShoppingCartTable />
        </>
    );
};

export default HomePage;