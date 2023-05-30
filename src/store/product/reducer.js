import { createReducer } from "@reduxjs/toolkit"
import productActions from "./actions"

const { getProduct, 
        createProduct,
        deleteProduct
      } = productActions

const initialState = {
  product: [],
  products: [],
  message: [],
  status: 0
}

const productReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getProduct.fulfilled, (state, action) => {
      let newState = {
        products: action.payload.products,
        message: action.payload.message
      }
      return newState
    })
    .addCase(createProduct.fulfilled, (state, action) => {
      let newState = {
        product: action.payload.product,
        message: action.payload.message,
        status: action.payload.status
      }
      return newState
    })
    .addCase(deleteProduct.fulfilled, (state, action) => {
      let newState = {
        product: action.payload.product,
        message: action.payload.message
      }
      return newState
    })
})

export default productReducer