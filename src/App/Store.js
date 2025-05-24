import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../Features/ProducrSlice'
import cartReducer from "../Features/cartSlice"
export const store=configureStore({
    reducer:{
            cart:cartReducer,
            product:productReducer,
        }
    
})