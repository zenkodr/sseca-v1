import CampaignCard from '@/components/Campaign/CampaignCard'
import CampaignRoadMap from '@/components/Campaign/CampaignRoadMap'
import RewardsCard from '@/components/Campaign/RewardsCard'
import TechnologyCard from '@/components/Campaign/TechnologyCard'
import Divider from '@/components/shared/Divider'

const CrowdFunding = () => {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <h1 className='title-txt-xl text-sseca-seagull mt-40 mb-10 text-center'>
        Active Recruitment campaigns
      </h1>
      <div className='flex sm:flex-row w-[100vw] h-[100vh] flex-col p-5'>
        <section className='basis-3/4 flex flex-col scrollbar-hidden::-webkit-scrollbar scrollbar-hidden items-start'>
          <CampaignCard />
          <div className='mt-16 flex w-full'>
            <Divider />
          </div>
          <TechnologyCard />
          <div className='mt-16 flex w-full'>
            <Divider />
          </div>
          <CampaignRoadMap />
        </section>
        <section className='basis-1/4 flex flex-col scrollbar-hidden::-webkit-scrollbar scrollbar-hidden items-start'>
          <RewardsCard />
        </section>
      </div>
    </div>
  )
}

export default CrowdFunding
