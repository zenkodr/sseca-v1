// COMPONENT[epic=Tokenomics, type=tokenomics] ~ TokenomicsSection

const TokenomicsSection = () => {
  return (
    <section
      id='sgad'
      className='txt-base mt-12'
    >
      <h2 className='title-txt-lg mb-32 text-center text-sseca-seagull underline underline-offset-8'>
        SSECA & SGA DAO Tokenomics
      </h2>

      <div className='mb-10'>
        <h3 className='title-txt-sm mb-3 italic text-sseca-seagull'>
          Citizen Governance Token:&nbsp;
          <span className='not-italic text-sseca-zombie'>&nbsp; SAPIEN</span>
        </h3>
        <ul className='title-txt-sm italic text-sseca-seagull'>
          <li className='mb-3'>
            Symbol:&nbsp;
            <span className=' not-italic text-sseca-zombie'>
              &nbsp; SGAD (Sapiens Galactic Alliance DAO)
            </span>
          </li>
          <li>
            Maximum Supply:&nbsp;
            <span className=' not-italic text-sseca-zombie'>
              &nbsp; Citizenship Based ( 1 Citizen = 1 SGAD )
            </span>
          </li>
        </ul>
      </div>

      <div className='mb-10'>
        <h3 className='title-txt mb-3 italic text-sseca-seagull'>Rights</h3>
        <ul className='list-disc pl-8'>
          <li className='mb-3'>
            1 Citizen = 1 Vote: Each citizen holds equal voting rights,
            fostering a democratic governance structure.
          </li>
          <li className='mb-3'>
            Direct voting on DAO proposals: Citizens can directly participate in
            shaping the future of SSECA by voting on proposals brought forth by
            the DAO.
          </li>
          <li className='mb-3'>
            Equal say regardless of economic ownership: Emphasizes the principle
            of inclusively, ensuring that every citizen&apos;s voice carries the
            same weight, irrespective of their economic stake.
          </li>
        </ul>
      </div>

      <div className='mb-10'>
        <h3 className='title-txt mb-3 italic text-sseca-seagull'>Benefits</h3>
        <ul className='list-disc pl-6'>
          <li className='mb-3'>
            Protocol Revenue share as determined by the Revenue Distribution
            Council and voted on by DAO
          </li>
          <li className='mb-3'>
            Incentivize participation in governance: Active participation in
            governance is encouraged through incentives, fostering a vibrant and
            engaged community.
          </li>
          <li className='mb-3'>
            Grants for community proposals: A portion of the benefits is
            directed towards community-driven proposals, supporting innovative
            ideas and projects within the SSECA ecosystem.
          </li>
          <li className='mb-3'>
            Funding public goods: Contributions to the public goods fund ensure
            ongoing support for initiatives that benefit the entire SSECA
            community.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default TokenomicsSection
