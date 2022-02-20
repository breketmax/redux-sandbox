import React from "react";
import "./App.css";
import { Routes,Route } from "react-router-dom";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ShopHeader from "../shop-header";

const App = () => {
    return (
        <main role="main" className="container">
        <ShopHeader />
        <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/cart" element={<CartPage/>}/>
        </Routes>
        </main>
    );
};

export default App;