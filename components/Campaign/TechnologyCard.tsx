const TechnologyCard = () => {
  return (
    <div className='flex flex-col w-full mr-2 p-3'>
        <h3 className='title-txt-xl flex justify-center my-10 text-sseca-seagull'>
          Technology Overview
        </h3>
      <section className='card-wrapper bg-sseca-blackPearl/70 w-full flex flex-col items-center mr-5 p-3 justify-center'>
        <p className='text-shadow items-center py-1 px-5 text-start text-xl text-shadow-sseca-ebony'>
          This section provides a comprehensive overview of the Sapiens Space
          Exploration & Colonization Agency (SSECA), SSECA will feature
          procedurally generated worlds, an innovative blockchain-integrated
          space exploration game. SSECA combines cutting-edge technologies
          including Unreal Engine for immersive 3D gameplay with a dedicated
          Polygon application chain for decentralized asset management.
        </p>
        <p className='text-shadow items-center py-1 px-5 text-start text-xl text-shadow-sseca-ebony'>
          The game integrates robust resource harvesting, crafting systems,
          multiplayer integration, and advanced artificial intelligence. At the
          core lies the integration of blockchain technology to enable true
          digital asset ownership, trading economies, and on-chain achievement
          tracking. SSECA aims to push the boundaries of gameplay innovation and
          blockchain integration to deliver a genre-defining gaming experience.
        </p>
        <h3 className='title-txt flex mt-4 justify-start text-sseca-seagull'>
          Game Engine:
        </h3>
        <p className='text-shadow items-center py-1 px-5 text-start text-xl text-shadow-sseca-ebony'>
          SSECA will leverage Unreal Engine 5 to deliver cutting-edge visuals
          and gameplay. Unreal Engine enables high fidelity physics-based space
          simulation with volumetric nebula effects, procedural planet
          generation, advanced texture streaming, and more. The Nanite geometry
          system will render immense procedural worlds in film-quality detail.
        </p>
        <h3 className='title-txt flex mt-4 justify-start text-sseca-seagull'>
          Blockchain Integration:
        </h3>
        <p className='text-shadow items-center py-1 px-5 text-start text-xl text-shadow-sseca-ebony'>
          At the core of SSECA’s technology stack is a customized blockchain
          application chain developed using Polygon CDK. This chain is
          purpose-built for managing in-game assets and economy.
        </p>
        <h3 className='title-txt flex mt-4 justify-start text-sseca-seagull'>
          Benefits Include:
        </h3>
        <ul className='sseca-ul blue-marker'>
          <li className='items-center'>
            Seamlessly represent in-game items like spaceships, resources,
            artifacts as NFTs tradable on blockchain
          </li>
          <li className='items-center'>
            Introduce transparent scarcity and verify supply with on-chain
            metadata
          </li>
          <li className='items-center'>
            Achieve high transaction throughput and minimized gas fees
          </li>
          <li className='items-center'>
            Focus development on tokenomics and gameplay vs complex blockchain
            coding
          </li>
          <li className='items-center'>
            Enable true ownership of in-game assets
          </li>
          <li className='items-center'>
            Enable innovative gameplay and economy
          </li>
        </ul>
        <p className='text-shadow items-center py-1 px-5 text-start text-xl text-shadow-sseca-ebony'>
          The application chain will integrate payment channels, gross
          settlement capabilities, and side chains to enable future
          micro-transaction features, streamlined royalties distribution, and
          interoperability with external marketplaces.
        </p>
        <h3 className='title-txt flex mt-4 justify-start text-sseca-seagull'>
          Multiplayer Networking:
        </h3>
        <p className='text-shadow items-center py-1 px-5 text-start text-xl text-shadow-sseca-ebony'>
          SSECA will leverage state-of-the-art multiplayer networking for a
          lag-free PvP experience. Sidechains will enable transferring asset
          ownership between players off the main application chain while keeping
          transaction costs minimal.
        </p>
        <h3 className='title-txt flex mt-4 justify-start text-sseca-seagull'>
          Economy Design:
        </h3>
        <p className='text-shadow items-center py-1 px-5 text-start text-xl text-shadow-sseca-ebony'>
          SSECA will feature an in-game economy driven by the Sapiens Galactic
          Credit token integrated into the application chain. Players can earn
          credits through:
        </p>
        <ul className='sseca-ul blue-marker'>
          <li className='items-center'>Completing missions and quests</li>
          <li className='items-center'>Participating in tournament events</li>
          <li className='items-center'>
            Selling harvested resources and crafted items
          </li>
          <li className='items-center'>
            Operating Network Nodes to validate transactions and mine the block
            reward that has a chance to randomly open a new zone of the galaxy
            for colonization or triggers an event.
          </li>
        </ul>
        <p className='text-shadow italic text-sseca-seagull items-center py-1 px-5 text-start text-xl text-shadow-sseca-ebony'>
          Credits will be used to purchase items on the in-game marketplace like
          equipment, blueprints, cosmetics, colony buildings and starships. NFTs
          represented on the blockchain will have value persistence even outside
          the game universe.
        </p>
        <h3 className='title-txt flex mt-4 justify-start text-sseca-seagull'>
          To ensure a balanced economy, the initial 500 million token supply
          will be strategically managed and distributed to ensure that the token
          price is stable and predictable.
        </h3>
        <ul className='sseca-ul blue-marker'>
          <li className='items-center'>60% - In-game Play to earn Rewards</li>
          <li className='items-center'>
            20% - Offered in a pre-sale to raise funds for the project
          </li>
          <li className='items-center'>
            10% - initial SGA DAO treasury seeding for future in-game economy
            development
          </li>
          <li className='items-center'>
            10% - Held in reserve for future use cases
          </li>
        </ul>
        <p className='text-shadow items-center py-1 px-5 text-start text-xl text-shadow-sseca-ebony'>
          As the token supply increases from block rewards, ongoing token burns
          will create deflationary pressure, increasing scarcity and value. The
          game’s Revenue Distribution Council will regularly analyze economic
          indicators to maintain equilibrium between sources and sinks.
        </p>
      </section>
    </div>
  )
}

export default TechnologyCard
