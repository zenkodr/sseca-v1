// COMPONENT[epic=Shared, type=general] ~ Hero Content

'use client'

import { slideInFromRight, slideInFromTop } from '@/util/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroContent = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='z-[20] mt-20 flex w-full flex-col items-center justify-center'
    >
      <div className='flex flex-col items-center justify-center'>
        <motion.div
          className=' flex w-full items-center justify-center'
          variants={slideInFromTop}
        >
          <h1 className='md:title-txt-xl title-txt-lg flex flex-col items-center text-center md:flex-row'>
            <span>
              <motion.div
                className=''
                variants={slideInFromRight(0.5)}
              >
                <Image
                  src='/logos/logo-full.svg'
                  alt='SSECA Logo'
                  width={250}
                  height={250}
                />
              </motion.div>
            </span>
            Sapiens Space Exploration & Colonization Agency
          </h1>
        </motion.div>
        <motion.div variants={slideInFromRight(0.5)}>
          <Image
            src='/backgrounds/webp/conceptbg-02.webp'
            alt='image'
            width={1366}
            height={1366}
            className='img-accent-shadow left-0 flex rounded-2xl'
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroContent
