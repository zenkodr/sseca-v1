'use client'

import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  trustWallet,
  rainbowWallet,
  phantomWallet,
  en,
} from "@thirdweb-dev/react";
import React from 'react'
import './globals.css'

import Footer from '@/components/shared/Footer'
import StarsCanvas from '@/components/shared/StarField'
import { Mumbai } from '@thirdweb-dev/chains'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <ThirdwebProvider
        activeChain={Mumbai}
        clientId='process.env.NEXT_PUBLIC_CLIENT_ID'
        locale={en()}
      supportedWallets={[
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        trustWallet(),
        rainbowWallet({ recommended: true }),
        phantomWallet(),
      ]}
      >
        <body className='scrollbar-hidden::-webkit-scrollbar h-[100vh] w-[100vw] scrollbar-hidden overflow-x-hidden overflow-y-scroll bg-sseca-blackPearl'>
          <StarsCanvas />
          {children}
          <Footer />
        </body>
      </ThirdwebProvider>
    </html>
  )
}
