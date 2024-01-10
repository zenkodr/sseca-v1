// COMPONENT[epic=Main, type=main] ~ Dao
import Image from 'next/image'
import SgaDao from '../sections/dao/SgaDao'

const DaoPage = () => {
  return (
    <section className='my-20 flex w-full flex-col items-center justify-center'>
      <div
        id='dao'
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
          DAO & Governance
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

        <section className='card-wrapper txt-base mx-[35px] flex w-[75vw] flex-col p-6'>
          <SgaDao />
        </section>
    </section>
  )
}

export default DaoPage
