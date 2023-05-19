import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./category/reducer"

const store = configureStore({
  reducer: {
    category: categoryReducer
  }
})

export default store