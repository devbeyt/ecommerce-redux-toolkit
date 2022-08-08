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
                state.total =+ 1
        }
    }
})




export const { addFavorite } = favoritesSlice.actions;
export const favoritesSelector = state => state.favorites.entities
export default favoritesSlice.reducer;