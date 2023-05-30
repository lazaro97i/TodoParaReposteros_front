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
    setTimeout(()=>{
      location.reload()
    },2000)
    return{
      product: response.data,
      message: 'Product added successfully',
    }
  }catch(e){
    console.log(e)
    return{
      product: null,
      message: e.response.data,
      status: e.response.status
    }
  }
})

const deleteProduct = createAsyncThunk('products/deleteProduct', async(id) => {

  try{
    const response = await axios.delete(`${API_URL}/products`, {data:{_id: id}})
    setTimeout(()=>{
      location.reload()
    },2000)
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