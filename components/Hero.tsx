export default function Hero() {
  return (
    <div className='min-h-[80svh] w-full'>
      <div className='relative z-10 my-24 flex w-full items-center justify-center gap-2'>
        <p className='mt-1 p-[40px] text-center font-adventor font-bold uppercase tracking-[-0.2rem] text-theme-gray lg:leading-[120px]'>
          <span className='inline-flex pb-4 text-lg font-bold uppercase tracking-[0.4rem]'>
            Ilan Lavi
          </span>
          <span className='block leading-[80px] tracking-[0.1rem] text-theme-red lg:text-[120px]'>
            Reac<span className='italic'>t</span>
          </span>
          <span className='mb-5 block tracking-[-0.2rem] lg:text-[110px]'>
            Next.js
          </span>
          <span className='block text-theme-red lg:text-[85px]'>
            web developer
          </span>
          <span className='mt-5 block leading-[65px] tracking-[-0.1rem] lg:text-[70px]'>
            since <span className='italic'>2016</span>
          </span>

          <p className='mt-20 w-full max-w-2xl text-pretty text-center font-proxima text-[1.5rem] font-normal normal-case leading-normal tracking-normal lg:text-[1.6rem]'>
            I&apos;m a <span className='font-bold'>Frontend Developer</span> |
            Specialized in React.js and Next.js | Responsive Design and
            Performance Optimization | {''}
            <span className='font-bold'>Full-Stack Solutions</span> | Building
            High-Performance, User-Focused Applications.
          </p>
        </p>
      </div>

      <video
        className='sticky inset-0 left-0 top-0 z-0 h-full w-full overflow-hidden !bg-transparent object-cover opacity-10'
        src='video_preview22_new.mp4'
        loop
        autoPlay
        controls={false}
        muted
        playsInline
      />
    </div>
  )
}
