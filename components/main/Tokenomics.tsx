// COMPONENT[epic=Main, type=main] ~ Tokenomics

import EconomyTokenSection from '@/components/sections/tokenomics/EconomyTokenSection'
import ExecutiveTokenSection from '@/components/sections/tokenomics/ExecutiveTokenSection'
import ProtocolRevenueSection from '@/components/sections/tokenomics/ProtocolRevenueSection'
import TokenomicsSection from '@/components/sections/tokenomics/TokenomicsSection'
import Image from 'next/image'
import Divider from '../shared/Divider';

const Tokenomics = () => {
  return (
    <section className='my-20 flex w-full flex-col items-center justify-center'>
      <div
        id='tokenomics'
        className='mt-[85px] flex w-full flex-row pt-[90px]'
      >
        <h1 className='md:title-txt-xl title-txt-md flex w-full items-center justify-center rounded-lg font-bold uppercase text-sseca-seagull'>
          <span className='flex'>
            <Image
              src='/logos/logo-short.svg'
              alt='image'
              width={150}
              height={150}
              className='mx-10 rounded-2xl border-none shadow-none'
            />
          </span>
          Tokenomics & Protocol Revenue
          <span className='flex'>
            <Image
              src='/logos/logo-short.svg'
              alt='image'
              width={150}
              height={150}
              className='mx-10 rounded-2xl border-none shadow-none'
            />
          </span>
        </h1>
      </div>
      <div className='card-wrapper mt-10 w-[75vw] p-6 '>
        <TokenomicsSection />
        <div className='my-24'>
          <Divider />
        </div>
        <ExecutiveTokenSection />
        <div className='my-24'>
          <Divider />
        </div>
        <EconomyTokenSection />
        <ProtocolRevenueSection />
      </div>
    </section>
  )
}

export default Tokenomics
