import React from 'react'
import { RiShoppingCartFill, RiStarFill, RiStarHalfFill, RiStarLine } from "react-icons/ri";

const Popular = () => {
  return (
    <section id="popular" className='bg-green-900 py-20 md:py-28'>
        <div className='flex flex-col items-center gap-3 text-center mb-40'>
                <h2 id="title" className='font-Lobster text-yellow-500 text-2xl md:text-3xl xl:text-4xl'>Your Choice Plant</h2>
                <p className='max-w-2xl'>Follow instruction for more</p>
              </div>

              <div className='container w-full grid grid-cols-1 gap-x-8 gap-y-36 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {/* card 1 */}
                <div id="popular_card" className='bg-green-950 p-10 pt-16 rounded-md relative'>
                  <img src="../.././assests/img/cart-3.png" alt="popular_image" 
                  className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500
                  hover:-top-8'/>

                  <p className='italic'>Nephrolepis exaltata</p>
                  <h3 className='text-xl md:text-2xl xl:text-3xl'>Boston Fern</h3>

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
                  <img src="../.././assests/img/cart-3.png" alt="popular_image" 
                  className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500
                  hover:-top-8'/>

                  <p className='italic'>Ficus elastica</p>
                  <h3 className='text-xl md:text-2xl xl:text-3xl'>Rubber Plant</h3>

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
                  <img src="../.././assests/img/cart-3.png" alt="popular_image" 
                  className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500
                  hover:-top-8'/>

                  <p className='italic'>Spathiphyllum wallisii</p>
                  <h3 className='text-xl md:text-2xl xl:text-3xl'>Peace Lily</h3>

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
                  <img src="../.././assests/img/cart-3.png" alt="popular_image" 
                  className='w-56 absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 duration-500
                  hover:-top-8'/>

                  <p className='italic'>Adenium obesum</p>
                  <h3 className='text-xl md:text-2xl xl:text-3xl'>Desert Rose</h3>

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