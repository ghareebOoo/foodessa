import Image from 'next/image'
import React from 'react'
import { FaStar , FaCheck } from 'react-icons/fa6'
import imageOne from "../public/src/assets/testimonials/user1.png"
import imageTwo from "../public/src/assets/testimonials/user2.png"
import foodOne from "../public/src/assets/food_1.png"
import foodTwo from "../public/src/assets/food_2.png"
import foodThree from "../public/src/assets/food_3.png"
import foodFour from "../public/src/assets/food_4.png"
export default function Reviews() {
  return (
    <div className='px-4 md:px-12 py-12'>
        <h2 className='uppercase text-tertiary text-center text-2xl font-bold'>Delicious <span className='text-secondary font-semibold text-xl'>Reviews</span></h2>
        <p className='md:max-w-[430px] md:mx-auto text-center mt-3 font-normal text-base text-gray-20'>Our food products are crafted with the finest ingredients to deliver exceptional taste and quality.</p>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>

            <div className='hidden md:flex flex-col justify-between md:gap-12 xl:gap-0 md:col-span-2 xl:col-span-1'>
                <h3 className='text-2xl text-tertiary font-semibold'>What People <span className='text-secondary'>Says</span></h3>
                <p>
                    Our food products are crafted with the finest ingredients to
                    deliver exceptional taste and quality.
                </p>
                <div className='bg-deep p-2 rounded-md'>
                    <div className='flex items-center gap-1'>
                        <FaStar className='text-2xl text-secondary'/>
                        <FaStar className='text-2xl text-secondary'/>
                        <FaStar className='text-2xl text-secondary'/>
                        <FaStar className='text-2xl text-secondary'/>
                        <FaStar className='text-2xl text-secondary'/>
                    </div>
                    <p className='font-bold text-tertiary text-base'>more than +25,000 reviews</p>
                </div>
            </div>

            <div className='p-5 bg-deep rounded-md md:col-span-1 xl:col-span-1'>
                <div className='flex items-center justify-between border-b-gray-20 border-b-[1px] pb-2'>
                    <div className='flex items-center gap-2 '>
                        <Image src={imageOne} alt='iamge' width={50} height={50} className='rounded-full'/>
                        <h3 className='whitespace-nowrap text-[12px] md:text-base font-medium text-tertiary'>John Doe</h3>
                    </div>
                    <button className='flex items-center justify-center gap-2 text-[12px] md:text-base text-white bg-secondary px-2 py-2 rounded-full'><FaCheck className='text-xl text-white'/> Verified</button>
                </div>
                <div className='mt-5 flex items-center gap-1'>
                    <FaStar className='text-2xl text-secondary'/>
                    <FaStar className='text-2xl text-secondary'/>
                    <FaStar className='text-2xl text-secondary'/>
                    <FaStar className='text-2xl text-secondary'/>
                    <FaStar className='text-2xl text-secondary'/>
                </div>
                <h4 className='mt-1 text-tertiary text-lg font-bold'>High Quality</h4>
                <p className='mt-5 font-normal text-[14px] text-gray-20'>The food was absolutely delicious! Every bite was bursting with flavor, and the quality was top-notch. The service was quick, and everything arrived fresh. Highly recommend trying it out!</p>
                <div className='mt-8 flex items-center gap-2'>
                    <Image src={foodOne} alt='iamge' width={70} height={70} />
                    <Image src={foodTwo} alt='iamge' width={70} height={70} />
                </div>
            </div>

            <div className='p-5 bg-deep rounded-md md:col-span-1 xl:col-span-1'>
                <div className='flex items-center justify-between border-b-gray-20 border-b-[1px] pb-2'>
                    <div className='flex items-center gap-2 '>
                        <Image src={imageTwo} alt='iamge' width={50} height={50} className='rounded-full'/>
                        <h3 className='whitespace-nowrap text-[12px] md:text-base font-medium text-tertiary'>Izabella Stress</h3>
                    </div>
                    <button className='flex items-center justify-center gap-2 text-[12px] md:text-base text-white bg-secondary px-2 py-2 rounded-full'><FaCheck className='text-xl text-white'/> Verified</button>
                </div>
                <div className='mt-5 flex items-center gap-1'>
                    <FaStar className='text-2xl text-secondary'/>
                    <FaStar className='text-2xl text-secondary'/>
                    <FaStar className='text-2xl text-secondary'/>
                    <FaStar className='text-2xl text-secondary'/>
                    <FaStar className='text-2xl text-secondary'/>
                </div>
                <h4 className='mt-1 text-tertiary text-lg font-bold'>Modern Design</h4>
                <p className='mt-5 font-normal text-[14px] text-gray-20'>Amazing experience! The meals were perfectly cooked, and the flavors blended beautifully. The delivery was on time, and the packaging kept everything warm. Will definitely order again!</p>
                <div className='mt-8 flex items-center gap-2'>
                    <Image src={foodThree} alt='iamge' width={70} height={70} />
                    <Image src={foodFour} alt='iamge' width={70} height={70} />
                </div>
            </div>

        </div>
    </div>
  )
}
