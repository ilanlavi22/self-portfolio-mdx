export default function Intro() {
  return (
    <section className='mx-auto flex w-full max-w-3xl justify-center text-center'>
      <div className='relative z-10'>
        <div className='font-adventor font-bold uppercase leading-[0.85] text-theme-gray'>
          <p className='text-xl tracking-[0.25rem] text-theme-gray/80 lg:text-xl'>
            Ilan Lavi
          </p>
          <p className='mt-3 text-[90px] tracking-[0.1rem] text-theme-red lg:mt-[30px] lg:text-[120px] lg:leading-[78px] lg:tracking-wide'>
            Reac<span className='italic'>t</span>
          </p>
          <p className='mt-0.5 text-[80px] tracking-[-0.10rem] lg:mt-3.5 lg:text-[110px] lg:tracking-[-0.22rem]'>
            Next.js
          </p>

          <p className='mb-1.5 mt-16 text-[40px] tracking-[0.1rem] text-theme-red lg:text-[84px]'>
            web developer
          </p>

          <p className='text-[40px] tracking-[-0.1rem] lg:text-7xl'>
            since <span className='italic'>2016</span>
          </p>
          <h1 className='mt-14 text-pretty px-8 font-proxima text-lg font-normal normal-case sm:px-8 md:px-12 lg:mt-12 lg:text-2xl'>
            I&apos;m a Frontend Developer specializing in React.js and Next.js,
            with expertise in responsive design, performance optimization, and
            delivering full-stack solutions to build high-performance,
            user-focused applications.
          </h1>
        </div>
      </div>

      <video
        loop
        autoPlay
        controls={false}
        muted
        playsInline
        className='absolute inset-0 left-0 top-0 z-0 h-full min-h-full w-full min-w-full max-w-none overflow-hidden !bg-transparent object-cover opacity-10'
      >
        <source src='footage/intro.mp4' type='video/mp4' />
      </video>
    </section>
  )
}
