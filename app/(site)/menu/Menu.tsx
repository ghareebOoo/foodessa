"use client"
import React, { useEffect, useState } from 'react'
import { FaSearch, FaStarHalfAlt } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import {categories} from "../../../public/src/assets/data"
import Image from 'next/image';
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { useFoodContext } from '@/app/(site)/context/FoodContext';
import Loading from '@/components/Loading';
import { FaStar } from 'react-icons/fa6';
import { BiCartAdd } from 'react-icons/bi';
export default function Menu() {

    const [showCategory , setShowCategory] = useState(true)
    const [choosePrice , setChoosePrice] = useState("relevant")
    const {ourFoods , chooseSize , handleSizeChange , addToCart} = useFoodContext()
    const [filterCategory , setFilter] = useState("")
    const [search , setSearch] = useState("")

    let filteredFoods = ourFoods;


    if (filterCategory) {
        filteredFoods = filteredFoods.filter(item => item.category.toLowerCase() === filterCategory.toLowerCase())
    }


    if (search) {
        filteredFoods = filteredFoods.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (choosePrice === "low") { 
        filteredFoods = [...filteredFoods].sort((a, b) => {
        const minPriceA = Math.min(...Object.values(a.price));
        const minPriceB = Math.min(...Object.values(b.price));
        return minPriceA - minPriceB;}); 
    } 
    else if (choosePrice === "high") { 
        filteredFoods = [...filteredFoods].sort((a, b) => {
        const minPriceA = Math.min(...Object.values(a.price));
        const minPriceB = Math.min(...Object.values(b.price));
        return minPriceB - minPriceA;});
    } 



    const handelLevel = (value: string)=>{
        setChoosePrice(value)
    }

  

    const [currentPage , setCurrentPage] = useState(1)
    const perPage = 10;
    const paginatedFoods = filteredFoods.slice((currentPage - 1) * perPage, currentPage * perPage);
    const totalPages = Math.ceil(filteredFoods.length / perPage);

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[currentPage])


  return (
    <div className='px-4 md:px-12 py-12'>

        <div className='w-full max-w-[650px] relative'>
            <input onChange={(e)=>{setSearch(e.target.value)}} className='w-full h-full bg-deep outline-none rounded-full py-4 pl-14' placeholder='See more...'/>
            <FaSearch className='cursor-pointer text-2xl text-tertiary absolute left-5 top-[50%] translate-y-[-50%]'/>
            <ImExit onClick={()=>{setShowCategory(!showCategory)}} className='cursor-pointer border-l-[1px] border-gray-20 pl-1 text-2xl text-tertiary absolute right-5 top-[50%] translate-y-[-50%]'/>
        </div>

        {showCategory &&    <div className='mt-10'>
            <div className='flex items-center justify-between gap-5'>
                <h2 className='text-2xl text-tertiary font-bold'>Select by category</h2>
                <button onClick={()=>{setFilter("")}} className='cursor-pointer px-3 py-2 rounded-full text-white bg-tertiary'>Reset</button>
            </div>
            <div className='mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8'>
                {categories.map((item , index)=>{
                    return <div onClick={()=> setFilter(item.name)} key={index} className='cursor-pointer bg-deep rounded-full px-3 py-1 flex items-center gap-5'>
                        <Image src={item.image} alt='image' width={80} height={80}/>
                        <h3 className='text-[14px] font-medium text-gray-30'>{item.name}</h3>
                    </div>
                })}
            </div>
        </div>}

        <div className='mt-10 flex flex-col md:flex-row justify-center items-center md:justify-between gap-5'>
            <h2 className='text-xl font-semibold text-tertiary'>Food <span className='text-secondary'>Selection</span></h2>
            <div className='flex items-center gap-2'>
                <div className='text-base font-medium'>Sort by:</div>
                <div>
                    <Select value={choosePrice} onValueChange={handelLevel}>
                        <SelectTrigger className="w-[140px] bg-deep">
                            <SelectValue placeholder="Relevant" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="relevant">Relevant</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
        
        {ourFoods.length === 0 ? <Loading /> : <>
         <div className='mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
            {paginatedFoods.map((item , index)=>{
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
                                            <BiCartAdd className='text-white text-2xl'/>
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
         <div className='mt-8 flex items-center justify-center gap-4 flex-wrap'>
        
            <button onClick={()=> setCurrentPage(prev=>prev-1)} disabled={currentPage === 1} className={`${currentPage === 1 ? "opacity-30 cursor-not-allowed bg-green-950" : "bg-secondary"} cursor-pointer text-white rounded-full px-3 py-2`}>Prev</button>
        
                {Array.from({length: totalPages}).map((_, index)=>{
                    return <button onClick={()=> setCurrentPage(index+1)} key={index} className={`cursor-pointer w-8 h-8 rounded-full text-base ${currentPage === index+1 ? "text-white bg-secondary" : "text-black bg-primary"}`}>{index+1}</button>
                })}
        
            <button onClick={()=> setCurrentPage(prev=>prev+1)} disabled={currentPage === totalPages} className={`${currentPage === totalPages ? "opacity-30 cursor-not-allowed bg-green-950" : "bg-secondary"} cursor-pointer text-white rounded-full px-3 py-2`}>Next</button>
        
        </div>
        </>  }

         
    </div>
  )
}
