"use client"
import React, { useState } from 'react'

import {HeaderLinks} from "../public/src/assets/data"
import {HEADERLINKS} from "../types"
import Link from 'next/link'
import { usePathname, useRouter} from 'next/navigation'
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch , FaRegWindowClose } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { CgMenuLeft } from "react-icons/cg";
import { useFoodContext } from '@/app/(site)/context/FoodContext'


import { FaUserSecret } from "react-icons/fa";

export default function Header() {
     
    const {goToPageByCategory , searchMain , setSearchMain , showInput , setShowInput , myOrder , cartReady , token , setToken} = useFoodContext()


    const pathName = usePathname()
    const router = useRouter()

    const [showNav , setShowNav] = useState<boolean>(false)


  return (
    <div className='px-4 md:px-12 py-8'>
        <div className='flex items-center justify-between'>

            <div className='flex items-center'>
                <div className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center'>
                    <div className='text-primary font-bold text-2xl transform -rotate-45'>F</div>
                </div>
                <div className='text-tertiary font-bold text-lg md:text-2xl'>oodessa</div>
            </div>

             {/* DESKTOP */}

            <div className='hidden lg:flex items-center gap-6'>
                {HeaderLinks.map((item:HEADERLINKS , index)=>{
                    return <Link  key={index} href={item.herf} className={`flex items-center gap-3 w-fit relative ${pathName === item.herf ? "before:w-full" : "before:w-0"} before:absolute before:h-[2px] before:bg-secondary before:top-7`}>
                        <span className={`${pathName === item.herf ? "!text-secondary" : "text-tertiary"}`}>{item.icon}</span>
                        <span className={`${pathName === item.herf ? "!text-secondary" : ""} text-xl font-semibold text-tertiary`}>{item.label}</span>
                    </Link>
                })}
            </div>

            {/* MOBILE */}

            <div className={`${showNav ? "translate-x-0" : "translate-x-[-100%]"} pt-20 flex flex-col items-center transition-all duration-700 lg:hidden w-[300px] h-screen fixed top-0 left-0 z-50 bg-white shadow-md`}>
                
                <div onClick={()=>{setShowNav(false)}} className='cursor-pointer absolute right-5 top-5'>
                    <FaRegWindowClose className='text-2xl text-secondary'/>
                </div>

                <div className='flex items-center'>
                    <div className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center'>
                        <div className='text-primary font-bold text-2xl transform -rotate-45'>F</div>
                    </div>
                    <div className='text-tertiary font-bold text-lg md:text-2xl'>oodessa</div>
                </div>

                <div className='mt-12 flex flex-col items-start gap-6'>
                    {HeaderLinks.map((item:HEADERLINKS , index)=>{
                        return <Link  key={index} href={item.herf} className={`flex items-center gap-3 w-fit relative ${pathName === item.herf ? "before:w-full" : "before:w-0"} before:absolute before:h-[2px] before:bg-secondary before:top-7`}>
                            <span className={`${pathName === item.herf ? "!text-secondary" : "text-tertiary"}`}>{item.icon}</span>
                            <span className={`${pathName === item.herf ? "!text-secondary" : ""} text-xl font-semibold text-tertiary`}>{item.label}</span>
                        </Link>
                        })}
                </div>

            </div>

            <div className='flex items-center gap-3 md:gap-6'>

                <div className={`${showInput ? "w-[200px]" : "w-10"} hidden lg:flex relative transition-all duration-700 h-10 items-center justify-center`}>
                    <input value={searchMain} onChange={(e)=>{setSearchMain(e.target.value)}} type='search' placeholder='Search By Category...' className='appearance-none w-full h-full px-4 outline-none bg-primary shadow-md rounded-full placeholder:text-[14px]'/>
                    <div onClick={()=>{if (!showInput) {setShowInput(true);} else { goToPageByCategory(searchMain); setSearchMain("")}}} className='cursor-pointer absolute right-2 top-1/2 -translate-y-1/2'>
                        <FaSearch className='text-xl text-secondary'/>
                    </div>
                </div>

                {!showNav &&    <div onClick={()=>{setShowNav(true)}} className='lg:hidden cursor-pointer'>
                    <CgMenuLeft className='text-2xl text-tertiary'/>
                </div>}
                
                {cartReady ?  <div onClick={()=> router.push("/cart")} className='cursor-pointer relative'>
                    <FaCartShopping className='text-2xl text-tertiary'/>
                    <div className='absolute -top-7 -right-4 bg-secondary w-7 h-7 rounded-full text-primaryLight flex items-center justify-center'>{Object.values(myOrder).reduce((acc, cur)=> acc + cur , 0)}</div>
                </div> : <div>Loading...</div>}
               

                {cartReady ? ( token ? ( <div onClick={() => { setToken(null); localStorage.removeItem("token");}} className="cursor-pointer transition-all duration-700 py-2 px-2 md:px-4 rounded-full hover:bg-primary flex items-center gap-3 border-[1px] border-tertiary">
                    <span className="text-tertiary font-normal text-[12px] md:text-base">Log out</span>
                    <FaUserSecret className="text-1xl text-tertiary" /></div>) : 
                    (<Link href={"/login"} className="cursor-pointer transition-all duration-700 py-2 px-2 md:px-4 rounded-full hover:bg-primary flex items-center gap-3 border-[1px] border-tertiary">
                    <span className="text-tertiary font-normal text-[12px] md:text-base">Login</span>
                    <CiUser className="text-1xl text-tertiary" /></Link>)) : 
                    (<div>Loading...</div> )
                }
            </div>

        </div>
    </div>
  )
}
