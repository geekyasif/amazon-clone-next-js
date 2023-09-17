
const initialState = {
    products: []
}

export default function cartReducer(state = initialState, action) {

    if (action.type === "AddToCart") {

        if(state.products.length == 0) {
            let cart = {
                id: action.payload.payload.id,
                title: action.payload.payload.title,
                description: action.payload.payload.description,
                image: action.payload.payload.image, 
                price: action.payload.payload.price, 
                category: action.payload.payload.category, 
                rating: action.payload.payload.rating,
                qty: 1
            }

            state.products.push(cart)
        }else{
            let check = false;
            state.products.map((item, key) => {
                if(item.id === action.payload.payload.id){
                    state.products[key].qty++;
                    check = true;
                }
            })

            if(!check){
                let _cart =  {
                    id: action.payload.payload.id,
                    title: action.payload.payload.title,
                    description: action.payload.payload.description,
                    image: action.payload.payload.image, 
                    price: action.payload.payload.price, 
                    category: action.payload.payload.category, 
                    rating: action.payload.payload.rating,
                    qty: 1
                }

                state.products.push(_cart)
            }
        }

        return {

            ...state,
            products: [...state.products]

        }

    } else if (action.type === "RemoveFromCart") {
        
        let index = state.products.findIndex((item) => item.id === action.payload.payload.id)

        let newCart = [...state.products]
        
        if(index >= 0) {

            newCart.splice(index, 1)

        }else{


        }
        return {

            products : newCart

        }

    } else if (action.type === "IncreaseProductQuantity") {

        state.products.map((item, key) => {
            if(item.id === action.payload.payload.id){
                state.products[key].qty++;
            }
        })

        
        return {

            ...state,
            products: [...state.products]

        }

    } else if (action.type === "DecreaseProductQuantity") {

       
            state.products.map((item, key) => {
                if(item.id === action.payload.payload.id){
                    if(state.products[key].qty > 1 ){
                        state.products[key].qty--;
                    }
                }
            })
     

        return {

            ...state,
            products: [...state.products]

        }

    } else {

        return state

    }

}