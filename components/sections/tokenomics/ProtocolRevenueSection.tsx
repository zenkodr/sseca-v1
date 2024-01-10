// COMPONENT[epic=Tokenomics, type=tokenomics] ~ Protocol Revenue Streams

import Divider from '@/components/shared/Divider'

const ProtocolRevenueSection = () => {
  return (
    <div
      id='protorev'
      className='txt-base mt-24'
    >
      <div className='my-24'>
        <Divider />
      </div>
      <section>
        <h2 className='title-txt-lg mb-32 text-center text-sseca-seagull underline underline-offset-8'>
          Protocol Revenue
        </h2>

        <div className='mb-10'>
          <h3 className='title-txt mb-3 italic text-sseca-seagull'>
            Galactic Marketplace Transaction Fees
          </h3>
          <p className='pl-6'>
            A portion of transaction fees derived from various in-game
            activities, including trades, purchases, and sales on the Galactic
            Marketplace, contributes directly to the protocol&apos;s revenue.
          </p>
        </div>

        <div className='mb-10'>
          <h3 className='title-txt mb-3 italic text-sseca-seagull'>
            Celestial Star Paths (CSP) Fees
          </h3>
          <p className='pl-6'>
            Fees generated from the utilization of Celestial Star Paths extend
            beyond exploration and contribute significantly to the
            protocol&apos;s revenue.
          </p>
        </div>

        <div className='mb-10'>
          <h3 className='title-txt mb-3 italic text-sseca-seagull'>
            Resource Extraction Levies
          </h3>
          <p className='pl-6'>
            Implementing a small levy on the extraction of valuable in-game
            resources provides an additional revenue stream. This ensures that
            as players exploit the vast resources available in the metaverse, a
            percentage contributes directly to the protocol, sustaining its
            growth and innovation.
          </p>
        </div>

        <div className='mb-10'>
          <h3 className='title-txt mb-3 italic text-sseca-seagull'>
            Land Development Taxes
          </h3>
          <p className='pl-6'>
            Introducing a tax on the development of virtual land and colonies
            within the metaverse adds a layer of economic sustainability. The
            collected taxes support the expansion of virtual territories,
            fostering economic growth and incentivize citizens to actively
            participate in the continuous development of the digital landscape.
          </p>
        </div>

        <div className='mb-10'>
          <h3 className='title-txt mb-3 italic text-sseca-seagull'>
            Special Event Sponsorships
          </h3>
          <p className='pl-6'>
            Leveraging the popularity of special in-game events, the protocol
            can secure sponsorships and partnerships. Revenue generated from
            these collaborations can be directed toward enhancing the overall
            gaming experience, organizing larger events, and implementing
            cutting-edge features that keep the metaverse vibrant and engaging.
          </p>
        </div>

        <div className='mb-10'>
          <h3 className='title-txt mb-3 italic text-sseca-seagull'>
            Licensing and Intellectual Property (IP) Fees
          </h3>
          <p className='pl-6'>
            Facilitating the creation and trading of unique in-game assets, such
            as proprietary ship designs, skins, or characters, opens up avenues
            for licensing and IP fees. This approach not only diversifies the
            protocol&apos;s revenue streams but also encourages creative
            contributions from the community.
          </p>
        </div>

        <div className='mb-10'>
          <h3 className='title-txt mb-3 italic text-sseca-seagull'>
            Strategic Allocation and Financial Sustainability
          </h3>
          <p className='pl-6'>
            These fees are strategically allocated to fund diverse initiatives
            such as advanced research projects, technological enhancements, and
            the creation of exclusive in-game content. This dynamic system
            ensures a sustainable financial model for ongoing development,
            continual marketing efforts, and the maintenance of a robust reserve
            fund. Diversifying revenue streams ensures the resilience and
            adaptability of the protocol, fostering a self-sustaining ecosystem
            that benefits all participants in the metaverse.
          </p>
        </div>
      </section>
    </div>
  )
}

export default ProtocolRevenueSection
