import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import categoryActions from '../store/category/actions'
import productActions from '../store/product/actions'
import { Link } from 'react-router-dom'

const { getCategories } = categoryActions

const { getProduct } = productActions

const Home = () => {

  const [categories, setCategories] = useState(false)
  const categoryStore = useSelector((store) => store.category)
  const productStore = useSelector((store) => store.product)
  const dispatch = useDispatch()

  console.log(categoryStore);
  console.log(productStore);

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProduct())
  }, [])


  const handleCategories = () => {
    setCategories(!categories)
  }

  const ocultCategories = () => {
    if(categories){
      setCategories(!categories)
    }
  }

  return (
    <section onClick={ocultCategories} className='flex flex-col items-center'>
      <div className='w-full'>
        <img className=' object-cover object-center w-full h-[600px]' src="./images/bg-tpr.jpg" alt="tpr" />
      </div>
      <main className=' w-4/5 flex flex-col justify-center items-center p-8 relative'>
        <p className='text-4xl text-myColor2-300 font-[300] self-start border-b-2 border-myColor2-300 w-3/6 pb-1'>Productos</p>
        <p className='flex bg-myColor1-300 text-myColor3-200 self-start mt-2 text-2xl px-4 py-1 rounded-md cursor-pointer' onClick={handleCategories}>Categorias <img src="./icons/arrow-b.svg" alt="" /></p>
        {
          categories ?
            <div className='absolute left-[32px] top-[135px] bg-myColor1-400 text-myColor3-200 p-4 rounded-md'>
              {
                categoryStore.categories?.response?.map((cat) => {
                  return (
                    <ul key={cat.name}>
                      <li className='opacity-none ml-3 list-disc pb-2'>
                        <Link className='hover:underline'>
                          {cat.name}
                        </Link>
                      </li>
                    </ul>
                  )
                })
              }
            </div>
            :
            null
        }
        <div className='flex flex-wrap items center justify-evenly gap-10 pt-16'>
            {
              productStore.products?.response?.map((product) => {
                return ( 
                  <ProductCard
                  name={product.name}
                  price={product.price}
                  photo={product.photo}
                  key={product.name}
                  />
                )
              })
            }
        </div>
      </main>
    </section>
  )
}

export default Home