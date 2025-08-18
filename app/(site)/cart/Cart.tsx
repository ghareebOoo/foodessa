"use client"
import { useFoodContext } from '@/context/FoodContext'
import Image from 'next/image'
import React, { useMemo } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaRegWindowClose } from "react-icons/fa";
import { Price } from '@/types';

export default function Cart() {

  const {ourFoods , myOrder , decreaseCart , increaseCart , deleteCart} = useFoodContext()

  console.log(myOrder)

  const cartItems = useMemo(() => Object.entries(myOrder).flatMap(([key, quantity]) => {
  const [id, size] = key.split("_");
  const foodItem = ourFoods.find(item => item._id === id);
  return foodItem ? { ...foodItem, size, quantity } : []; 
  }),
  [ourFoods, myOrder]
);


const subtotal = Object.entries(myOrder).reduce((acc , [key , quantity])=>{
  const [id , size] = key.split("_");
  const foodItem = ourFoods.find((item)=> item._id === id);
  if (!foodItem) return acc;
  const price = foodItem.price[size as keyof Price] || 0
  return acc + price * quantity
} , 0)


const shippingFee = subtotal > 0 ? 10 : 0;

const total = subtotal ? subtotal + shippingFee : 0.00


  console.log(cartItems)
  

  return (
    <div className='px-4 md:px-12 py-12'>

      <h2 className='text-2xl text-tertiary font-bold'>Cart <span className='text-secondary'>List</span></h2>

      <div className='mt-10 grid grid-cols-1 gap-8'>
        {cartItems.map((item , index)=>{
          return <div key={index} className='bg-deep p-2.5 rounded-md flex items-stretch justify-between gap-2'>

            <div className='flex items-stretch gap-2'>

              <div className="w-[60px] bg-white flex flex-col justify-center items-center rounded-md">
                <Image src={item.image} alt="image" width={50} height={50} />
              </div>

              <div className='flex flex-col justify-between'>
                <h3 className='text-[12px] md:text-base text-tertiary font-semibold'>{item.name}</h3>
                <span className='text-gray-50 font-medium text-base'>{item.size}</span>
                <div className='flex items-center gap-4 bg-primary rounded-full w-fit'>
                   <div onClick={()=>{increaseCart(item._id , item.size)}} className='cursor-pointer w-7 h-7 rounded-full flex items-center justify-center bg-secondary'>
                    <FaMinus className='text-1xl text-white'/>
                  </div>
                  <span className='text-base font-normal text-gray-30'>{item.quantity}</span>
                  <div onClick={()=>{decreaseCart(item._id , item.size)}} className='cursor-pointer w-7 h-7 rounded-full flex items-center justify-center bg-secondary'>
                    <FaPlus className='text-1xl text-white'/>
                  </div>
                </div>
              </div>

            </div>

           <div className='flex justify-between flex-col'>
              <div onClick={()=> deleteCart(item._id , item.size)} className='cursor-pointer'>
                <FaRegWindowClose className='text-2xl'/>
              </div>
              <span>${item.price[item.size as keyof Price]! * item.quantity}</span>
           </div>
          </div> 
        })}

      </div>

      {Object.keys(myOrder).length > 0 &&   <>
        <h2 className='mt-20 text-2xl text-tertiary font-semibold'>Cart <span className='text-secondary'>Total</span></h2>
      <div className='mt-8 flex flex-col gap-5 w-full max-w-[250px]'>

        <div className='flex justify-between items-center gap-5 border-b-[1px] border-gray-20 pb-1'>
          <p className='text-lg font-medium text-tertiary'>SubTotal:</p>
          <span className='text-base font-semibold text-gray-50'>{`$${subtotal}.00`}</span>
        </div>

        <div className='flex justify-between items-center gap-5 border-b-[1px] border-gray-20 pb-1'>
          <p className='text-lg font-medium text-tertiary'>Shipping Free:</p>
          <span className='text-base font-semibold text-gray-50'>{`$${shippingFee.toFixed(2)}`}</span>
        </div>

        <div className='flex justify-between items-center gap-5 border-b-[1px] border-gray-20 pb-1'>
          <p className='text-lg font-medium text-tertiary'>Total:</p>
          <span className='text-base font-semibold text-gray-50'>{`$${total.toFixed(2)}`}</span>
        </div>

      </div>
      </>}
    
    </div>
  )
   
}
