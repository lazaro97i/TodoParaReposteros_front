import React from 'react'
import { useSelector } from 'react-redux';

const EditProduct = ({ id }) => {
  const productStore = useSelector((store) => store.product)

  const productSelected = productStore?.products.response?.find(prod => prod._id === id)

  return (
    <div className='w-full h-screen absolute bg-black top-0 left-0 bg-opacity-50 flex justify-center items-center'>
      <div className='relative bg-myColor3-300 w-3/5 grid grid-cols-2 rounded-md min-w-[690px] max-w-[960px]'>
        <div className='flex flex-col items-center justify-center w-full'>
          <p>Editar Producto</p>
          <img className='w-[300px]' src={productSelected.photo} alt="" />
          <form action=""></form>
        </div>
        <div className='w-full flex flex-col items-center justify-center'>
          <p>Editar Producto</p>
          <img className='w-[300px]' src={productSelected.photo} alt="" />
          <form action=""></form>
        </div>
      </div>
    </div>
  )
}

export default EditProduct