import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productActions from '../store/product/actions'
import { Toaster, toast } from 'react-hot-toast'

const { createProduct } = productActions



const AddProduct = ({ visible }) => {

  const productStore = useSelector((store) => store.product)
  const [newImg, setNewImg] = useState('')
  const [prod, setProd] = useState(false)
  const dispatch = useDispatch()

  const inpName = useRef('')
  const inpDesc = useRef('')
  const inpPhoto = useRef('')
  const inpPrice = useRef(1)
  const inpStock = useRef(1)

  const successAlert = () => {
    toast.success('Producto agregado correctamente 👍', {
      autoClose: 5000,
    })
  }
  const errorAlert = () => {
    productStore?.message?.message?.map((err) => {
      toast.error(err.message, { autoClose: 5000 })
    })
  }

  const handleProduct = () => {
    const data = {
      name: inpName.current.value,
      description: inpDesc.current.value,
      photo: inpPhoto.current.value,
      category_id: '646fc35e5d58cc4705ef9660',
      price: inpPrice.current.value,
      stock: inpStock.current.value
    }
    dispatch(createProduct(data))
  }

  useEffect(() => {
    if (productStore?.product?.success === true) {
      successAlert()
    } else{
      errorAlert()
    }
  }, [productStore])

  const handlePhoto = () => {
    setNewImg(inpPhoto.current.value)
  }
  const handleModal = () => {
    visible()
  }

  const ConfirmProduct = () => {
    return (
      <div className='w-full h-full rounded-md bg-black absolute bg-opacity-60 flex items-center justify-center'>
        <div className='bg-myColor3-300 w-[500px] h-[200px] flex flex-col items-center justify-center gap-10 rounded-sm'>
          <p className='font-medium text-xl'>CONFIRMAR PRODUCTO ?</p>
          <form action="" className='flex w-full justify-evenly'>
            <input onClick={handleProduct} className='font-normal text-lg py-2 px-6 bg-lime-700 text-myColor3-200 rounded-md active:bg-lime-600 cursor-pointer' type="button" value="Confirmar" />
            <button onClick={() => setProd(!prod)} className='font-normal text-lg py-2 px-6 bg-red-800 text-myColor3-200 rounded-md active:bg-red-700'>Cancelar</button>
          </form>
        </div>
      </div>
    )
  }


  return (
    <div className='w-screen h-screen bg-black absolute bg-opacity-70 flex items-center justify-center z-0'>
      <Toaster />
      <img onClick={handleModal} className='w-[50px] absolute top-[30px] right-[30px] cursor-pointer' src="./icons/cancel.svg" alt="" />
      <div className='relative bg-myColor3-300 w-3/5 flex flex-col items-center justify-center  rounded-md min-w-[690px] max-w-[960px] z-10'>
        <p className='py-10 text-3xl font-normal'>Agregar nuevo producto</p>
        <img className='w-[200px] h-[180px] rounded-md' src={newImg} alt="" />
        <form method="get" className='grid grid-cols-1 w-3/6 gap-6 py-12'>
          <label className='flex justify-between gap-5'>
            <p>Nombre:</p>
            <input ref={inpName} className='focus:border-b-myColor2-100 w-[380px] outline-none bg-transparent border-b border-1-myColor3-400' type="text" name="name" id="name" />
          </label>
          <label className='flex justify-between gap-5'>
            <p>Descripcion:</p>
            <input ref={inpDesc} className=' w-[380px] focus:border-b-myColor2-100 outline-none bg-transparent border-b border-1-myColor3-400' type="text" name="desc" id="desc" />
          </label>
          <label className='flex justify-between gap-5'>
            <p>Foto:</p>
            <input onChange={handlePhoto} ref={inpPhoto} className=' w-[380px] focus:border-b-myColor2-100 outline-none bg-transparent border-b border-1-myColor3-400' type="url" name="photo" id="photo" />
          </label>
          <div className='w-full flex justify-between pt-5'>
            <label className='flex gap-5'>
              <p>Precio:</p>
              <input ref={inpPrice} placeholder='$' min='1' className='w-24 focus:border-b-myColor2-100 outline-none bg-transparent border-b' type="number" name="price" id="price" />
            </label>
            <label className='flex gap-5'>
              <p>Stock:</p>
              <input ref={inpStock} min='1' className='w-24 focus:border-b-myColor2-100 outline-none bg-transparent border-b' type="number" name="stock" id="stock" />
            </label>
          </div>
          <div className='flex justify-evenly w-full pt-10'>
            <input onClick={() => setProd(!prod)} className='font-normal text-lg py-2 px-6 bg-lime-700 text-myColor3-200 rounded-md active:bg-lime-600 cursor-pointer' type="button" value="Agregar" />
            <button onClick={handleModal} className='font-normal text-lg py-2 px-6 bg-red-800 text-myColor3-200 rounded-md active:bg-red-700'>Cancelar</button>
          </div>
        </form>
        {
          prod ? <ConfirmProduct /> : null
        }
      </div>
    </div>
  )
}

export default AddProduct