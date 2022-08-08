import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    entities: [],
    total: 0,
}


const favoritesSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addFavorite(state, action) {
                state.entities.push(action.payload)
                state.total += 1
        },
        removeFromFavorites(state,action){
            let filtered = state.entities.filter(cartItem=>cartItem.id !== action.payload.id)
            state.entities = filtered;
        
    }
}})




export const { addFavorite,removeFromFavorites } = favoritesSlice.actions;
export const favoritesSelector = state => state.favorites.entities
export default favoritesSlice.reducer;