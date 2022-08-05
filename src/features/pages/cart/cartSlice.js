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
                state.cartItems[index].cartQuantity +=1
            }else{
                const product = {...action.payload,cartQuantity:1}
                state.cartItems.push(product)
            }
           
        }
    }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;