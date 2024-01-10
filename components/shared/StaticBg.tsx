// COMPONENT[epic=Shared, type=general] ~ StaticBg

import Image from 'next/image'
import { relative } from 'path';

const StaticBg = () => {
  return (
    <div className='bg-image-wrapper absolute flex items-center justify-center opacity-20'>
      <Image
        src='/logos/logo-full.svg'
        height={1000}
        width={1000}
        alt='image'
        quality='100'
        style={{position: 'relative', zIndex: -1}}
      />
    </div>
  )
}

export default StaticBg
