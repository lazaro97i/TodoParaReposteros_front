import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"


const getCategories = createAsyncThunk('categories/getCategories', async() => {
  console.log('holas');
  try{
    
    const response = await axios.get('http://localhost:8000/api/categories/')


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