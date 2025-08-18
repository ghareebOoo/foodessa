import React from 'react'
import { Toaster } from "react-hot-toast";
import LoginContextProvider from './context/LoginContext';
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <LoginContextProvider>
            { children }
            <Toaster position="bottom-right" />
        </LoginContextProvider>
    </div>
  )
}
