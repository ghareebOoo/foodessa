import React from 'react'
import { FaLocationDot  , FaPhone , FaHeadphones} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


export default function Contact() {
  return (
    <div className='px-4 md:px-12 py-12'>
        <div className="flex flex-col lg:flex-row gap-8">

            <div className="w-full">
                <h2 className='text-2xl font-bold text-tertiary'>Get in <span className='text-secondary'>Touch</span></h2>
                <p className="my-5 text-gray-30 font-normal text-[14px] md:text-base">Have questions or need help? Send us a message, and we{`'`}ll get back to you as soon as possible.</p>
                <form>
                    <div className='flex flex-col lg:flex-row items-center gap-4'>
                        <input type="text" className='w-full px-2 py-2 bg-deep rounded-md' placeholder='Enter Your Name'/>
                        <input type="email" className='w-full px-2 py-2 bg-deep rounded-md' placeholder='Enter Your Email'/>
                    </div>
                    <textarea className='my-4 w-full rounded-md px-2 py-2 bg-deep h-[100px]' placeholder='Write Your Message Here'></textarea>
                    <button type='submit' className='cursor-pointer text-white bg-secondary rounded-md py-3 px-4'>Send Message</button>
                </form>
            </div>

            <div className="w-full">
                <h2 className='text-2xl font-bold text-tertiary'>Contact <span className='text-secondary'>Details</span></h2>
                <p className="my-5 text-gray-30 font-normal text-[14px] md:text-base">We are always here to assist you! Feel free to reach out to us through any of the following methods</p>
                <div className='mb-3'>
                    <span className='text-tertiary font-medium text-base'>Location:</span>
                    <h3 className='flex items-center gap-2 text-[12px] md:text-base text-gray-20 font-normal'><FaLocationDot className="text-2xl"/> 123 Foodessa Street, Food City, FC 12345</h3>
                </div>
                <div className='mb-3'>
                    <span className='text-tertiary font-medium text-base'>Email:</span>
                    <h3 className='flex items-center gap-2 text-[12px] md:text-base text-gray-20 font-normal'><MdOutlineMail className="text-2xl"/> info@foodessa.com</h3>
                </div>
                <div className='mb-3'>
                    <span className='text-tertiary font-medium text-base'>Phone:</span>
                    <h3 className='flex items-center gap-2 text-[12px] md:text-base text-gray-20 font-normal'><FaPhone className="text-2xl"/> +1 (800) 123-4567</h3>
                </div>
                <div className='mb-3'>
                    <span className='text-tertiary font-medium text-base'>Support:</span>
                    <h3 className='flex items-center gap-2 text-[12px] md:text-base text-gray-20 font-normal'><FaHeadphones className="text-2xl"/> 24/7 Support is open</h3>
                </div>
            </div>

        </div>
    </div>
  )
}
