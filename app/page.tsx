

import Bylaws from '@/components/main/Bylaws'
import DaoPage from '@/components/main/Dao'
import Metaverse from '@/components/main/Metaverse'
import Mission from '@/components/main/Mission'
import SgaWhitePaper from '@/components/main/SgaWhitePaper';
import Tokenomics from '@/components/main/Tokenomics';
import Hero from '@/components/shared/Hero'
import Navbar from '@/components/shared/navbar/Navbar'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sapiens Space Exploration & Colonization Agency',
  description:
    "Reaching for the stars and seeking new frontiers, Sapiens Space Exploration & Colonization Agency is on a mission to expand humankind's presence beyond Earth. Founded in 2021 at the rise of a global pandemic, this ambitious startup is pioneering innovative technologies and spacecraft designs to make interplanetary travel and extraterrestrial settlement achievable in order to save humankind. Join the SSECA today and help build the foundations of a new universe.",
}

const page = () => {
  return (

    <main id='home'>
      <section className=''>
        <Navbar />
      </section>
      <div className='flex flex-col items-center justify-center p-10'>
        <Hero />
        <Mission />
        <Metaverse />
        <DaoPage />
        <Bylaws />
        <SgaWhitePaper />
        <Tokenomics />
      </div>
    </main>
  )
}

export default page
