import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'
import leaf3 from '../assets/img/leaf-3.png';
import review from '../assets/img/review-1.jpg';

const Review = ({reviewRef}) => {
    return (
        <section ref={reviewRef} id="review" className='relative py-20 md:py-28'>

            <div className='absolute -top-16 -left-16 opacity-60'>
                <img src={leaf3} alt="leaf_image" className='w-40 md:w-52 xl:w-64' />
            </div>

            <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
                <h2 id="title" className='font-Lobster text-yellow-500 text-2xl md:text-3xl xl:text-4xl'>Customer Review</h2>
                <p className='max-w-2xl'>Follow instruction for more</p>
            </div>

            <div className='container'>
                <div className='py-12'>
                    <ul>
                        <li>
                            <div className='flex flex-col gap-5 bg-green-900 rounded-md p-6'>
                                <p className='font-Lobster'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Dolor magni ipsam ducimus,
                                    doloremque recusandae incidunt tempora provident.
                                </p>
                                <div className='flex items-center'>
                                    <img src={review} alt="review_1"
                                        className='w-12 h-12 rounded-full' />
                                    <div className='ml-2'>
                                        <p className='text-yellow-500 uppercase font-bold'>John Doe</p>
                                        <p>Designer</p>
                                    </div>
                                    <i className='text-4xl ml-auto'><RiDoubleQuotesR /></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Review