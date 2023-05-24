import { createReducer } from "@reduxjs/toolkit"
import productActions from "./actions"

const { getProduct, 
        createProduct 
      } = productActions

const initialState = {
  product: [],
  products: [],
  message: []
}

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProduct.fulfilled, (state, action) => {
      let newState = {
        products: action.payload.products.data,
        message: action.payload.message
      }
      return newState
    })
    .addCase(createProduct.fulfilled, (state, action) => {
      let newState = {
        product: action.payload.product.data,
        message: action.payload.message
      }
      return newState
    })
})

export default productReducer