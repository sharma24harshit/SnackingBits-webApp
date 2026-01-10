import React from 'react'
import { RiFacebookFill, RiFlowerLine, RiInstagramLine, RiLeafLine, RiLinkedinBoxFill, RiPlantLine, RiTwitterXLine } from "react-icons/ri";
import home from '../assets/img/home1.png';

const Home = ({homeRef}) => {
    return (
        <section ref={homeRef} id="home" className='relative py-20 md:py-28'>
            <div className='container'>
                {/* blob 1 */}
                <div className='w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2
     transform -translate-x-1/2 -translate-y-1/2'>
                </div>

                {/* blob 2 */}
                <div className='w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute -right-10 bottom-0
     transform -translate-x-1/2 -translate-y-1/2'>
                </div>

                <div className='flex flex-col items-center gap-5 lg:flex-row'>
                    {/* content */}
                    <div className='w-full space-y-5 lg:w-1/2'>
                        <h1 className='text-3xl md:text-4xl xl:text-5xl font-bold'>
                            <span className='text-yellow-500'>Delicious</span> snacks make a
                            positive
                            <span className='text-yellow-500'> impact</span> on <br />
                            your taste buds
                        </h1>

                        <p className='text-slate-300 font-Lobster'>
                            Discover premium quality snacks crafted with care. From crunchy chips to healthy treats, 
                            we bring you the finest selection of snacks to satisfy every craving.
                        </p>

                        <div className='flex flex-col gap-1 sm:flex-row ms:gap-4 lg:pt-5 xl:pt-10'>
                            <button className='flex items-center gap-1 border border-yellow-500 bg-yellow-500 rounded-md px-5 py-2 duration-300 hover:opacity-90'>
                                <span className='font-bold'>Shop Now</span>
                                <i><RiLeafLine /></i>
                            </button>

                            <button className='flex items-center gap-1 border border-yellow-500 bg-yellow-500 rounded-md px-5 py-2 duration-300 bg-transparent hover:opacity-90 hover:bg-yellow-500'>
                                <span className='font-bold'>Know More</span>
                                <i><RiLeafLine /></i>
                            </button>
                        </div>

                        <p className='text-xs font-Lobster text-slate-300'>
                            Free delivery on orders over 200AED.
                        </p>

                        <div className='flex gap-5 items-center text-lg lg:pt-10'>
                            <i className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer'><RiFacebookFill /></i>
                            <i className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base'><RiTwitterXLine /></i>
                            <i className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer'><RiInstagramLine /></i>
                            <i className='text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer'><RiLinkedinBoxFill /></i>
                        </div>
                    </div>
                    {/* image */}
                    <div className='w-full relative lg:w-1/2'>
                        <img src={home} alt="home_image" />

                        {/* leaf */}
                        <div className='absolute -top-0 right-0 opacity-30 xl:top-5 animate-movingY'>
                            <i className='text-6xl text-yellow-500'><RiLeafLine /></i>
                        </div>

                        {/* flower */}
                        <div className='absolute bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating'>
                            <i className='text-6xl text-yellow-500'><RiFlowerLine /></i>
                        </div>

                        {/* plant */}
                        <div className='hidden absolute -top-8 -left-5 opacity-30 lg:block animate-scalingUp'>
                            <i className='text-6xl text-yellow-500'><RiPlantLine /></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home