import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import productActions from '../store/product/actions'

const { createProduct } = productActions

const AddProduct = () => {

  const [newImg, setNewImg] = useState('')
  const dispatch = useDispatch()

  const inpName = useRef('')
  const inpDesc = useRef('')
  const inpPhoto = useRef('')
  const inpPrice = useRef('')
  const inpStock = useRef('')

  const handleProduct = (e) => {
    const data = {
      name: inpName.current.value,
      description: inpDesc.current.value,
      photo: inpPhoto.current.value,
      price: inpPrice.current.value,
      stock: inpStock.current.value
    }
    dispatch(createProduct(data))
  }

  return (
    <div className='w-screen h-screen bg-black absolute bg-opacity-70 flex items-center justify-center'>
      <img className='w-[50px] absolute top-[30px] right-[30px] cursor-pointer' src="./icons/cancel.svg" alt="" />
      <div className='relative bg-myColor3-300 w-3/5 flex flex-col items-center justify-center  rounded-md min-w-[690px] max-w-[960px]'>
        <p className='py-10 text-3xl font-normal'>Agregar nuevo producto</p>
        <img className='w-[200px] h-[180px]' src="" alt="" />
        <form action="get" className='grid grid-cols-1 w-3/6 gap-6 py-12'>
          <label className='flex justify-between gap-5'>
            <p>Name:</p>
            <input ref={inpName} className='focus:border-b-myColor2-100 w-[380px] outline-none bg-transparent border-b border-1-myColor3-400' type="text" name="name" id="name" />
          </label>
          <label className='flex justify-between gap-5'>
            <p>Descripcion:</p>
            <input ref={inpDesc} className=' w-[380px] focus:border-b-myColor2-100 outline-none bg-transparent border-b border-1-myColor3-400' type="text" name="desc" id="desc" />
          </label>
          <label className='flex justify-between gap-5'>
            <p>Foto:</p>
            <input ref={inpPhoto} className=' w-[380px] focus:border-b-myColor2-100 outline-none bg-transparent border-b border-1-myColor3-400' type="url" name="photo" id="photo" />
          </label>
          <div className='w-full flex justify-between pt-5'>
            <label className='flex gap-5'>
              <p>Precio:</p>
              <input ref={inpPrice} placeholder='$' min='0' className='w-24 focus:border-b-myColor2-100 outline-none bg-transparent border-b' type="number" name="price" id="price" />
            </label>
            <label className='flex gap-5'>
              <p>Stock:</p>
              <input ref={inpStock} min='0' className='w-24 focus:border-b-myColor2-100 outline-none bg-transparent border-b' type="number" name="stock" id="stock" />
            </label>
          </div>
        </form>
        <div className='flex w-4/5 justify-evenly pb-20'>
          <button onClick={handleProduct} className='font-normal text-lg py-2 px-6 bg-lime-700 text-myColor3-200 rounded-md active:bg-lime-600'>Agregar</button>
          <button className='font-normal text-lg py-2 px-6 bg-red-800 text-myColor3-200 rounded-md active:bg-red-700'>Cancelar</button>
        </div>
      </div>
    </div>  
  )
}

export default AddProduct