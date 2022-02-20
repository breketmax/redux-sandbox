import { connect } from "react-redux";
import React, { useEffect } from "react";
import BookListItem from "../book-list-item";
import "./BookList.css";
import { WithBookstoreService } from "../hoc";
import { fetchBooks,addedToCart } from "../../actions";
import { compose } from "../../utils";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


interface arrType{
    books:itemType[],
    onAddedToCart:any
}
interface itemType{
    author:string,
    title:string
    id:number,
    price:number,
    coverImage:string,  
}
interface propsType{
    books:itemType[],
    booksLoading:boolean,
    error:string,
    fetchBooks:any,
    onAddedToCart:any
}

const BookListContainer:React.FC<propsType> = ({books,error,booksLoading,fetchBooks,onAddedToCart}) => {
    useEffect(()=>{
        fetchBooks();
    },[fetchBooks]);

    if(booksLoading){
       return <Spinner />
    }

    if(error){
        return <ErrorIndicator />
    }

    return <BookList books={books} onAddedToCart={onAddedToCart}/>

};

const BookList:React.FC<arrType> = ({books,onAddedToCart}) => {
    return (
        <ul className="book-list">
        {books.map((book:itemType) => {
            return <li key ={book.id}>
                        <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
                   </li>
        })}
    </ul>
    )
};

const mapStateToProps = ({books,booksLoading,error}:propsType) => {
    return {books, booksLoading,error}
};

const mapDispatchToProps = (dispatch:any,{bookstoreService}:any) => {
    return {
       fetchBooks:fetchBooks(dispatch,bookstoreService),
       onAddedToCart:(id:number) => dispatch(addedToCart(id))
    }
};

export default compose(
        WithBookstoreService(),
        connect(mapStateToProps,mapDispatchToProps)
    )(BookListContainer);