import React from 'react'
import { Header } from '../custom/Header'
const RootLayout = ({children}: Readonly<{
    children: React.ReactNode
}>) => {
  return (
      <div>
        <Header/>
        {children}
      </div>
  )
}

export default RootLayout
