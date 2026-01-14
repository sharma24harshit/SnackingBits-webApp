import React from 'react'
import { RiDoubleQuotesR } from 'react-icons/ri'
import leaf3 from '../assets/img/leaf-3.png';
import review1 from '../assets/img/review-1.jpg';
import review2 from '../assets/img/review-2.jpg';
import review3 from '../assets/img/review-3.jpg';
import InfiniteCarousel from './InfiniteCarousel';

const reviews = [
    { name: "Sarah Johnson", title: "Food Blogger", text: "These snacks are absolutely amazing! The quality is top-notch and the flavors are incredible. I've been ordering from SnackingBits for months and I'm never disappointed.", image: review1 },
    { name: "Michael Chen", title: "Chef", text: "Fast delivery and fresh snacks every time! The variety is impressive and the prices are very reasonable. Highly recommend SnackingBits to all snack lovers out there." ,image: review2},
    { name: "Emily Rodriguez", title: "Nutritionist", text: "Best snack website I've found! The customer service is excellent and they always have new and exciting products. My family loves everything we've ordered so far.", image: review3 },
];

const Review = ({ reviewRef }) => {
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
                        {/* review 1 */}
                       
                            <InfiniteCarousel
                            interval={4500}
                            transitionDuration = {1200}
                            items={reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className='w-full max-w-4xl mx-auto flex flex-col gap-5 bg-teal-700 rounded-lg p-6 border-2 border-white-700'
                                >
                                    <p className='font-Lobster'>
                                        {review?.text}
                                    </p>
                                    <div className='flex items-center'>
                                        <img src={review?.image} alt="review_1"
                                            className='w-12 h-12 rounded-full' />
                                        <div className='ml-2'>
                                            <p className='text-yellow-500 uppercase font-bold'>{review?.name}</p>
                                            <p>{review?.title}</p>
                                        </div>
                                        <i className='text-4xl ml-auto'><RiDoubleQuotesR /></i>
                                    </div>
                                </div>
                            ))}
                          />

                </div>
            </div>
        </section>
    )
}

export default Review