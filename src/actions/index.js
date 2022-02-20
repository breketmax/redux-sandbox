const requestedBooks = () => {
    return "FETCH_BOOKS_REQUEST"
}
const dispatchBooks = (newBooks) => {
    return{
        type:"FETCH_BOOKS_SUCCESS",
        payload:newBooks
    }
};
const errorBooks = (error) => {
    return{
        type:"FETCH_BOOKS_FAILURE",
        payload:error
    }
}
const addedToCart = (id) => {
    return {
        type:"ADD_BOOK_TO_CART",
        payload:id
    }
};
const deleteAllFromCart = (id) => {
    return{
        type:"DELETE_ALL_FROM_CART",
        payload:id
    }
}
const removeFromCart = (id) => {
    return{
        type:"REMOVE_FROM_CART",
        payload:id
    }
}
const fetchBooks =  (dispatch, bookstoreService) => () => {
    dispatch(requestedBooks());
    bookstoreService.getBooks()
      .then((data) => dispatch(dispatchBooks(data)))
      .catch((err) => dispatch(errorBooks(err)));
}







export {
    fetchBooks,
    addedToCart,
    deleteAllFromCart,
    removeFromCart
}