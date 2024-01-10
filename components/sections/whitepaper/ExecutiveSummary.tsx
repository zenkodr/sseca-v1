// COMPONENT[epic=WhitePaper, type=whitepaper] ~ ExecutiveSummary

const ExecutiveSummary = () => {
  return (
    <section className='txt-base my-8 p-5'>
      <h2 className='md:title-txt-lg mb-8 text-center font-bold text-sseca-seagull underline underline-offset-8'>
        Executive Summary
      </h2>
      <p>
        This white paper provides a detailed roadmap for the development of an
        innovative space exploration game, combining cutting-edge technologies
        such as Unreal Engine for immersive 3D gameplay and{' '}
        <span className='font-normal italic text-sseca-seagull'>Polygon CDK  (Chain Development Kit)</span>{' '}
        to create a dedicated App-chain for decentralized asset ownership and
        in-game economies.
      </p>

      <p className='mt-4'>
        We can harness the power of{' '}
        <span className='italic text-sseca-seagull'>
          Polygon CDK
        </span>{' '}
        to construct a dedicated blockchain meticulously designed for the
        management of in-game assets and virtual economies. The numerous
        advantages associated with this approach encompass:
      </p>

      <ul className='mt-2 list-disc pl-6'>
        <li className='mb-5'>
          <span className='italic text-sseca-seagull'>Authentic Digital Asset Ownership for Players:</span><br /> In-game items such as
          skins, swords, avatars, etc., can be seamlessly represented as
          non-fungible tokens (NFTs), granting players complete ownership and
          control. This sets the stage for vibrant secondary markets, allowing
          players to trade their assets.
        </li>
        <li className='mb-5'>
        <span className='italic text-sseca-seagull'>Transparent Scarcity and Supply:</span><br /> By encoding assets on a public
          blockchain, we establish a transparent mechanism for showcasing
          scarcity and verifying limited supply. This transparency contributes
          to the perceived value of rare items, fostering a sense of
          exclusivity.
        </li>
      </ul>

      <p className='mt-4'>
        From a technical standpoint, the robust capabilities of{' '}
        <span className='italic text-sseca-seagull'>Polygon CDK</span>{' '} handle the
        intricacies of running a high-performance blockchain specifically
        tailored for gaming. This not only ensures high throughput but also
        minimizes transaction fees.
      </p>
    </section>
  )
}

export default ExecutiveSummary
