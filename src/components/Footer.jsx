import React from 'react'
import { RiFacebookFill, RiInstagramLine, RiLeafFill, RiLinkedinBoxFill, RiSendPlane2Fill, RiTwitterXLine } from "react-icons/ri";
import floral from '../assets/img/floral-1.png';

const Footer = () => {
    return (
        <footer className='bg-yellow-100 text-green-950 pt-20 pb-10 md:pt-28 relative'>
            {/*--------  newsletter -------- */}
            <div className='container text-white absolute top-0 right-0 left-0
        -translate-y-1/2'>
                <div className='bg-green-900 px-10 pt-5 pb-10 space-y-5 rounded-xl'>
                    <h3>
                        <span className='text-yellow-500'>Subscribe</span> to our newsletter
                        Subscribe
                    </h3>

                    <div className='flex flex-col md:flex-row gap-1'>
                        <input type="email" placeholder='Your Email Address'
                            className='w-full px-5 py-3 text-green-900 rounded-lg outline-none' />
                        <button className='flex items-center justify-center gap-1 bg-green-950 px-5 py-3 rounded-md hover:opacity-80 duration-300'>
                            <span>Subscribe</span>
                            <i><RiSendPlane2Fill /></i>
                        </button>
                    </div>
                </div>
            </div>
            {/*--------  social icon -------- */}
            <div className='container mt-16 mb-10'>
                <div className='border-b border-green-500 relative'>
                    <div className='absolute top-0 transform -translate-y-1/2 left-0 right-0 max-w-36 mx-auto'>
                        <div className='bg-yellow-100 text-lg text-center space-x-2 flex gap-2'>
                            <i className='cursor-pointer hover:text-yellow-500 duration-300 font-bold'><RiFacebookFill /></i>
                            <i className='cursor-pointer hover:text-yellow-500 duration-300 font-bold text-base'><RiTwitterXLine /></i>
                            <i className='cursor-pointer hover:text-yellow-500 duration-300 font-bold'><RiInstagramLine /></i>
                            <i className='cursor-pointer hover:text-yellow-500 duration-300 font-bold'><RiLinkedinBoxFill /></i>
                        </div>
                    </div>
                </div>
            </div>
            {/*--------  content -------- */}
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 text-center md:text-start'>
                {/* item 1 */}
                <div>
                    <div className='flex flex-col items-center text-7xl text-green-700 text-center inline-block'>
                        <i><RiLeafFill /></i>
                        <p className='font-Lobster text-xl sm:text-2xl'>IndoorPlants.</p>
                    </div>
                </div>

                {/* item 2 */}
                <div>
                    <p className='mb-5 font-bold text-xl'>Quick Link</p>

                    <div className='flex flex-col gap-1'>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1' >Plants</a>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1' >Flowers</a>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1' >Gardening</a>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1' >Seeds</a>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1' >Shipping</a>
                    </div>
                </div>

                {/* item 3 */}
                <div>
                    <p className='mb-5 font-bold text-xl'>Popular Services</p>

                    <div className='flex flex-col gap-1'>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1'>Tree Planting</a>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1'>Grass Cutting</a>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1'>Weeds control</a>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1'>Project</a>
                    </div>
                </div>

                {/* item 4 */}
                <div>
                    <p className='mb-5 font-bold text-xl'>Contact Us</p>

                    <div className='flex flex-col gap-1'>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1'>+9876543210</a>
                        <a href="#" className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1'>CCOders@gmail.com</a>
                        <br />
                        <p className='transition-all duration-300 hover:text-green-500 hover:font-bold hover:-translate-y-1'>1234 tailwind Ave, Csscity, webland 56789, USA</p>
                    </div>
                </div>
            </div>
            {/*--------  copyright -------- */}
            <div className='container'>
                <p className='text-center mt-10 opacity-50'>Copyright &copy; 2026 XAEW. All rights reserved.</p>
            </div>
            {/*--------  floral image -------- */}
            <div className='absolute bottom-0 left-0 opacity-20 pointer-events-none'>
                <img src={floral} alt="floral_image"
                    className='w-full lg:w-1/2' />
            </div>
        </footer>
    )
}

export default Footer