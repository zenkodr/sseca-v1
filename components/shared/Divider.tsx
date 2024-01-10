// COMPONENT[epic=Shared, type=general] ~ Divider

import Image from 'next/image'

const Divider = () => {
  return (
    <div className='w-[75vw] items-center z-[50] flex justify-center'>
      <Image
        src='/images/sec-divid.svg'
        alt='divider'
        width={500}
        height={250}
      />
    </div>
  )
}

export default Divider
