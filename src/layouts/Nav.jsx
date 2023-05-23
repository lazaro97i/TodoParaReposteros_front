import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'


const Nav = () => {

  const [viwCart, setViewCart] = useState(false)

  function handleCart(){
    setViewCart(!viwCart)
  }


  return (
    <>
      {
        viwCart
        ?
        <Cart 
        view={handleCart}
        />
        :
        null
      }
      <div className=' w-full bg-myColor1-200 flex flex-col pt-5 items-center gap-3'>
        <div className='flex justify-evenly items-center w-full'>
          <p className=' w-[200px] text-center text-4xl font-extrabold text-myColor3-200'>Todo Para el Repostero</p>
          <label className='flex flex-wrap gap-1 items-center justify-center'>
            <input className=' text-myColor2-500 w-[400px] h-[35px] pl-2 py-2 outline-none font-[400]' type="search" name="search" id="search" placeholder='Buscar productos' />
            <img src="./icons/search.svg" alt="" />
          </label>
          <div className='flex flex-col gap-2 items-center justify-center'>
            <Link onClick={handleCart} className=' bg-myColor1-300 p-2 pr-4 rounded-xl shadow-myColor2-300 shadow-sm'>
              <img src="./icons/cart.svg" alt="cart" />
            </Link>
            <p className='text-myColor3-200 font-normal text-lg'>Mi carrito</p>
          </div>
        </div>
        <nav
          className=' bg-myColor1-300 w-full flex gap-16 justify-center items-start text-myColor3-200 text-2xl py-1 h-[50px]'
        >
          <Link className='py-1 hover:border-b px-2 rounded-lg'>Inicio</Link>
          <Link className='py-1 hover:border-b px-2 rounded-lg'>Productos</Link>
          <Link className='py-1 hover:border-b px-2 rounded-lg'>Contacto</Link>
          <Link className='py-1 hover:border-b px-2 rounded-lg'>Sobre nosotros</Link>
        </nav>
      </div>
    </>
  )
}


export default Nav