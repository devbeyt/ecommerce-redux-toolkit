import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    cartItems:[],
    TotalQuantity:0,
    TotalAmount:0,
}


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const index = state.cartItems.findIndex(item=>item.id === action.payload.id)
    
            if(index >=0){
                state.cartItems[index].price += state.cartItems[index].price
            }else{
                const product = {...action.payload,cartQuantity:1}
                state.cartItems.push(product)
            };      
        },
        removeFromCart(state,action){
            let filtered = state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id)
            
            state.cartItems = filtered;
        }
    }
})




export const {addToCart,removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;