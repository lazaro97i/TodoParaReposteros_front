import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='h-auto py-10 bg-myColor1-300 flex justify-around items-center flex-wrap gap-5'>
      <div className=' flex flex-col justify-center items-center gap-4'>
        <p className='text-base font-[400] text-myColor3-300'>Seguinos en:</p>
        <div className='flex gap-8'>
          <Link
          target='_blank'
          to={'https://www.facebook.com/profile.php?id=100063495466500'}
          >
            <img className='w-[45px]' src="./icons/fb.svg" alt="" />
          </Link>
          <Link>
            <img className='w-[45px]' src="./icons/ig.svg" alt="" />
          </Link>
          <Link
          target='_blank'
          to={'https://wa.link/ybsufp'}
          >
            <img className='w-[45px]' src="./icons/wp.svg" alt="" />
          </Link>
        </div>
      </div>
      <div className='flex flex-col items-start'>
        <Link className='flex items-end gap-1'>
          <span className='text-myColor3-200 font-semibold text-lg'>Avenida Juan B. justo 1057</span>
          <img className=' self-start' src="./icons/location.svg" alt="" />
        </Link>
        <Link className='text-myColor3-200 underline hover:decoration-transparent'>Medios de pago</Link>
        <Link className='text-myColor3-200 underline hover:decoration-transparent'>Como comprar?</Link>
        <Link className='text-myColor3-200 underline hover:decoration-transparent'>Quienes somos?</Link>
        <Link className='text-myColor3-200 underline hover:decoration-transparent'>Contactanos</Link>
      </div>
      <div>
        <p className='text-myColor3-300'>Todo Para el Repostero © 2023</p>
      </div>
    </div>
  )

}

export default Footer