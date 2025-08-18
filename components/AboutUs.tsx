"use client"
import React, { useMemo } from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { TbSoup } from "react-icons/tb";
import { GiFruitBowl } from "react-icons/gi";
import { LuChefHat } from "react-icons/lu";

export default function AboutUs() {
    const ourData = useMemo(()=>(
        [
            {
                title: "Fast Delivery",
                description: "Get your order quickly with our reliable and efficient service",
                icon: <CiDeliveryTruck className='text-4xl text-gray-50'/>
            },

            {
                title: "Hot Foods",
                description: "Savor freshly prepared, steaming hot meals delivered straight to you",
                icon: <TbSoup className='text-4xl text-gray-50'/>
            },

            {
                title: "Fresh Foods",
                description: "We serve meals made from the freshest and finest ingredients daily",
                icon: <GiFruitBowl className='text-4xl text-gray-50'/>
            },

            {
                title: "Expert Chefs",
                description: "Our skilled chefs craft every dish with passion and precision",
                icon: <LuChefHat className='text-4xl text-gray-50'/>
            },
        ]
    ),[])
  return (
    <div className='px-4 md:px-12 py-12'>
        <h2 className='uppercase text-tertiary text-center text-2xl font-bold'>Why Choose <span className='text-secondary font-semibold text-xl'>us?</span></h2>
        <p className='md:max-w-[430px] md:mx-auto text-center mt-3 font-normal text-base text-gray-20'>Our food products are crafted with the finest ingredients to deliver exceptional taste and quality.</p>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {ourData.map((item , index)=>{
                return <div key={index} className='bg-deep p-5 flex flex-col items-center gap-3 rounded-md'>
                    <div>{item.icon}</div>
                    <h3 className='text-xl font-bold text-center w-fit relative before:absolute before:top-7 before:w-[50px] before:h-1 before:rounded-md before:bg-secondary before:left-[50%] before:translate-x-[-50%]'>{item.title}</h3>
                    <p className='text-[12px] text-gray-20 font-normal text-center'>{item.description}</p>
                </div>
            })}
        </div>
    </div>
  )
}
