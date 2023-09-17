const Cart = () => {
    return (dispatch) => {
        dispatch({type: "Cart"})
    }
}

const AddToCart = (product) => {
    return (dispatch) => {
        dispatch({type: "AddToCart", payload: product})
    }
}

const RemoveFromCart = (productId) => {
    return (dispatch) => {
        dispatch({type: "RemoveFromCart", payload: productId})
    }
}

const IncreaseProductQuantity = (productId) => {
    return (dispatch) => {
        dispatch({type: "IncreaseProductQuantity", payload: productId})
    }
}

const DecreaseProductQuantity = (productId) => {
    return (dispatch) => {
        dispatch({type: "DecreaseProductQuantity", payload: productId})
    }
}

export {Cart, AddToCart, RemoveFromCart, IncreaseProductQuantity, DecreaseProductQuantity}