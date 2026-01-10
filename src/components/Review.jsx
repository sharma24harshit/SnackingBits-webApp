import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'
import leaf3 from '../assets/img/leaf-3.png';
import review1 from '../assets/img/review-1.jpg';
import review2 from '../assets/img/review-2.jpg';
import review3 from '../assets/img/review-3.jpg';

const Review = ({reviewRef}) => {
    return (
        <section ref={reviewRef} id="review" className='relative py-20 md:py-28'>

            <div className='absolute -top-16 -left-16 opacity-60'>
                <img src={leaf3} alt="leaf_image" className='w-40 md:w-52 xl:w-64' />
            </div>

            <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
                <h2 id="title" className='font-Lobster text-yellow-500 text-2xl md:text-3xl xl:text-4xl'>Customer Reviews</h2>
                <p className='max-w-2xl'>See what our customers are saying about our snacks</p>
            </div>

            <div className='container'>
                <div className='py-12'>
                    <ul className='flex flex-col gap-2'>
                        {/* review 1 */}
                        <li>
                            <div className='flex flex-col gap-5 bg-teal-700 rounded-md p-6'>
                                <p className='font-Lobster'>
                                    These snacks are absolutely amazing! The quality is top-notch and the flavors are incredible. 
                                    I've been ordering from SnackingBits for months and I'm never disappointed.
                                </p>
                                <div className='flex items-center'>
                                    <img src={review1} alt="review_1"
                                        className='w-12 h-12 rounded-full' />
                                    <div className='ml-2'>
                                        <p className='text-yellow-500 uppercase font-bold'>Sarah Johnson</p>
                                        <p>Food Blogger</p>
                                    </div>
                                    <i className='text-4xl ml-auto'><RiDoubleQuotesR /></i>
                                </div>
                            </div>
                        </li>
{/* review 2 */}
                        <li>
                            <div className='flex flex-col gap-5 bg-yellow-500 rounded-md p-6'>
                                <p className='font-Lobster'>
                                    Fast delivery and fresh snacks every time! The variety is impressive and the prices are very reasonable. 
                                    Highly recommend SnackingBits to all snack lovers out there.
                                </p>
                                <div className='flex items-center'>
                                    <img src={review2} alt="review_1"
                                        className='w-12 h-12 rounded-full' />
                                    <div className='ml-2'>
                                        <p className='text-yellow-500 uppercase font-bold'>Michael Chen</p>
                                        <p>Chef</p>
                                    </div>
                                    <i className='text-4xl ml-auto'><RiDoubleQuotesR /></i>
                                </div>
                            </div>
                        </li>
{/* review 3 */}
                        <li>
                            <div className='flex flex-col gap-5 bg-teal-700 rounded-md p-6'>
                                <p className='font-Lobster'>
                                    Best snack website I've found! The customer service is excellent and they always have 
                                    new and exciting products. My family loves everything we've ordered so far.
                                </p>
                                <div className='flex items-center'>
                                    <img src={review3} alt="review_1"
                                        className='w-12 h-12 rounded-full' />
                                    <div className='ml-2'>
                                        <p className='text-yellow-500 uppercase font-bold'>Emily Rodriguez</p>
                                        <p>Nutritionist</p>
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