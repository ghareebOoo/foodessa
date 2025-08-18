"use client";
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import {foods , categories} from "../../../public/src/assets/data";
import {Foods} from "../../../types";
import { useRouter } from 'next/navigation';

type ChooseSizeState = {
  [foodId: string]: string; 
};

type ourOrder = {
    [itemId: string]: number; 
}


type props = {
  showInput: boolean;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
  ourFoods: Foods[];
  setourFoods: React.Dispatch<React.SetStateAction<Foods[]>>
  chooseSize: ChooseSizeState;
  setChooseSize: React.Dispatch<React.SetStateAction<ChooseSizeState>>;
  goToPageByCategory: (value: string)=> void
  handleSizeChange: (foodId:string, size:string)=> void
  searchMain: string 
  setSearchMain: React.Dispatch<React.SetStateAction<string>>;
  myOrder: ourOrder;
  setMyOrder: React.Dispatch<React.SetStateAction<ourOrder>>;
  addToCart: (id: string , size:string)=> void
  decreaseCart: (id: string , size:string)=> void
  increaseCart: (id: string , size:string)=> void
  deleteCart: (id: string , size:string)=> void
  cartReady : boolean;
  setCartReady: React.Dispatch<React.SetStateAction<boolean>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
    
}

export const FoodContext = createContext<props | undefined>(undefined)

export default function FoodContextProvider({children}:{children: React.ReactNode}) {

    const [showInput , setShowInput] = useState<boolean>(false)
    const [ourFoods , setourFoods] = useState<Foods[]>([])
    const [chooseSize , setChooseSize] = useState({})
    const [myOrder , setMyOrder] = useState<ourOrder>({})
    const [searchMain , setSearchMain] = useState<string>("")
    const [cartReady , setCartReady] = useState<boolean>(false)
    const [token , setToken] = useState<string | null>(null)


    useEffect(() => {
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
      }
    }, []);

  

    useEffect(() => {
      if (ourFoods.length > 0) {
        const defaultSizes = ourFoods.reduce((acc, item) => { acc[item._id] = item.sizes[0]; return acc; }, 
        {} as Record<string, string>);
        setChooseSize(defaultSizes);
      }
    }, [ourFoods]);

    const handleSizeChange = (foodId:string, size:string) => {
      setChooseSize(prev => ({
        ...prev,
        [foodId]: size
      }));
    };

    const fetchFood = useCallback(()=>{
        setourFoods(foods)
    },[])

    useEffect(()=>{
        fetchFood()
    },[fetchFood])

    const router = useRouter()

    const goToPageByCategory = (value: string) => {
        const resultSearch = categories.filter( (item) => item.name.toLowerCase() === value.toLowerCase());
        if (resultSearch.length > 0) {
            router.push(`/menu/${value}`);
        }else {
            if (searchMain.trim() !== ""){
                router.push("/notfound");
            }
        }
        setShowInput(false);   
    };


  const addToCart = (itemId: string, size: string) => {
  setMyOrder((prev) => {
    const key = `${itemId}_${size}`; 
    const food = { ...prev };
    if (food[key]) {
      food[key] += 1;
    } else {
      food[key] = 1;
    }
    return food;
  });
};

  const decreaseCart = (itemId: string, size: string) => {
  setMyOrder((prev) => {
    const key = `${itemId}_${size}`; 
    const food = { ...prev };
    if (food[key]) {
      food[key] += 1;
    }
    return food;
  });
};

  const increaseCart = (itemId: string, size: string) => {
  setMyOrder((prev) => {
    const key = `${itemId}_${size}`; 
    const food = { ...prev };
    if (food[key] > 1) {
      food[key] -= 1;
    }
    return food;
  });
};


 const deleteCart = (itemId: string, size: string) => {
  setMyOrder((prev) => {
    const key = `${itemId}_${size}`; 
    const food = { ...prev };
    if (food[key]) {
      delete food[key];
    } 
    return food;
  });
};


  useEffect(()=>{
    const saveOrder = localStorage.getItem("myOrder")
    if(saveOrder){
      const parsedOrder = JSON.parse(saveOrder) as ourOrder
      setMyOrder(parsedOrder)
    }
    setCartReady(true)
  },[])

  useEffect(()=>{
    localStorage.setItem("myOrder" , JSON.stringify(myOrder))
  },[myOrder])






  return (
    <FoodContext.Provider value={{showInput , setShowInput , ourFoods , setourFoods , chooseSize , setChooseSize , handleSizeChange , goToPageByCategory , searchMain , setSearchMain , myOrder , setMyOrder , addToCart , cartReady , setCartReady , decreaseCart , increaseCart , deleteCart , token , setToken }}>
        {children}
    </FoodContext.Provider>
  )
}


export function useFoodContext(){
    const context = useContext(FoodContext)
    if(!context){
        throw new Error("can not find your context food")
    }
    return context
}
