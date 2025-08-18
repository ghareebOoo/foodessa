import React from 'react'
import {FOOTER_LINKS , FOOTER_CONTACT_INFO , SOCIALS} from "../public/src/assets/data"


  
  

  

  
export default function Footer() {
  return (
    <div className='px-4 md:px-12 pt-12 pb-4'>

        <div className='flex flex-col xl:flex-row gap-12'>

            <div className='w-full xl:max-w-[30%]'>

                <div className='flex items-center'>
                    <div className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center'>
                        <div className='text-primary font-bold text-2xl transform -rotate-45'>F</div>
                    </div>
                    <div className='text-tertiary font-bold text-lg md:text-2xl'>oodessa</div>
                </div>
                
                <p className='my-5 text-base font-medium text-gray-30'>Looking for something delicious? Explore a variety of mouthwatering meals, crafted to satisfy your cravings and bring joy to every occasion</p>

                <form className='w-full relative'>
                    <input type='email' placeholder='Enter Your Email' className='w-full pl-4 rounded-full py-3 bg-deep outline-none border-[1px] border-gray-20'/>
                    <button type='submit' className='top-0 bg-secondary text-white py-3 rounded-full px-4 absolute right-0 border-[1px] border-secondary'>Subuscribe</button>
                </form>

            </div>

            <div className='w-full xl:max-w-[70%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex justify-between gap-4'>

                <div>          
                    <h2 className='font-bold text-xl text-tertiary'>{FOOTER_LINKS[0].titleOne}</h2>
                    <div className='mt-5 flex flex-col items-start gap-2'>
                        {FOOTER_LINKS[0].linksOne?.map((item , index)=>{
                            return <h3 key={index} className='text-base font-semibold text-gray-30'>{item}</h3>
                        })}
                    </div>
                </div>

                <div>
                    <h2 className='font-bold text-xl text-tertiary'>{FOOTER_LINKS[1].titleTwo}</h2>
                    <div className='mt-5 flex flex-col items-start gap-2'>
                        {FOOTER_LINKS[1].linksTwo?.map((item , index)=>{
                            return <h3 key={index} className='text-base font-semibold text-gray-30'>{item}</h3>
                        })}
                    </div>
                      
                </div>

                <div>
                    <h2 className='font-bold text-xl text-tertiary'>{FOOTER_CONTACT_INFO.title}</h2>
                    <div className='mt-5 flex flex-col gap-2 items-start'>
                        {FOOTER_CONTACT_INFO.links.map((item ,index)=>{
                            return <div key={index} className=''>
                                <h3 className='flex items-center gap-2 text-base font-semibold text-gray-30'>{item.label}: <span className='text-[14px] md:text-base font-bold text-gray-50'>{item.value}</span></h3>
                            </div>
                        })}
                    </div>
                </div>

                <div>
                    <div>
                        <h2 className='font-bold text-xl text-tertiary'>{SOCIALS.title}</h2>
                        <div className='mt-5 flex items-start gap-2'>
                            {SOCIALS.links.map((item , index)=>{
                                return <h3 key={index} className='text-2xl text-tertiary'>{item.icon}</h3>
                            })}
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div className='mt-10 bg-secondary rounded-md px-4 py-3 flex justify-between items-center'>
            <span className='text-[14px] md:text-base text-white font-semibold'>2025 Foodessa</span>
            <span className='text-[14px] md:text-base text-white font-semibold'>All rights reserved</span>
        </div>

    </div>
  )
}
