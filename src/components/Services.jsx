import React from 'react'
import { RiCustomerServiceLine, RiMoneyDollarCircleLine, RiPlantLine, RiTruckLine } from "react-icons/ri";

const Services = () => {
    return (
        <div className='bg-white text-green-900 py-20'>
            <div className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* card 1 */}
                <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl
    hover:-translate-y-1 duration-300 space-y-5'>
                    <div className='flex items-center gap-5'>
                        <i className='text-3xl md:text-4xl xl:text-5xl'><RiTruckLine /></i>
                        <p className='md:text-lg font-bold '>Fast <br /> Delivery</p>
                    </div>
                    <p className='font-Lobster' >We deliver your favorite snacks quickly and safely, ensuring freshness with every order.</p>
                </div>

                {/* card 2 */}
                <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl
    hover:-translate-y-1 duration-300 space-y-5'>
                    <div className='flex items-center gap-5'>
                        <i className='text-3xl md:text-4xl xl:text-5xl'><RiCustomerServiceLine /></i>
                        <p className='md:text-lg font-bold '>Great Customer <br /> Service</p>
                    </div>
                    <p className='font-Lobster' >Our dedicated team is here to help with any questions or concerns about your snack orders.</p>
                </div>

                {/* card 3 */}
                <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl
    hover:-translate-y-1 duration-300 space-y-5'>
                    <div className='flex items-center gap-5'>
                        <i className='text-3xl md:text-4xl xl:text-5xl'><RiPlantLine /></i>
                        <p className='md:text-lg font-bold '>Premium <br /> Quality</p>
                    </div>
                    <p className='font-Lobster' >We source only the finest ingredients to ensure every snack meets our high standards of quality and taste.</p>
                </div>

                {/* card 4 */}
                <div className='border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl
    hover:-translate-y-1 duration-300 space-y-5'>
                    <div className='flex items-center gap-5'>
                        <i className='text-3xl md:text-4xl xl:text-5xl'><RiMoneyDollarCircleLine /></i>
                        <p className='md:text-lg font-bold '>Affordable <br /> Price</p>
                    </div>
                    <p className='font-Lobster' >Enjoy premium quality snacks at competitive prices that fit your budget without compromising on taste.</p>
                </div>
            </div>
        </div>
    )
}

export default Services