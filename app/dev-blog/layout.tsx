'use client'

import StaticBg from '@/components/shared/StaticBg';
import VideoBg from '@/components/shared/VideoBg';
import Navbar from '@/components/shared/navbar/Navbar'
import { ThirdwebProvider } from '@thirdweb-dev/react'


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThirdwebProvider>
      <div className='bg-sseca-blackPearl/50'>
        <StaticBg />
        <VideoBg src='/videos/PurpleSpace.webm' />
        <Navbar />
        {children}
      </div>
    </ThirdwebProvider>
  )
}

export default Layout
