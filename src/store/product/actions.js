import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = import.meta.env.VITE_APP_API_URL

const getProduct = createAsyncThunk('products/getProduct', async() => {

  try{
    const response = await axios.get(`${API_URL}/products`)
    return{
      products: response.data,
      message: 'Products found successfully'
    }

  }catch(e){
    console.log(e)
    return{
      products: null,
      message: 'Products not found :('
    }
  }
})

const createProduct = createAsyncThunk('products/createProduct', async(data) => {
  console.log(data)
  try{
    const response = await axios.post(`${API_URL}/products`, data)
    return{
      product: response,
      message: 'Product added successfully'
    }
  }catch(e){
    console.log(e)
    return{
      product: null,
      message: 'Add product failed :('
    }
  }
})

const productActions = {
  getProduct,
  createProduct
}

export default productActions