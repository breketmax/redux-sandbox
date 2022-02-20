import React from "react";
import "./BookListItem.scss";

interface arrType{
    book:itemType,
    onAddedToCart:any
}
interface itemType{
    author:string,
    title:string,
    price:number,
    coverImage:string,
}
const BookListItem = ({book,onAddedToCart}:arrType):JSX.Element => {
    const {author,title,price,coverImage} = book;
    return(
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="book-cover" />
            </div>
            <div className="book-details">
                <div className="book-title">{title}</div>
                <div className="book-author">{author} </div>
                <div className="book-price">{price}$</div>
                <button className="btn btn-primary add-to-cart" onClick={onAddedToCart}>Add to cart</button>
            </div>
        </div>
    );
};
export default BookListItem;