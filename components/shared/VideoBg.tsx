// COMPONENT[epic=Shared, type=general] ~ VideoBg

interface VideoBgProps {
  src: string,
}

const VideoBg = ({
  src,
}: VideoBgProps) => {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className='fixed -z-20 inset-0 h-auto w-full items-center justify-center'
      >
        <source
          src={src}
          type='video/webm'
        />
      </video>
    </div>
  )
}

export default VideoBg
