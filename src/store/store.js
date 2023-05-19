import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./category/reducer"
import productReducer from "./product/reducer"

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer
  }
})

export default store