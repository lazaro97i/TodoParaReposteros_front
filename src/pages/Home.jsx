import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import categoryActions from '../store/category/actions'

const { getCategories } = categoryActions

const Home = () => {

  const [category, setCategory] = useState(false)
  const categoryStore = useSelector((store) => store.category)
  const dispatch = useDispatch()

  useEffect( ()=> {
    dispatch(getCategories())
  }, [])

  console.log(categoryStore);

  const handleCategories = () => {
    setCategory(!category)
  }

  return (
    <section className='flex flex-col items-center'>
      <div className='w-full'>
        <img className=' object-cover object-center w-full h-[600px]' src="./images/bg-tpr.jpg" alt="tpr" />
      </div>
      <main className=' w-4/5 flex flex-col justify-center items-center p-8 relative'>
        <p className='text-4xl text-myColor2-300 font-[300] self-start border-b-2 border-myColor2-300 w-3/6 pb-1'>Productos</p>
        <p className='flex bg-myColor1-300 text-myColor3-200 self-start mt-2 text-2xl px-4 py-1 rounded-md cursor-pointer' onClick={handleCategories}>Categorias <img src="./icons/arrow-b.svg" alt="" /></p>
        {/* {
          category ?
            <div className='transition duration-[.5s] absolute left-[32px] top-[135px] bg-myColor1-400 text-myColor3-200 p-4 '>
              
            </div>
            :
            null
        } */}
        <div className='py-10'>
          <ProductCard />
        </div>
      </main>
    </section>
  )
}

export default Home