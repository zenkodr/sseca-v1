// COMPONENT[epic=Main, type=main] ~ Bylaws

import SgaCon from '@/components/sections/constitution/SgaCon'
import Image from 'next/image'

const Bylaws = () => {
  return (
    <section className='my-20 flex w-full flex-col items-center justify-center'>
      <div
        id='constitution'
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
          Constitution
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
      <div className='card-wrapper mx-[35px] flex w-[75vw] flex-col'>
        <section className='mt-2 flex items-center justify-center p-6'>
          <SgaCon />
        </section>
      </div>
    </section>
  )
}

export default Bylaws
