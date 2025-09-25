"use client";
import React, { createContext, useContext , useEffect, useState } from 'react';





type props = {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
    
}

export const LoginContext = createContext<props | undefined>(undefined)

export default function LoginContextProvider({children}:{children: React.ReactNode}) {


  const [token , setToken] = useState<string | null>(null)

  
  useEffect(()=>{
    const savedToken = localStorage.getItem("token");
    if(savedToken){
      setToken(token)
    }
  },[token])

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);





  return (
    <LoginContext.Provider value={{ token , setToken }}>
      {children}
    </LoginContext.Provider>
  )
}


export function useLoginContext(){
    const context = useContext(LoginContext)
    if(!context){
        throw new Error("can not find your context login")
    }
    return context
}
