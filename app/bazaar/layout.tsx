'use client'

import StaticBg from '@/components/shared/StaticBg';
import VideoBg from '@/components/shared/VideoBg';
import Navbar from '@/components/shared/navbar/Navbar'
import { ThirdwebProvider } from '@thirdweb-dev/react'
import { Video } from 'lucide-react';


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThirdwebProvider>
      <div className='bg-sseca-blackPearl/50 h-full w-full'>
        <VideoBg src='/videos/SpiralGalaxy.webm' />
        <StaticBg />
        <Navbar />
        {children}
      </div>
    </ThirdwebProvider>
  )
}

export default Layout
