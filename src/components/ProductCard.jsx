import React, { useRef, useState } from 'react'

const ProductCard = ({ name, price, photo }) => {

  const [cantidad, setCantidad] = useState(1)

  const handleCantUp = () => {
    setCantidad(cantidad + 1)
  }

  const handleCantDown = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  return (
    <div className=' h-[400px] bg-myColor3-100 w-[300px] flex flex-wrap items-start justify-center rounded-b-md self-center'>
      <img className='h-[190px] w-full object-cover ' src={photo} alt="" />
      <div className=' w-full px-3'>
        <p className='font-semibold text-xl text-myColor2-300'>{name}</p>
        <p className='py-3 text-lg text-myColor2-300'>Precio: <span className='text-myColor1-200 font-semibold text-lg pl-2'>${price}</span></p>
      </div>
      <div className='flex items-center justify-between w-full self-end px-3'>
        <div className='flex items-center'>
          <p className='text-lg text-myColor2-300'>Cantidad:</p>
          <div className='flex flex-col justify-center items-center'>
            <img onClick={handleCantUp} className='cursor-pointer h-[15px]' src="./icons/arrow-cant-t.svg" alt="" />
            <input className=' text-center w-[50px] border-2 border-myColor2-300 rounded-md outline-none' type="text" name="cant" value={cantidad} id="cant" min='1' max='99' readOnly />
            <img onClick={handleCantDown} className='cursor-pointer h-[15px]' src="./icons/arrow-cant-b.svg" alt="" />
          </div>
        </div>
        <input className=' cursor-pointer w-[135px] bg-myColor1-400 text-myColor3-200 font-normal py-1 px-2 rounded-md' type="button" value="Agregar al carro" />
      </div>
      <p className='self-end h-[40px] pt-1 w-full text-center font-medium bg-myColor1-300 text-myColor3-200 text-lg cursor-pointer rounded-b-md hover:bg-myColor1-200 transition duration-[.3s]'>Ver Mas</p>
    </div>
  )
}

export default ProductCard