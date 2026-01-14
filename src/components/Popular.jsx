import React from 'react'
import { RiShoppingCartFill, RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import cart3 from '../assets/img/home3.png';
import product1 from '../assets/img/home1.png';

const products = [
  {name: "Classic Potato Chips", image: product1 , title:"Crunchy & Savory", price:"30 AED"},
  {name: "Trail Mix Bars", image: cart3 , title:"Sweet & Chewy", price:"25 AED"},
  {name: "Roasted Nuts", image: product1 , title:"Healthy & Nutritious", price:"35 AED"},
  {name: "Flavored Popcorn", image: cart3 , title:"Spicy & Bold", price:"40 AED"}
]

const Popular = ({popularRef}) => {
  return (
    <section ref={popularRef} id="popular" className='bg-yellow-500 py-20 md:py-28'>
        <div className='flex flex-col items-center gap-3 text-center mb-40'>
                <h2 id="title" className='font-Lobster text-teal-800 text-2xl md:text-3xl xl:text-4xl'>Popular Snacks</h2>
                <p className='max-w-2xl'>Browse our most loved snack selections</p>
              </div>

              <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {products && products?.map((item, i)=>(
                  <div key={i} id="popular_card" className='bg-teal-700 p-10 pt-16 rounded-md relative cursor-pointer group'>
                  <img src={item?.image} alt="popular_image" 
                  className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500
                  group-hover:-top-8'/>

                  <p className='italic'>{item?.title}</p>
                  <h3 className='text-xl md:text-2xl xl:text-3xl'>{item?.name}</h3>

                  <div className='flex gap-1 text-xs text-yellow-500 py-3'>
                    <i><RiStarFill /></i>
                    <i><RiStarFill /></i>
                    <i><RiStarFill /></i>
                    <i><RiStarHalfFill /></i>
                    <i className='text-gray-400'><RiStarLine /></i>
                  </div>

                  <div className='flex items-center justify-between'>
                    <p className='text-xl'>{item?.price}</p>
                    <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl duration-300 hover:opacity-60'>
                      <i><RiShoppingCartFill /></i>
                    </button>
                  </div>
                </div>
                ))}
              </div>
        </section>
  )
}

export default Popular