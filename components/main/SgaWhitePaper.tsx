// COMPONENT[epic=Main, type=main] ~ SgaWhitePaper

import ExecutiveSummary from '@/components/sections/whitepaper/ExecutiveSummary'
import GamePlay from '@/components/sections/whitepaper/GamePlay'
import MetaverseDevelopment from '@/components/sections/whitepaper/MetaverseDevelopment'
import RoadMap from '@/components/sections/whitepaper/RoadMap'
import Divider from '@/components/shared/Divider'
import Image from 'next/image'
import Lore from '@/components/sections/whitepaper/Lore';

const SgaWhitePaper = () => {
  return (
    <section className='my-20 flex w-full flex-col items-center justify-center'>
      <div
        id='whitepaper'
        className='mt-[85px] flex w-full flex-row pt-[90px]'
      >
        <h1 className='md:title-txt-xl title-txt-md flex w-full items-center justify-center rounded-lg uppercase text-sseca-seagull'>
          <span className='flex'>
            <Image
              src='/logos/logo-short.svg'
              alt='image'
              width={150}
              height={150}
              className='mx-10 rounded-2xl border-none shadow-none'
            />
          </span>
          White Paper
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
      <div className='card-wrapper txt-base mx-[35px] flex w-[75vw] flex-col p-6'>
        <ExecutiveSummary />
        <section className='pt-20'>
          <Divider />
        </section>
        <Lore />
        <section className='pt-20'>
          <Divider />
        </section>
        <GamePlay />
        <section className='pt-20'>
          <Divider />
        </section>
        <RoadMap />
        <section className='pt-20'>
          <Divider />
        </section>
        <MetaverseDevelopment />
      </div>
    </section>
  )
}

export default SgaWhitePaper
