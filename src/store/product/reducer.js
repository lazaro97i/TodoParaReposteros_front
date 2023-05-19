import { createReducer } from "@reduxjs/toolkit"
import productActions from "./actions"

const { getProduct } = productActions

const initialState = {
  product: [],
  products: [],
  message: []
}

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProduct.fulfilled, (state, action) => {
      let newState = {
        product: action.payload.product,
        products: action.payload.products,
        message: action.payload.message
      }
      return newState
    })
})

export default productReducer