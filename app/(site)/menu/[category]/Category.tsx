"use client"
import { useFoodContext } from '@/context/FoodContext'
import Image from 'next/image'
import React from 'react'
import { BiCartAdd } from 'react-icons/bi'
import { FaStarHalfAlt } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'

export default function Category({category}:{category: string}) {
    const {ourFoods , chooseSize , handleSizeChange , addToCart} = useFoodContext()
    const ourCategory = ourFoods.filter((item)=> item.category.toLowerCase() === category.toLowerCase())
  return (
    <div className='px-4 md:px-12 py-12'>
        <h2 className='text-tertiary text-2xl font-bold'>Your Category is <span className='text-secondary'>{category}</span></h2>
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
                    {ourCategory.map((item , index)=>{
                        return  <div key={index} className='w-[90%] mx-auto rounded-md bg-deep px-5 py-2.5'>
                                    <div className='flex'>
                                        <div className='w-full max-w-[20%] relative'>
                                            <Image src={item.image} alt='' width={500} height={500} className='absolute left-[-40px] md:left-[-40px] lg:left-[-50px] top-1/2 translate-y-[-50%]'/>
                                        </div>
                                        <div className='w-full max-w-[80%]'>
                                            <h3 className='text-[14px] md:text-base font-semibold text-tertiary'>{item.name}</h3>
                                            <div className="mt-3 flex items-center justify-between gap-2">
                                                <h4 className='text-base font-semibold text-tertiary'>{item.category}</h4>
                                                <div className='flex items-center gap-1'>
                                                    <FaStar className='text-xl text-secondary'/>
                                                    <FaStar className='text-xl text-secondary'/>
                                                    <FaStar className='text-xl text-secondary'/>
                                                    <FaStar className='text-xl text-secondary'/>
                                                    <FaStarHalfAlt className='text-xl text-secondary'/>
                                                </div>
                                            </div>
                                            <p className='mt-3 text-base text-gray-20 font-medium line-clamp-1 md:line-clamp-2'>{item.description}</p>
                                            <div className="mt-3 flex items-center justify-between">
                                                <div className='flex gap-2'>
                                                    {item.sizes.map((si, index) => (
                                                        <label key={index} className="flex flex-col items-center cursor-pointer">
                                                            <div className={`w-6 h-6 text-[12px] flex justify-center items-center rounded-md bg-primary ${chooseSize[item._id] === si ? "border-[1px] border-gray-50" : ""}`}>{si}</div>
                                                            <input className="appearance-none" type="radio"  name={`size-${item._id}`} value={si} onChange={() => handleSizeChange(item._id, si)}/>
                                                        </label>
                                                    ))}
                                                </div>
                                                <div onClick={()=>addToCart(item._id , chooseSize[item._id])} className='cursor-pointer bg-secondary rounded-md w-7 h-7 flex justify-center items-center'>
                                                    <BiCartAdd  className='text-white text-2xl'/>
                                                </div>
                                            </div>
                                            <div className='mt-3 flex items-center justify-between'>
                                                <h4 className='text-[12px] md:text-base text-tertiary font-medium'>Prep: <span className='text-gray-30'>20m</span></h4>
                                                <h4 className='text-[12px] md:text-base text-tertiary font-medium'>Price: <span className="text-secondary">${item.price[chooseSize[item._id] as keyof typeof item.price] ?? 0}</span></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    })}
                </div>
    </div>
  )
}
