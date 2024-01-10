// COMPONENT[epic=Main, type=main] ~ About

'use client'

import { slideInFromLeft, slideInFromRight } from '@/util/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Mission = () => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      className='z-[20] mt-[60px] flex w-full flex-col items-center justify-center'
    >
      <div
        id='about'
        className='title-txt-xl mt-[85px] flex flex-col items-center justify-center rounded-lg pt-[90px] text-sseca-seagull'
      >
        Exploration & Colonization
      </div>
      <div className='mt-20 flex flex-col items-center justify-center'>
        <motion.div
          className='mx-5 flex flex-col items-center justify-center gap-5 p-5'
          variants={slideInFromLeft(0.6)}
        >
          <motion.p
            className='card-wrapper text-shadow mt-10 flex w-[75vw] flex-col items-center justify-center p-5 text-center font-oxygen text-sseca-zombie text-shadow-sseca-ebony md:text-xl'
            variants={slideInFromRight(1)}
          >
            Once the exclusive province of science fiction stories and films,
            the subject of space colonization has rapidly moved several steps
            closer to becoming a reality thanks to major advances in rocket
            propulsion and design, astronautics and astrophysics, robotics, and
            medicine. The urgency to establish humanity as a multi-planet
            species has been re-validated by the emergence of a worldwide
            pandemic.
          </motion.p>
        </motion.div>
      </div>
      <div>
        <motion.div
          className='mx-5 mt-20 flex w-full flex-col items-center justify-center p-20'
          variants={slideInFromRight(1)}
        >
          <div className='flex w-full flex-col items-center justify-center md:flex-row'>
            <Image
              src='/ConceptArtWork/webp/SGA-ConceptArt_PlanetaryBase.webp'
              alt='image'
              width={450}
              height={450}
              className='img-accent-shadow right-0 mr-10 flex flex-col rounded-2xl md:flex-row'
            />
            <div className='mt-10 flex w-[75vw] flex-col items-center justify-center gap-10'>
              <motion.h1
                className='text-shadow text-shadow-sm flex items-center justify-center text-3xl font-bold text-sseca-seagull text-shadow-sseca-ebony md:text-5xl'
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                  duration: 5,
                  delay: 0.3,
                  ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.2 }}
              >
                THE GALAXY AWAITS
              </motion.h1>

              <motion.p
                className='card-wrapper text-shadow flex w-full flex-col items-center p-5 text-center font-oxygen text-sseca-zombie text-shadow-sseca-ebony md:text-xl'
                variants={slideInFromLeft(1.5)}
              >
                Join the expeditionary forces in their exploration of new
                worlds. Travel from star system to star system, encountering all
                manner of alien civilizations and making friends with some while
                making enemies of others. You&apos;ll build colonies on new
                planets as well as defend them from attacking forces. Discover
                new technologies that allow you to explore even further into
                space than before—but watch out for those dangerous anomalies!
                The universe is big and beautiful—and it&apos;s waiting for you
                to discover it!
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className='mx-10 mt-10 flex flex-col '>
        <motion.div
          className='mx-5 flex flex-col items-center gap-5 p-5 md:flex-row'
          variants={slideInFromLeft(1)}
        >
          <div className=' flex w-[75vw] flex-col items-center justify-center gap-10'>
            <motion.h1 className='text-shadow-sm flex w-full items-center justify-center text-3xl font-bold text-sseca-seagull text-shadow-sseca-ebony md:text-5xl'>
              Your Path to the Stars
            </motion.h1>
            <motion.p
              className='card-wrapper text-shadow flex w-full flex-col items-center p-5 text-center font-oxygen text-sseca-zombie text-shadow-sseca-ebony md:text-xl'
              variants={slideInFromRight(1.5)}
            >
              Enlist with the Sapiens Security Force (SSF) or hire on with a
              corporation to begin your galactic life. Complete training in your
              chosen career to be assigned to an off-world expedition. Once
              off-world, you will first have to complete the enlistment term
              before building your galactic empire. As you seek your fortune,
              you will be able to acquire ships and equipment, start your own
              companies, build your own ships and stations, trade goods, mine
              resources, colonize planets, or take on dangerous contract
              missions in deep space. Explore the vast expanses of space however
              you choose, but beware you are not alone in the galaxy. You will
              encounter other citizens, space stations, colonies, and friendly
              and hostile alien species. Whether you want to be an intergalactic
              explorer, colonizer, trader, or live outside the law, Sapiens
              Galactic Alliance has something for you. Discover new planets, and
              alien species.
            </motion.p>
          </div>
          <Image
            src='/ConceptArtWork/webp/SGA-ConceptArt_armor-1.webp'
            alt='image'
            width={450}
            height={450}
            className='img-accent-shadow right-0 mr-10 flex flex-col rounded-2xl md:flex-row'
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Mission
