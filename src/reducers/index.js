const initialState = {
    books:[],
    booksLoading:true,
    error:null,
    cart:[],
    orderTotal:0
}

const total = (arr) => {
    let chislo = 0;
    arr.map( el => chislo += el.total);
    return chislo
}
const updateCart = (state,id,quantity) => {
    const book = state.books.find( book => book.id === id);
    const index = state.cart.findIndex(book => book.id === id);
    if (index === -1){
        const newItem = {           
            id:book.id,
            title:book.title,
            count:1,
            total:book.price
        }
        return [
            ...state.cart,
            newItem
        ]

    }
    if(quantity === 0 ){
        return [
            ...state.cart.slice(0,index),
            ...state.cart.slice(index+1)
        ];
    }
    const newItem = {           
        ...book,
        count:state.cart[index].count + quantity,
        total:state.cart[index].total + book.price*quantity
    };
    if (newItem.count === 0){
        return [
            ...state.cart.slice(0,index),
            ...state.cart.slice(index+1)
        ]
    }
    return [
        ...state.cart.slice(0,index),
        newItem,
        ...state.cart.slice(index+1)
    ];

};

const reducer = (state = initialState,action) => {
    switch (action.type){
        case "FETCH_BOOKS_SUCCESS":
            return {
                ...state,
                books:action.payload,
                booksLoading:false,
                error:null
            }
        case "FETCH_BOOKS_REQUEST":
            return {
                ...state,
                books:[],
                booksLoading:true,
                error:null
            }
            case "FETCH_BOOKS_FAILURE":
                return {
                    ...state,
                    books:[],
                    booksLoading:false,
                    error:action.payload
                }
            case "ADD_BOOK_TO_CART":{ 
                const newCart = updateCart(state, action.payload,1)
                return {
                    ...state,
                    cart:newCart,
                    orderTotal:total(newCart)
                }    
            }         
            case "DELETE_ALL_FROM_CART":{
                const newCart = updateCart(state,action.payload,0)
                return{
                    ...state,
                    cart:newCart,
                    orderTotal:total(newCart)
                }
            }
            case "REMOVE_FROM_CART":{
                const newCart = updateCart(state,action.payload,-1)
                return {
                    ...state,
                    cart:newCart,
                    orderTotal:total(newCart)
                }
            }
        default:
            return state    
    }
}

export default reducer;