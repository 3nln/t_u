import React from 'react'
import { Header } from '../custom/Header'
import { Toaster } from '../ui/sonner'
const RootLayout = ({children}: Readonly<{
    children: React.ReactNode
}>) => {
  return (
      <div>
        <Header/>
        {children}
        <Toaster />
      </div>
  )
}

export default RootLayout
