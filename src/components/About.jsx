import React from 'react'

const About = ({aboutRef}) => {
  return (
    <section ref={aboutRef} id="about" className='relative py-20 md:py-28 overflow-hidden'>

    <div className='absolute -top-16 -right-14 opacity-50'>
      <img src="../.././assests/img/leaf-4.png" alt="leaf_iamge" className='w-40 md:w-52 xl:w-64'/>
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
                    <img src="../.././assests/img/plant-1.png" alt="about_image" className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto'/>
                  </div>
    
                  {/* content */}
                  <div className='w-full lg:w-1/2'>
                    <div className='space-y-5'>
                      <h3 className='text-xl md:text-2xl xl:text-3xl'>
                        Make your <span className='text-yellow-500'>organic</span>
                        <br />garden
                      </h3>
                      <p className='text-salte-300 font-Lobster'>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Placeat fugiat molestias
                        aliquam facilis et sint, odit voluptas
                        aperiam voluptatum at voluptatem, vitae
                        aliquid! Error perferendis, dolor ducimus
                        ullam reiciendis repellat ea iste quia sed
                        voluptatum minus.</p>
                    </div>
                  </div>
                </div>
    
                 {/* items 2 */}
                 <div className='flex flex-col items-center lg:flex-row-reverse gap-5'>
                  {/* image  */}
                  <div className='w-full lg:w-1/2'>
                    <img src="../.././assests/img/plant-2.png" alt="about_image" className='w-full sm:w-2/3 lg:w-full xl:w-2/3 mx-auto'/>
                  </div>
    
                  {/* content */}
                  <div className='w-full lg:w-1/2'>
                    <div className='space-y-5'>
                      <h3 className='text-xl md:text-2xl xl:text-3xl'>
                        Come with us <br /> <span className='text-yellow-500'>grow up </span>
                        your plant
                      </h3>
                      <p className='text-salte-300 font-Lobster'>
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Placeat fugiat molestias
                        aliquam facilis et sint, odit voluptas
                        aperiam voluptatum at voluptatem, vitae
                        aliquid! Error perferendis, dolor ducimus
                        ullam reiciendis repellat ea iste quia sed
                        voluptatum minus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    
  )
}

export default About