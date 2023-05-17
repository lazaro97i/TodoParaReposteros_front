import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {


  return (
    <div className=' w-full bg-myColor1-200 flex flex-col pt-5 items-center gap-3'>
      <div className='flex flex-col gap-4'>
        <p className='flex justify-center items-center text-center text-4xl font-extrabold py-2  text-myColor3-200'>Todo Para el Repostero</p>
        <label className='flex flex-wrap gap-3 items-center justify-center'>
          <p className='text-2xl font-[400] text-myColor1-500'>Buscar productos: </p>
          <input className=' text-myColor2-500 w-[350px] h-[30px] pl-2 py-2 outline-none font-[400]' type="search" name="search" id="search" />
        </label>
      </div>
      <nav
        className=' bg-myColor1-300 w-full flex gap-16 justify-center items-start text-myColor3-200 text-2xl'
      >
        <Link className='py-1 hover:bg-myColor1-400 px-2 transition duration-500 rounded-lg'>Inicio</Link>
        <Link className='py-1 hover:bg-myColor1-400 px-2 transition duration-500 rounded-lg'>Productos</Link>
        <Link className='py-1 hover:bg-myColor1-400 px-2 transition duration-500 rounded-lg'>Contacto</Link>
        <Link className='py-1 hover:bg-myColor1-400 px-2 transition duration-500 rounded-lg'>Sobre nosotros</Link>
      </nav>
    </div>
  )
}


export default Nav