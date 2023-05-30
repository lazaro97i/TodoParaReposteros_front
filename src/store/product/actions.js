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

  try{
    const response = await axios.post(`${API_URL}/products`, data)
    location.reload()
    return{
      product: response.data,
      message: 'Product added successfully',
    }
  }catch(e){
    console.log(e)
    return{
      product: null,
      message: 'Add product failed :('
    }
  }
})

const deleteProduct = createAsyncThunk('products/deleteProduct', async(id) => {

  try{
    const response = await axios.delete(`${API_URL}/products`, {data:{_id: id}})
    location.reload()
    return{
      product: response.data,
      message: 'Product deleted successfully'
    }
  }catch(e){
    console.log(e)
    return{
      product: null,
      message: 'Product not found :('
    }
  }
})

const productActions = {
  getProduct,
  createProduct,
  deleteProduct
}

export default productActions