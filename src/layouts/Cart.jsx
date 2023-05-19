import React, { useState } from 'react'

const Cart = ({view}) => {

  console.log(view);

  const [cantidad, setCantidad] = useState(1)

  const handleCantUp = () => {
    setCantidad(cantidad + 1)
  }

  const handleCantDown = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  const closeCart = () => {
    view()
  }

  const price = 3000

  const total = price * cantidad

  return (
    <div className='transition duration-[.5s] sticky w-full top-0 z-10'>
      <img onClick={closeCart} className='cursor-pointer w-[50px] absolute z-10 top-10 left-10' src="./icons/cancel.svg" alt="" />
      <div className='transition duration-[.5s] w-[500px] bg-myColor3-300 h-screen absolute right-0 top-0 z-10 flex flex-col justify-between'>
        <div className='p-4 pt-10 grid grid-cols-2 gap-3 h-[220px]'>
          <div className=''>
            <img className='object-cover h-full w-full' src="./images/molde_muffins.jpg" alt="" />
          </div>
          <div className='flex flex-wrap justify-start w-full'>
            <p className='text-lg font-normal'>Molde para muffins</p>
            <p>Precio: <span className='text-myColor1-300 font-[500]'>${price} c/u</span></p>
            <div className='flex items-center'>
              <p className='text-lg text-myColor2-300'>Cantidad:</p>
              <div className='flex flex-col justify-center items-center'>
                <img onClick={handleCantUp} className='cursor-pointer h-[15px]' src="./icons/arrow-cant-t.svg" alt="" />
                <input className=' text-center w-[50px] border-2 border-myColor2-300 rounded-md outline-none' type="text" name="cant" value={cantidad} id="cant" min='1' max='99' readOnly />
                <img onClick={handleCantDown} className='cursor-pointer h-[15px]' src="./icons/arrow-cant-b.svg" alt="" />
              </div>
            </div>
              <p className='self-end w-full bg-myColor3-400 text-lg flex justify-between items-center px-3'>Subtotal <span className='font-[600]'>${price*cantidad}</span></p>
          </div>
        </div>
        <div className='h-[150px] w-full bg-myColor3-400 flex justify-evenly items-center flex-col bg-opacity-50'>
          <p className='text-xl font-medium flex justify-evenly w-full items-center'>TOTAL: <span className='text-3xl text-myColor1-400'>${total}</span></p>
          <input className='w-[300px] bg-myColor1-300 h-[50px] text-myColor3-200 text-xl font-[600] rounded-md cursor-pointer' type="button" value="Proceder al checkout" />
        </div>
      </div>
      <div className='transition duration-[.5s] h-screen absolute right-[500px] top-0 w-full bg-myColor2-500 opacity-60 z-[1]' onClick={closeCart}>
      </div>
    </div>
  )
}

export default Cart