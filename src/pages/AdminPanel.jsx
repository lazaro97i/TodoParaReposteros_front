import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import productActions from '../store/product/actions'

const { getProduct } = productActions

const AdminPanel = () => {

  const productStore = useSelector((store) => store.product)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProduct())
  }, [])

  return (
    <main className='flex flex-col justify-start items-center h-screen pt-40'>
      <p className='text-4xl mb-20'>TODO PARA EL REPOSTERO</p>
      <div className='w-4/5 max-w-[800px]'>
        <button className='bg-lime-700 text-xl font-normal flex gap-2 text-myColor3-200 rounded-md py-2 px-4 mb-6 active:bg-lime-600'>
          Agregar producto
          <svg width={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <g id="Edit / Add_Plus_Circle"><path
                id="Vector"
                d="M8 12H12M12 12H16M12 12V16M12 12V8M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#efefef"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round">
              </path></g>
            </g>
          </svg>
        </button>
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
                  <tr className='grid grid-cols-2 text-center h-full'>
                    <td className='border-r self-center border-myColor3-400 border-opacity-35'>up</td>
                    <td className='text-center self-center'>del</td>
                  </tr>
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