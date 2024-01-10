// COMPONENT[epic=Tokenomics, type=tokenomics] ~ EconomyTokenSection

const EconomyTokenSection = () => {
  return (
    <section id='sgac' className='txt-base mt-24'>
      <div className='mb-10'>
        <h3 className='title-txt-sm mb-3 italic text-sseca-seagull'>
          Economy Token:&nbsp;
          <span className='not-italic text-sseca-zombie'>
            &nbsp; SAPIEN GALACTIC ALLIANCE CREDIT
          </span>
        </h3>
        <h3 className='title-txt-sm mb-3 italic text-sseca-seagull'>
          Symbol:&nbsp;
          <span className='not-italic text-sseca-zombie'>&nbsp; SGAC</span>
        </h3>
        <h3 className='title-txt-sm mb-3 italic text-sseca-seagull'>
          Maximum Supply:&nbsp;
          <span className='not-italic text-sseca-zombie'>
            &nbsp; 1,000,000,000 (unless amended by SGA DAO)
          </span>
        </h3>
      </div>

      <div className='mb-10'>
        <h3 className='title-txt mb-3 italic text-sseca-seagull'>Distribution</h3>
        <ul className='list-disc pl-8'>
          <li>
            50% Play to Earn Rewards: Allocated for rewarding players who
            actively engage with and contribute to the SSECA metaverse through
            gameplay.
          </li>
          <li>
            30% User Acquisition & Growth: Directed towards attracting new users
            to the SSECA ecosystem and facilitating its organic growth.
          </li>
          <li>
            20% Development & Operations: Reserved for the ongoing development,
            maintenance, and operational needs of the SSECA project.
          </li>
        </ul>
      </div>

      <div className='mb-10'>
        <h3 className='title-txt mb-3 italic text-sseca-seagull'>Token Burn</h3>
        <ul className='list-disc pl-8'>
          <li>
            2% burn on each SGAC transaction: A deflationary mechanism applied to
            each Sapiens Galactic Alliance Credit (SGAC) transaction.
          </li>
          <li>
            1% burned immediately: Immediate reduction in the token supply.
          </li>
          <li>
            1% goes to Burn Vault: Contributing to a reserve, periodically
            burned for compounded deflationary impact.
          </li>
        </ul>
      </div>

      <div className='mb-10'>
        <h3 className='title-txt mb-5 italic text-sseca-seagull'>
          Distribution Schedules
        </h3>
        <ul>
          <li className='pl-4 italic text-sseca-seagull'>
            Play-to-Earn Rewards:
            <ul className='mt-3 list-disc pl-8'>
              <li className='text-sseca-zombie'>Year 1: 10% of supply</li>
              <li className='text-sseca-zombie'>Year 2: 15% of supply</li>
              <li className='text-sseca-zombie'>Year 3: 12.5% of supply</li>
              <li className='text-sseca-zombie'>Year 4: 12.5% of supply</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className='mb-10'>
        <h3 className='title-txt mb-3 italic text-sseca-seagull'>Utility</h3>
        <ul>
          <li className='mt-5 pl-4 italic text-sseca-seagull'>
            Currency:
            <ul className='mt-3 list-disc pl-8'>
              <li className='text-sseca-zombie'>
                Buy in-game assets, items, skins.
              </li>
              <li className='text-sseca-zombie'>
                Facilitates user-to-user trades.
              </li>
              <li className='text-sseca-zombie'>Pay tournament entry fees.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className='mb-10'>
        <h3 className='title-txt mb-3 italic text-sseca-seagull'>
          Play to Earn Implementation
        </h3>
        <ul>
          <li className='my-5 pl-4 italic text-sseca-seagull'>
            Missions & Quests:
            <ul className='list-disc pl-8'>
              <li className='text-sseca-zombie'>
                Players earn SGAC for completing missions.
              </li>
              <li className='text-sseca-zombie'>
                Higher rewards for higher difficulties.
              </li>
            </ul>
          </li>
          <li className='mb-5 pl-4 italic text-sseca-seagull'>
            Tournaments:
            <ul className='list-disc pl-8'>
              <li className='text-sseca-zombie'>Entry fees paid in SGAC.</li>
              <li className='text-sseca-zombie'>Prize pools in SGAC.</li>
            </ul>
          </li>
          <li className='mb-5 pl-4 italic text-sseca-seagull'>
            Conquest Events:
            <ul className='list-disc pl-8'>
              <li className='text-sseca-zombie'>
                Factions battle for control of sectors.
              </li>
              <li className='text-sseca-zombie'>
                Rewards for participation and victories.
              </li>
            </ul>
          </li>
          <li className='mb-5 pl-4 italic text-sseca-seagull'>
            Leaderboards:
            <ul className='list-disc pl-8'>
              <li className='text-sseca-zombie'>
                Monthly/weekly competitions.
              </li>
              <li className='text-sseca-zombie'>Top players win SGAC prizes.</li>
            </ul>
          </li>
          <li className='mb-5 pl-4 italic text-sseca-seagull'>
            Fan Engagement:
            <ul className='list-disc pl-8'>
              <li className='text-sseca-zombie'>
                Create content and grow the community.
              </li>
              <li className='text-sseca-zombie'>Earn SGAC for contributions.</li>
            </ul>
          </li>
          <li className='mb-5 pl-4 italic text-sseca-seagull'>
            Node Operation
            <span className='text-shadow-none text-[16px] italic text-sseca-seagull/90'>
              &nbsp;( If decided to create a dedicated App chain using Polygon
              CDK )
            </span>
            <ul className='list-disc pl-8'>
              <li className='text-sseca-zombie'>
                Provide computing resources.
              </li>
              <li className='text-sseca-zombie'>Earn fees in SGAC.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div>
      <h3 className='title-txt mb-3 italic text-sseca-seagull'>Summary</h3>
        <p  className='pl-6'>
          This split token model distinguishes governance and economic
          functions, while play-to-earn mechanics continually engage players in
          value-creating activities within the SSECA metaverse.
        </p>
      </div>
    </section>
  )
}

export default EconomyTokenSection
