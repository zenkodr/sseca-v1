import Image from 'next/image'

const RewardsCard = () => {
  return (
    <div className='p-3 flex flex-col'>
      <h1 className='title-txt-lg text-center mb-10'>Founder Rewards</h1>
      <section className=' h-auto bg-sseca-blackPearl/70 w-full mb-6 items-center card-wrapper flex flex-col p-5'>
        <Image
          src='/badges/pathfinder-badge.webp'
          alt='SSECA Logo'
          width={120}
          height={120}
          className='rounded-xl flex items-center'
        />
        <p className='title-txt-lg text-sseca-seagull flex items-center p-2 text-start'>
          PATHFINDER
        </p>
        <article className='text-sseca-seagull w-full txt-base mt-1'>
          <p className='items-start'>
            <span className='text-sseca-zombie'>Donation amount</span> $10
          </p>
          <ul className='list-disc list-outside ml-4 p-4'>
            <li>100 SGAC Tokens</li>
            <li>Beta Access</li>
            <li>Founder Forum role</li>
            <li>Founder badge</li>
            <li>SSECA Founder NFT</li>
            <li>Early access to the DAO marketplace</li>
            <li>Name in game credits</li>
          </ul>
        </article>
      </section>
      <section className=' h-auto bg-sseca-blackPearl/70 w-full mb-6 items-center card-wrapper flex flex-col p-5'>
        <Image
          src='/badges/explorer-badge.webp'
          alt='SSECA Logo'
          width={120}
          height={120}
          className='rounded-xl flex items-center'
        />
        <p className='title-txt-lg uppercase text-sseca-seagull flex items-center p-2 text-start'>
          explorer
        </p>
        <article className='text-sseca-seagull w-full txt-base mt-1'>
          <p className='items-start'>
            <span className='text-sseca-zombie'>Donation amount</span> $25
          </p>
          <p className='text-sseca-zombie'>All lower tier rewards plus:</p>
          <p className='text-sm mt-1'>** SGAC Tokens did not stack with tier rewards **</p>
          <ul className='list-disc list-outside ml-4 p-4'>
            <li>250 SGAC Tokens</li>
            <li>Exclusive NFT forum badge and wallpaper</li>
            <li>Exclusive forum title(TBD)</li>
          </ul>
        </article>
      </section>
      <section className=' h-auto bg-sseca-blackPearl/70 w-full mb-6 items-center card-wrapper flex flex-col p-5'>
        <Image
          src='/badges/pioneer-badge.webp'
          alt='SSECA Logo'
          width={120}
          height={120}
          className='rounded-xl flex items-center'
        />
        <p className='title-txt-lg text-sseca-seagull flex items-center p-2 text-start'>
          PIONEER
        </p>
        <article className='text-sseca-seagull w-full txt-base mt-1'>
          <p className='items-start'>
            <span className='text-sseca-zombie'>Donation amount</span> $35
          </p>
          <p className='text-sseca-zombie'>All lower tier rewards plus:</p>
          <p className='text-sm mt-1'>** SGAC Tokens did not stack with tier rewards **</p>
          <ul className='list-disc list-outside ml-4 p-4'>
            <li>350 SGAC Tokens</li>
            <li>Exclusive Pioneer Starship Skin NFT</li>
          </ul>
        </article>
      </section>
      <section className=' h-auto bg-sseca-blackPearl/70 w-full mb-6 items-center card-wrapper flex flex-col p-5'>
        <Image
          src='/badges/frontiersman-badge.webp'
          alt='SSECA Logo'
          width={120}
          height={120}
          className='rounded-xl flex items-center'
        />
        <p className='uppercase title-txt-lg text-sseca-seagull flex items-center p-2 text-start'>
          Frontiersman
        </p>
        <article className='text-sseca-seagull w-full txt-base mt-1'>
          <p className='items-start'>
            <span className='text-sseca-zombie'>Donation amount</span> $45
          </p>
          <p className='text-sseca-zombie'>All lower tier rewards plus:</p>
          <p className='text-sm mt-1'>** SGAC Tokens did not stack with tier rewards **</p>
          <ul className='list-disc list-outside ml-4 p-4'>
            <li>450 SGAC Tokens</li>
            <li>Frontiersman Trade & Merchant Guild Permit</li>
          </ul>
        </article>
      </section>
      <section className='h-auto bg-sseca-blackPearl/70 w-full mb-6 items-center card-wrapper flex flex-col p-5'>
        <Image
          src='/badges/galactic-badge.webp'
          alt='SSECA Logo'
          width={120}
          height={120}
          className='rounded-xl flex items-center'
        />
        <p className='title-txt-lg uppercase text-sseca-seagull flex items-center p-2 text-start'>
          Galactic
        </p>
        <article className='text-sseca-seagull w-full txt-base mt-1'>
          <p className='items-start'>
            <span className='text-sseca-zombie'>Donation amount</span> $55
          </p>
          <p className='text-sseca-zombie'>All lower tier rewards plus:</p>
          <p className='text-sm mt-1'>** SGAC Tokens did not stack with tier rewards **</p>
          <ul className='list-disc list-outside ml-4 p-4'>
            <li>550 SGAC Tokens</li>
            <li>Commemorative in-game statue NFT</li>
            <li>Ability to name a planet</li>
          </ul>
        </article>
      </section>
      <section className=' h-auto bg-sseca-blackPearl/70 w-full mb-6 items-center card-wrapper flex flex-col p-5'>
        <Image
          src='/badges/cosmic-badge.webp'
          alt='SSECA Logo'
          width={120}
          height={120}
          className='rounded-xl flex items-center'
        />
        <p className='title-txt-lg uppercase text-sseca-seagull flex items-center p-2 text-start'>
          cosmic
        </p>
        <article className='text-sseca-seagull w-full txt-base mt-1'>
          <p className='items-start'>
            <span className='text-sseca-zombie'>Donation amount</span> $100
          </p>
        <p className='text-sseca-zombie'>All lower tier rewards plus:</p>
        <p className='text-sm mt-1'>** SGAC Tokens did not stack with tier rewards **</p>
          <ul className='list-disc list-outside ml-4 p-4'>
            <li>1000 SGAC Tokens</li>
            <li>Custom Cosmic Class Starship</li>
            <li>VIP Launch access</li>
          </ul>
        </article>
      </section>
      <section className=' h-auto bg-sseca-blackPearl/70 w-full mb-6 items-center card-wrapper flex flex-col p-5'>
        <Image
          src='/badges/zenith-badge.webp'
          alt='SSECA Logo'
          width={120}
          height={120}
          className='rounded-xl flex items-center'
        />
        <p className='uppercase title-txt-lg text-sseca-seagull flex items-center p-2 text-start'>
          zenith
        </p>
        <article className='text-sseca-seagull w-full txt-base mt-1'>
          <p className='items-start'>
            <span className='text-sseca-zombie'>Donation amount</span> $250
          </p>
          <p className='text-sseca-zombie'>All lower tier rewards plus:</p>
          <p className='text-sm mt-1'>** SGAC Tokens did not stack with tier rewards **</p>
          <ul className='list-disc list-outside ml-4 p-4'>
            <li>2500 SGAC Tokens</li>
            <li>Exclusive Zenith Class Starship</li>
          </ul>
        </article>
      </section>
      <section className=' h-auto bg-sseca-blackPearl/70 w-full mb-6 items-center card-wrapper flex flex-col p-5'>
        <Image
          src='/badges/royal-badge.png'
          alt='SSECA Logo'
          width={120}
          height={120}
          className='rounded-xl flex items-center'
        />
        <p className='uppercase title-txt-lg text-sseca-seagull flex items-center p-2 text-start'>
          Executive
        </p>
        <article className='text-sseca-seagull w-full txt-base mt-1'>
          <p className='items-start'>
            <span className='text-sseca-zombie'>Donation amount</span> $500
          </p>
          <p className='text-sm'>*** Limited to only 100 backers</p>
          <p className='text-sseca-zombie'>All lower tier rewards plus:</p>
          <p className='text-sm mt-1'>** SGAC Tokens did not stack with tier rewards **</p>
          <ul className='list-disc list-outside ml-4 p-4'>
            <li>5000 SGAC Tokens</li>
            <li>Exclusive Royal Class Starship</li>
            <li>Colony Permit</li>
            <li>1 SGAE Token - (see tokenomics section for details and perks)</li>
          </ul>
        </article>
      </section>
    </div>
  )
}

export default RewardsCard
