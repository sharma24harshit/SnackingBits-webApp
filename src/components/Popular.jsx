import React from 'react'
import { RiShoppingCartFill, RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";
import cart3 from '../assets/img/cart-3.png';

const Popular = ({popularRef}) => {
  return (
    <section ref={popularRef} id="popular" className='bg-green-900 py-20 md:py-28'>
        <div className='flex flex-col items-center gap-3 text-center mb-40'>
                <h2 id="title" className='font-Lobster text-yellow-500 text-2xl md:text-3xl xl:text-4xl'>Popular Snacks</h2>
                <p className='max-w-2xl'>Browse our most loved snack selections</p>
              </div>

              <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {/* card 1 */}
                <div id="popular_card" className='bg-green-950 p-10 pt-16 rounded-md relative'>
                  <img src={cart3} alt="popular_image" 
                  className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500
                  hover:-top-8'/>

                  <p className='italic'>Crunchy & Savory</p>
                  <h3 className='text-xl md:text-2xl xl:text-3xl'>Classic Potato Chips</h3>

                  <div className='flex gap-1 text-xs text-yellow-500 py-3'>
                    <i><RiStarFill /></i>
                    <i><RiStarFill /></i>
                    <i><RiStarHalfFill /></i>
                    <i className='text-gray-400'><RiStarLine /></i>
                    <i className='text-gray-400'><RiStarLine /></i>
                  </div>

                  <div className='flex items-center justify-between'>
                    <p className='text-xl'>$5</p>
                    <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl duration-300 hover:opacity-60'>
                      <i><RiShoppingCartFill /></i>
                    </button>
                  </div>
                </div>

                {/* card 2 */}
                <div id="popular_card" className='bg-green-950 p-10 pt-16 rounded-md relative'>
                  <img src={cart3} alt="popular_image" 
                  className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500
                  hover:-top-8'/>

                  <p className='italic'>Sweet & Chewy</p>
                  <h3 className='text-xl md:text-2xl xl:text-3xl'>Trail Mix Bars</h3>

                  <div className='flex gap-1 text-xs text-yellow-500 py-3'>
                    <i><RiStarFill /></i>
                    <i><RiStarFill /></i>
                    <i><RiStarHalfFill /></i>
                    <i className='text-gray-400'><RiStarLine /></i>
                    <i className='text-gray-400'><RiStarLine /></i>
                  </div>

                  <div className='flex items-center justify-between'>
                    <p className='text-xl'>$5</p>
                    <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl duration-300 hover:opacity-60'>
                      <i><RiShoppingCartFill /></i>
                    </button>
                  </div>
                </div>

                {/* card 3 */}
                <div id="popular_card" className='bg-green-950 p-10 pt-16 rounded-md relative'>
                  <img src={cart3} alt="popular_image" 
                  className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500
                  hover:-top-8'/>

                  <p className='italic'>Healthy & Nutritious</p>
                  <h3 className='text-xl md:text-2xl xl:text-3xl'>Roasted Nuts</h3>

                  <div className='flex gap-1 text-xs text-yellow-500 py-3'>
                    <i><RiStarFill /></i>
                    <i><RiStarFill /></i>
                    <i><RiStarHalfFill /></i>
                    <i className='text-gray-400'><RiStarLine /></i>
                    <i className='text-gray-400'><RiStarLine /></i>
                  </div>

                  <div className='flex items-center justify-between'>
                    <p className='text-xl'>$5</p>
                    <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl duration-300 hover:opacity-60'>
                      <i><RiShoppingCartFill /></i>
                    </button>
                  </div>
                </div>

                {/* card 4 */}
                <div id="popular_card" className='bg-green-950 p-10 pt-16 rounded-md relative'>
                  <img src={cart3} alt="popular_image" 
                  className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500
                  hover:-top-8'/>

                  <p className='italic'>Spicy & Bold</p>
                  <h3 className='text-xl md:text-2xl xl:text-3xl'>Flavored Popcorn</h3>

                  <div className='flex gap-1 text-xs text-yellow-500 py-3'>
                    <i><RiStarFill /></i>
                    <i><RiStarFill /></i>
                    <i><RiStarHalfFill /></i>
                    <i className='text-gray-400'><RiStarLine /></i>
                    <i className='text-gray-400'><RiStarLine /></i>
                  </div>

                  <div className='flex items-center justify-between'>
                    <p className='text-xl'>$5</p>
                    <button className='bg-yellow-500 px-2 py-1 rounded-sm text-xl duration-300 hover:opacity-60'>
                      <i><RiShoppingCartFill /></i>
                    </button>
                  </div>
                </div>
              </div>
        </section>
  )
}

export default Popular