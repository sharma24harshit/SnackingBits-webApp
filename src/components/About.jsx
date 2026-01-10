import React from 'react'
import plant1 from '../assets/img/plant-1.png';
import plant2 from '../assets/img/plant-2.png';
import leaf_4 from "../assets/img/leaf-4.png";

const About = ({aboutRef}) => {
  return (
    <section ref={aboutRef} id="about" className='relative py-20 md:py-28 overflow-hidden'>

    <div className='absolute -top-16 -right-14 opacity-50'>
      <img src={leaf_4} alt="leaf_iamge" className='w-40 md:w-52 xl:w-64'/>
    </div>
    
              <div className='flex flex-col items-center gap-3 text-center mb-10 md:mb-20'>
                <h2 id="title" className='font-Lobster text-yellow-500 text-2xl md:text-3xl xl:text-4xl'>About Us</h2>
                <p className='max-w-2xl'>Follow instruction for more</p>
              </div>
    
              <div className='container space-y-10 xl:space-y-0'>
                {/* items 1 */}
                <div className='flex flex-col items-center lg:flex-row gap-5'>
                  {/* image  */}
                  <div className='w-full lg:w-1/2'>
                    <img src={plant1} alt="about_image" className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto'/>
                  </div>
    
                  {/* content */}
                  <div className='w-full lg:w-1/2'>
                    <div className='space-y-5'>
                      <h3 className='text-xl md:text-2xl xl:text-3xl'>
                        Discover our <span className='text-yellow-500'>premium</span>
                        <br />snack collection
                      </h3>
                      <p className='text-salte-300 font-Lobster'>
                        At SnackingBits, we curate the finest selection of snacks from around the world. 
                        Each product is carefully chosen for its quality, flavor, and freshness. 
                        Whether you crave something sweet, salty, or healthy, we have the perfect snack for every moment.</p>
                    </div>
                  </div>
                </div>
    
                 {/* items 2 */}
                 <div className='flex flex-col items-center lg:flex-row-reverse gap-5'>
                  {/* image  */}
                  <div className='w-full lg:w-1/2'>
                    <img src={plant2} alt="about_image" className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto'/>
                  </div>
    
                  {/* content */}
                  <div className='w-full lg:w-1/2'>
                    <div className='space-y-5'>
                      <h3 className='text-xl md:text-2xl xl:text-3xl'>
                        Join us on a journey <br /> <span className='text-yellow-500'>exploring </span>
                        delicious flavors
                      </h3>
                      <p className='text-salte-300 font-Lobster'>
                        We're passionate about bringing you snacks that not only taste amazing but also 
                        meet high quality standards. Our commitment to excellence means you can trust 
                        every bite. From classic favorites to unique international treats, discover 
                        your next favorite snack with SnackingBits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
  )
}

export default About