'use client'

import VideoBg from '@/components/shared/VideoBg'
import Navbar from '@/components/shared/navbar/Navbar'
import { Mumbai } from '@thirdweb-dev/chains'
import { ThirdwebProvider, en } from '@thirdweb-dev/react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThirdwebProvider
      activeChain={Mumbai}
      clientId='process.env.NEXT_PUBLIC_CLIENT_ID'
      locale={en()}
    >
      <div className='bg-sseca-blackPearl/50 scrollbar-hidden::-webkit-scrollbar scrollbar-hidden overflow-x-hidden overflow-y-scroll h-[100vh] w-[100vw] '>
        <VideoBg src='/videos/SpiralGalaxy.webm' />
        <Navbar />
        {children}
      </div>
    </ThirdwebProvider>
  )
}

export default Layout
