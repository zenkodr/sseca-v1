// COMPONENT[epic=Main, type=main] ~ Metaverse

import Divider from '@/components/shared/Divider'

const Metaverse = () => {
  return (
    <div className=' flex w-[90vw] flex-col mt-20 items-center justify-center p-5'>
      <div className='justify-center flex w-full mb-10 flex-col items-center'>
        <Divider />
      </div>
      <article className='z-[200] flex w-full flex-col items-center justify-center'>
        <h1
          className='text-shadow-sm text-center mb-10 text-5xl font-bold
            text-sseca-seagull text-shadow-sseca-ebony
          '
        >
          A Living Metaverse Space-Simulation
        </h1>
        <section className='mt-10 flex w-full flex-col items-center justify-evenly gap-5 text-center text-sseca-zombie md:flex-row'>
          <div className='card-wrapper flex h-[750px] flex-col items-center justify-start md:w-[33vw]'>
            <h1 className='title-txt-md text-shadow-sm flex text-sseca-seagull text-shadow-sseca-ebony'>
              New Life
            </h1>
            <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
              All citizens commence their journey enlisting with the Sapiens
              Security Force (SSF) or a colonial corporation to acquire
              spaceflight training and work placements among the stars. Upon
              completing their service term, citizens are at liberty to chart
              their own course and carve a reputation in the Sapiens Galaxy
              Alliance (SGA).
            </p>
            <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
              As citizens progress, they can obtain ships, equipment, and even
              establish personal enterprises. Thanks to the SGA&pos;s
              blockchain-based market, major assets like spacecraft and land are
              traded as non-fungible tokens (NFTs).
            </p>
            <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
              Some privileged citizens are born among the stars, never setting
              foot on humanity&pos;s home planet. Known as the Sidereal, they
              are the progeny of the first colonists, born aboard space
              stations, habitats, and extraterrestrial colonies. These stellar
              pioneers mature accustomed to existence on the endless frontier,
              forging their own ventures or legacies as the first generation
              birthed beyond Earth&pos;s cradle.
            </p>
            <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
              With the endless galaxy as their playground, citizens possess
              opportunities unparalleled in human history, free to define their
              own destinies. All citizens, whether of celestial or terrestrial
              origin, to own a stake in mankind&pos;s interstellar future
              through crypto-enabled commerce across manifold worlds and
              far-flung outposts. United humanity voyages ever onward through
              the sea of stars.
            </p>
          </div>
          <div className='card-wrapper flex h-[750px] flex-col items-center justify-start md:w-[33vw]'>
            <h1 className='title-txt-md text-shadow-sm flex text-sseca-seagull text-shadow-sseca-ebony'>
              Exploration
            </h1>
            <div>
              <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
                Whether as a rugged pathfinder charting new territories or a
                soldier of fortune thriving on danger, one&pos;s prospects in
                the Sapiens Galaxy Alliance are limited only by daring and
                skill.
              </p>
              <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
                Citizens may explore the unmapped voids alone or band together
                with trusted allies for protection and camaraderie. Seek
                one&pos;s fortune through honest trade and discovery or embrace
                the anarchic liberty of piracy - in the farthest reaches of
                space, the choice is yours alone.
              </p>
              <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
                This modern wild frontier holds endless opportunity for those
                brave enough to seize it. Captain a deep-space vessel with a
                loyal crew, pushing back the boundaries of human knowledge with
                each lightyear jumped. Discover new celestial phenomena,
                unmapped planets ripe for settlement, and untapped asteroid
                belts harboring mineral riches.
              </p>
              <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
                Once discovered, individuals can digitally stake a claim on
                these virgin resources. Extractive industries spring up -
                mining, gas harvesting, industrial farming. Raw materials are
                processed and shuttled via merchant convoys to the core systems’
                markets, weaving outlying colonies together through trade.
              </p>
              <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
                While offering no guarantees beyond one’s own grit, the perilous
                frontier holds forth the hope of transcending the limits of an
                ordinary life. To those who dare reach for the stars - they
                await your discovery.
              </p>
            </div>
          </div>
          <div className='card-wrapper flex h-[750px] flex-col items-center justify-start md:w-[33vw]'>
            <h1 className='title-txt-md text-shadow-sm flex text-sseca-seagull text-shadow-sseca-ebony'>
              Your Empire
            </h1>
            <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
              The pioneers of this new age are explorers, settlers, miners, and
              industrialists – those brave enough to develop resources and
              infrastructure on newly charted worlds or in orbital shipyards.
              Their work forms the productive backbone of the Sapiens Galaxy
              Alliance (SGA), opening up numerous rewarding careers for others
              in the process.
            </p>
            <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
              A vast network of interdependent yet self-directed citizens keeps
              the wheels of space commerce turning. Independent traders
              distribute raw and refined ores between colonies hungry for
              materials. Freelance cargo haulers ferry goods between
              settlements. Private security contractors protect mining
              operations from piracy. Starship component craftsmen supply
              replacement parts to distant outposts. Armorers and weapon-smiths
              arm adventurers venturing beyond the frontier. Even entrepreneurs
              catering to civilian needs – clothing, entertainment, hospitality
              – can stake their claim on this modern galactic frontier, made
              accessible by crypto commerce and decentralized ownership of
              assets.
            </p>
            <p className='text-shadow items-center p-2 text-start text-lg text-shadow-sseca-ebony'>
              With opportunity calling explorers to the stars, citizens from all
              walks find profit and purpose as the SGA expands ever outward. The
              only limit is one’s willingness to depart the well-trodden
              pathways and risk forging new Star Paths into the unknown void.
            </p>
          </div>
        </section>
      </article>
    </div>
  )
}

export default Metaverse
