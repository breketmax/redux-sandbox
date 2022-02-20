import React from "react";
import { connect } from "react-redux";
import "./ShoppingCartTable.scss";
import { deleteAllFromCart,removeFromCart,addedToCart } from "../../actions";

const ShoppingCartTable:React.FC<any> = ({cart,orderTotal,onDelete,onIncrease,onDecrease}) => {
    return (
        <div className="shopping-cart-table">
            <h2>Your order</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map( (el:any) => {
                            return (
                                <tr key={el.id}>
                                    <td>{cart.indexOf(el)+1}</td>
                                    <td>{el.title}</td>
                                    <td>{el.count}</td>
                                    <td>${el.total}</td>
                                    <td>
                                         <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(el.id)}><i className="bi bi-trash-fill" /></button>
                                         <button className="btn btn-outline-success btn-sm" onClick={() => onIncrease(el.id)}><i className="bi bi-plus-circle-fill" /></button>
                                         <button className="btn btn-outline-warning btn-sm" onClick={() => onDecrease(el.id)}><i className="bi bi-dash-circle-fill" /></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
            <div className="total">
                Total: ${orderTotal}
            </div>
        </div>
    );
};

const mapStateToProps = ({cart,orderTotal}:any) => {
    return {
        cart,
        orderTotal
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return {
        onIncrease:(id:any) => dispatch(addedToCart(id)),
        onDelete:(id:any) => dispatch(deleteAllFromCart(id)),
        onDecrease:(id:any) => dispatch(removeFromCart(id))
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable);