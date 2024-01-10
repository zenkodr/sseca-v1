// COMPONENT[epic=Shared, type=navbar] ~ PageNavbar
'use client'

import { ConnectWallet, darkTheme, useAddress } from '@thirdweb-dev/react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const PageNavbar = () => {
  const address = useAddress()

  return (
    <div className='fixed z-[600] h-[85px] w-[100vw] txt-base items-center justify-center bg-sseca-zombie/70 px-5 shadow-lg shadow-sseca-ebony max-sm:hidden'>
      <div className='flex h-full'>
        <div className='flex w-[100vw] items-center justify-between '>
          <a
            href='/'
            className='flex flex-row items-center justify-center'
          >
            <span className='title-txt-md flex flex-row items-center  text-shadow rounded-xl border border-sseca-zombie/60 bg-sseca-blackPearl px-3 font-bold text-sseca-zombie shadow-md shadow-sseca-ebony text-shadow-sseca-ebony'>
              <Image
                src='/logos/logo-full.svg'
                alt='SSECA Logo'
                width={50}
                height={50}
              />
              SSECA
            </span>
          </a>

          <div className='flex w-[400px] items-center justify-center text-shadow-sseca-ebony'>
            <section className='flex w-[100vw] items-center justify-between rounded-xl border border-sseca-zombie bg-sseca-blackPearl px-5 py-2 text-sseca-zombie shadow-md shadow-sseca-ebony'>
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <h1 className='text-shadow cursor-pointer text-shadow-black hover:border-b hover:border-sseca-zombie'>
                    Hub
                  </h1>
                </HoverCardTrigger>
                <HoverCardContent className='flex flex-col text-sm w-auto items-start mt-1 justify-center border border-sseca-zombie bg-sseca-blackPearl/90 p-3 uppercase text-sseca-zombie shadow-xl shadow-sseca-ebony'>
                  <a
                    href='/'
                    className='hoverCard-link-content'
                  >
                    SSECA Home
                  </a>
                  <a
                    href='/bazaar'
                    className='hoverCard-link-content'
                  >
                    Bazaar Home
                  </a>
                </HoverCardContent>
              </HoverCard>

              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <p className='hoverCard-link'>Collections</p>
                </HoverCardTrigger>
                <HoverCardContent className='flex flex-col text-sm w-auto items-start mt-1 justify-center border border-sseca-zombie bg-sseca-blackPearl/90 p-3 uppercase text-sseca-zombie shadow-xl shadow-sseca-ebony'>
                  <p>
                    Coming Soon
                  </p>
                </HoverCardContent>
              </HoverCard>
              <Link
                href='/recruitment'
                // href={`/profile/${address}`}
                className='cursor-pointer hover:text-shadow hover:border-b hover:border-sseca-zombie hover:text-shadow-black'
              >
                <p>Recruitment</p>
              </Link>
            </section>
          </div>
          <div className='flex items-center rounded-xl border px-1 border-sseca-zombie bg-sseca-blackPearl shadow-md shadow-sseca-ebony'>
            <ConnectWallet
              theme={darkTheme({
                colors: {
                  accentText: '#dfd699',
                  accentButtonBg: '#dfd699',
                  modalBg: '#051c2c',
                  dropdownBg: '#051c2c',
                  separatorLine: '#dfd699',
                  primaryText: '#dfd699',
                  secondaryText: '#dfd699',
                  connectedButtonBg: '#051c2c',
                  connectedButtonBgHover: '#dfd69920',
                  secondaryIconColor: '#dfd699',
                  primaryButtonBg: '#051c2c',
                  primaryButtonText: '#dfd699',
                  accentButtonText: '#051c2c',
                },
              })}
              btnTitle={'Connect your wallet to Enlist'}
              modalTitle={'Choose your Wallet'}
              // auth={{ loginOptional: false }}
              switchToActiveChain={true}
              modalSize={'wide'}
              welcomeScreen={{
                title: 'SGA DAO Bazaar',
                img: {
                  src: 'https://i.postimg.cc/qMpLRy2P/Logo-full.png',
                  width: 350,
                  height: 350,
                },
              }}
              modalTitleIconUrl={'https://i.postimg.cc/qMpLRy2P/Logo-full.png'}
            />
            {address && (
              <Link href={`/profile/${address}`}>
                <Image
                  src='/icons/user-icon.svg'
                  className='mx-3 cursor-pointer'
                  alt={''}
                  width={30}
                  height={30}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNavbar
