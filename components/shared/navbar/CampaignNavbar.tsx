// COMPONENT[epic=Shared, type=navbar] ~ Navbar
'use client'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { ConnectWallet, darkTheme, useAddress } from '@thirdweb-dev/react'
import Image from 'next/image'
import Link from 'next/link'

const CampaignNavbar = () => {
  const address = useAddress()

  return (
    <div className='fixed z-[600] h-[80px] w-[100vw] txt-base items-center justify-center bg-sseca-zombie/70 px-5 shadow-lg shadow-sseca-ebony max-sm:hidden'>
      <div className='flex flex-row'>
        <div className='flex w-[100vw] items-center justify-between'>
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

          <div className='flex w-[33vw] items-center justify-center text-shadow-sseca-ebony'>
            <section className='flex w-[100vw] items-center justify-evenly rounded-xl border border-sseca-zombie bg-sseca-blackPearl  py-2 text-sseca-zombie shadow-md shadow-sseca-ebony'>
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <p className='hoverCard-link'>Home</p>
                </HoverCardTrigger>
                <HoverCardContent className='flex flex-col text-sm w-auto items-start mt-1 justify-center border border-sseca-zombie bg-sseca-blackPearl/90 p-3 uppercase text-sseca-zombie shadow-xl shadow-sseca-ebony'>
                  <HoverCard openDelay={200}>
                    <HoverCardTrigger asChild>
                      <p className='hoverCard-link my-1'>About</p>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side='right'
                      className='flex flex-col text-sm w-auto items-start mt-5 justify-center border border-sseca-zombie bg-sseca-blackPearl/90 p-3 uppercase text-sseca-zombie shadow-xl shadow-sseca-ebony'
                    >
                      <a
                        href='#dao'
                        className='hoverCard-link-content'
                      >
                        DAO
                      </a>
                      <a
                        href='#constitution'
                        className='hoverCard-link-content'
                      >
                        Constitution
                      </a>
                    </HoverCardContent>
                  </HoverCard>
                  <HoverCard openDelay={200}>
                    <HoverCardTrigger asChild>
                      <p className='hoverCard-link my-1'>Development</p>
                    </HoverCardTrigger>
                    <HoverCardContent
                      side='right'
                      sideOffset={3}
                      className='flex flex-col text-sm w-auto items-start mt-1 justify-center border border-sseca-zombie bg-sseca-blackPearl/90 p-3 uppercase text-sseca-zombie shadow-xl shadow-sseca-ebony'
                    >
                      <a
                        href='#whitepaper'
                        className='hoverCard-link-content'
                      >
                        White-Paper
                      </a>
                      <a
                        href='#roadmap'
                        className='hoverCard-link-content'
                      >
                        RoadMap
                      </a>
                      <a
                        href='#metaverse'
                        className='hoverCard-link-content'
                      >
                        Metaverse Development
                      </a>
                      <a
                        href='#tokenomics'
                        className='hoverCard-link-content'
                      >
                        Tokenomics
                      </a>
                      <a
                        href='#protorev'
                        className='hoverCard-link-content'
                      >
                        Protocol Revenue
                      </a>
                    </HoverCardContent>
                  </HoverCard>
                </HoverCardContent>
              </HoverCard>

              <a
                href='/bazaar'
                className='hoverCard-link'
              >
                Bazaar
              </a>
              <HoverCard openDelay={200}>
                <HoverCardTrigger asChild>
                  <p className='hoverCard-link my-1'>Campaigns</p>
                </HoverCardTrigger>
                <HoverCardContent side='bottom' sideOffset={3} className='flex flex-col text-sm w-auto items-start mt-1 justify-center border border-sseca-zombie bg-sseca-blackPearl/90 p-3 uppercase text-sseca-zombie shadow-xl shadow-sseca-ebony'>
                      <a
                        href='/campaigns'
                        className='hoverCard-link-content'
                      >
                        Explore Campaigns
                      </a>
                      <a
                        href='/createCampaign'
                        className='hoverCard-link-content'
                      >
                        Create a Campaign
                      </a>
                    </HoverCardContent>
              </HoverCard>
              <a
                href='/recruitment'
                className='hoverCard-link'
              >
                Development Blog
              </a>
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

export default CampaignNavbar
