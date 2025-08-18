import Image from 'next/image'
import React from 'react'
import imageHero from "../public/src/assets/bg.png"
import { FaPeopleGroup } from "react-icons/fa6";
import { LuChefHat } from "react-icons/lu";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiKnifeFork } from "react-icons/gi";
import { MdAllInbox } from "react-icons/md";


export default function Hero() {
  return (
    <div className='px-4 md:px-12 py-12 h-auto xl:h-[600px] flex flex-col justify-center bg-deep'>

        <div className='flex items-center flex-col xl:flex-row gap-16'>

            <div className='flex-1'>
                <div className='text-tertiary text-2xl sm:text-4xl md:text-5xl font-bold flex flex-col gap-1 md:gap-5'>
                    <span className='flex'>
                        Grab Exclusive
                        <span className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center'>
                            <span className='text-primary font-bold text-2xl transform -rotate-45'>F</span>
                        </span>
                        ood
                    </span>
                    <div className='text-tertiary sm:text-4xl md:text-5xl font-bold'>Discounts Now!</div>
                </div>
                <p className='mt-8 mb-4  text-gray-20 font-medium text-base'>Foodessa a world of flavors, freshness, and delight. Discover dishes that satisfy your cravings, excite your taste buds, and bring people together. From classic favorites to modern delights, find the perfect meal for every moment.</p>
                <button className='cursor-pointer text-base text-primaryLight bg-secondary px-4 py-3 rounded-full'>Explore Now</button>
            </div>
         
            <div className='flex-1 relative'>

                <Image src={imageHero} alt='hero-image' width={800} height={800} className='' />

                <div className='hidden md:block absolute left-[40px] top-[120px]  xl:left-[-20px] xl:top-[100px] rounded-md bg-white shadow-md px-5 py-2.5'>
                    <h3 className='flex items-center gap-2 text-base text-tertiary font-semibold'><FaPeopleGroup className='text-2xl text-secondary'/>Happy Customers</h3>
                    <p className='text-[12px] font-normal text-gray-20 max-w-[150px]'>Serving smiles with every delicious bite.</p>
                </div>

                <div className='hidden md:block absolute left-[40px] top-[360px]  xl:left-[-20px] xl:top-[280px] rounded-md bg-white shadow-md px-5 py-2.5'>
                    <h3 className='flex items-center gap-2 text-base text-tertiary font-semibold'><LuChefHat className='text-2xl text-secondary'/>Expert Cooks</h3>
                </div>

                <div className='hidden md:block absolute right-[110px] top-[40px] xl:right-[60px] xl:top-[0px] rounded-md bg-white shadow-md px-5 py-2.5'>
                    <h3 className='flex items-center gap-2 text-base text-tertiary font-semibold'><CiDeliveryTruck className='text-2xl text-secondary'/>Fast Delivery</h3>
                    <p className='text-[12px] font-normal text-gray-20 max-w-[150px]'>Fresh, hot meals at your doorstep.</p>
                </div>

                <div className='hidden md:block absolute right-[40px] top-[260px] xl:right-[-10px] xl:top-[200px] rounded-md bg-white shadow-md px-5 py-2.5'>
                    <h3 className='flex items-center gap-2 text-base text-tertiary font-semibold'><GiKnifeFork className='text-2xl text-secondary'/>99+ Dishes</h3>
                </div>

                <div className='hidden md:block absolute right-[110px] top-[420px] xl:right-[30px] xl:top-[300px] rounded-md bg-white shadow-md px-5 py-2.5'>
                    <h3 className='flex items-center gap-2 text-base text-tertiary font-semibold'><MdAllInbox className='text-2xl text-secondary'/>200+ Branches</h3>
                    <p className='text-[12px] font-normal text-gray-20 max-w-[150px]'>Bringing great food closer to you.</p>
                </div>
                
            </div>

        </div>

    </div>
  )
}
