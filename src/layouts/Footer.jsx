import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div className='h-[150px] bg-myColor1-300 flex justify-around items-center'>
      <div className=' flex flex-col justify-center items-center gap-4'>
        <p className='text-base font-[400] text-myColor3-300'>Redes sociales:</p>
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
      <div>
        <p className='text-myColor3-300'>Todo Para el Repostero © 2023</p>
      </div>
    </div>
  )

}

export default Footer