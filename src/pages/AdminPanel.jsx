import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productActions from '../store/product/actions'
import AddProduct from '../components/AddProduct'
import {Toaster, toast } from 'react-hot-toast'


const { getProduct, deleteProduct } = productActions

const AdminPanel = () => {

  const productStore = useSelector((store) => store.product)
  const dispatch = useDispatch()
  const [addProduct, setAddProduct] = useState(false)
  const [idProduct, setIdProduct] = useState(null)
  const [nameProduct, setNameProduct] = useState(null)


  const successAlert = () => {
    toast.success('Producto eliminado correctamente 👍', {
      autoClose: 5000,
    })
  }

  useEffect(() => {
    dispatch(getProduct())
  }, [])

  const handleModal = () => {
    setAddProduct(!addProduct)
  }

  const deleteProd = (e) => {
    setIdProduct(e.target.id)
    setNameProduct(e.target.name)
  }
  const confirmDelete = () => {
    dispatch(deleteProduct(idProduct))
  }

  const ModalDelete = () => {
    return (
      <div className='absolute bg-black w-full h-screen bg-opacity-70 flex items-center justify-center'>
        <div className='relative w-[700px] h-[350px] bg-myColor3-300 flex flex-col items-center justify-center gap-5 rounded-md'>
          <p className='text-2xl font-light pb-8'>¿Seguro quiere eliminar el siguiente producto?:</p>
          <p className='pb-10 text-2xl text-red-800 font-medium'>{nameProduct}</p>
          <div className='w-full flex justify-evenly'>
            <input className='font-normal text-lg py-2 px-6 bg-lime-700 text-myColor3-200 rounded-md active:bg-lime-600 cursor-pointer' type="button" value="Confirmar" onClick={confirmDelete} />
            <input className='font-normal text-lg py-2 px-6 bg-red-800 text-myColor3-200 rounded-md active:bg-red-700 cursor-pointer' type="button" value="Cancelar" onClick={() => setNameProduct(null)} />
          </div>
        </div>
      </div>
    )
  }

  useEffect(()=>{ 
    if(productStore?.product?.response === 'deleted'){
        successAlert()
    }else{
        null
    }
  }, [confirmDelete])

  return (
    <main className='flex flex-col justify-start items-center h-screen'>
      <Toaster />
      {
        addProduct ? <AddProduct visible={handleModal} /> : null
      }
      {
        nameProduct ? <ModalDelete /> : null
      }
      <p className='text-4xl mb-20 mt-40'>TODO PARA EL REPOSTERO</p>
      <div className='w-4/5 max-w-[800px] flex justify-between'>
        <button onClick={handleModal} className='bg-lime-700 text-xl font-normal flex gap-2 text-myColor3-200 rounded-md py-2 px-4 mb-6 active:bg-lime-600'>
          Agregar producto
          <svg width={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Edit / Add_Plus_Circle"><path
                id="Vector"
                d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#efefef">
              </path></g>
            </g>
          </svg>
        </button>
        <button onClick={()=>dispatch(getProduct())}><img className='w-[32px]' src="./icons/refresh.svg" alt="" /></button>
      </div>
      <table className='w-4/5 max-w-[800px]'>
        <thead>
          <tr className='grid grid-cols-8 text-lg py-2 bg-myColor3-500 bg-opacity-20 rounded-t-md mb-2'>
            <th className=' col-span-5 font-medium'>Producto</th>
            <th className='font-medium'>Stock</th>
            <th className='font-medium'>Precio/u</th>
          </tr>
        </thead>
        <tbody>
          {
            productStore.products?.response?.map((p) => {
              return (
                <tr key={p.name} className='grid grid-cols-8 border border-myColor3-400 min-h-[45px] content-center'>
                  <td className='self-center border-r h-full border-myColor3-400 border-opacity-35 col-span-5 pl-2'>{p.name}</td>
                  <td className='self-center border-r h-full border-myColor3-400 border-opacity-35 text-center'>75</td>
                  <td className='self-center border-r h-full border-myColor3-400 border-opacity-35 text-center'>${p.price}</td>
                  <td className='border-r self-center border-myColor3-400 border-opacity-35 grid grid-cols-2'>
                    <div className='flex justify-center'>
                      <img src="./icons/edit-product.svg" alt="" />
                    </div>
                    <div className='flex justify-center'>
                      <img className='cursor-pointer' src="./icons/delete.svg" alt="" onClick={deleteProd} id={p._id} name={p.name} />
                    </div>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </main>
  )
}

export default AdminPanel