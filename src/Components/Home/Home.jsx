import React from 'react'
import ProductGrid from '../ProducrGrid/ProductGrid'
import Footer from '../Footer/Footer'
import { useDispatch } from 'react-redux'
import { setSelectedCategory } from '../../Features/ProducrSlice'

const catogeries=[
  "All",
  "Graphics Card",
  "Laptop",
];

function Home() {
  const dispatch=useDispatch()
  return (
    <div>
      <div className='bg'></div>
      <div className='container mx-auto my-10 px-4'>
        <div className='flex gap-4'>
         {catogeries.map((product)=>{
          return (
             <button className='bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in'key={product} onClick={()=>dispatch(setSelectedCategory(product))}>{product}</button>
          )
         })}
        </div>
        <ProductGrid />
      </div>
      <Footer /> 
    </div>
  )
}

export default Home
