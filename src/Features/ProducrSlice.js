import Products from '../ProductsContent'
import { createSlice } from '@reduxjs/toolkit';

const initialState={
    items:Products,
    filteredItems:Products,
    searchTerm:"",
    selectedCategory:"All"
    
};

const filterProduct=(state)=>{
    return state.items.filter((product)=>{
      const matchSearch= product.title.toLowerCase().includes(state.searchTerm.toLowerCase)
      const matchCategory=state.selectedCategory==='All' || product.category===state.selectedCategory
        return matchSearch && matchCategory
    })
}
const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        setSearchTerm:(state,action)=>{
            state.searchTerm=action.payload;
            state.filteredItems=filterProduct(state)
        },
        setSelectedCategory:(state,action)=>{
            state.selectedCategory=action.payload
            state.filteredItems=filterProduct(state)
        }
    }
})

export const{setSearchTerm,setSelectedCategory}=productSlice.actions;
export default productSlice.reducer;