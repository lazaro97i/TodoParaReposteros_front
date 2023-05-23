import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = import.meta.env.VITE_APP_API_URL

const getCategories = createAsyncThunk('categories/getCategories', async() => {

  try{
    const response = await axios.get(`${API_URL}/categories`)
    return{
      categories: response.data,
      message: 'Categories found successfully'
    }

  }catch(e){
    console.log(e)
    return{
      categories: null,
      message: 'Categories not found :('
    }
  }

})

const categoryActions = {
  getCategories
}

export default categoryActions