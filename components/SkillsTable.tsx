import SkillItem from '@/components/SkillItem'
import Stack from '@/components/Stack'

export default function SkillsTable() {
  return (
    <section className='mx-auto h-full w-full max-w-6xl md:py-20'>
      <div className='mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-1 md:px-8 lg:grid-cols-3 lg:gap-0'>
        <SkillItem
          title='Web Application Development'
          text='Extensive experience in developing and maintaining scalable web
            applications using Next.js.'
          bgColor='bg-gray'
          txtColor='text-black'
          className='md:rounded-tl-xl'
        />

        <SkillItem
          title='UX/UI Implementation & Performance Optimizations'
          text='Skilled in translating UX/UI designs into functional Web interfaces,
            ensuring high performance and responsiveness.'
          bgColor='bg-red'
          txtColor='text-white'
        />

        <SkillItem
          title='Code Quality & Best Practices'
          text='Strong focus on writing clean, maintainable code following industry best practices.'
          bgColor='bg-gray'
          txtColor='text-black'
          className='md:rounded-tr-xl'
        />

        <SkillItem
          title='Frontend Development & API Integration'
          text='Proficient in frontend technologies and integrating APIs to enhance web application functionality.'
          bgColor='bg-red'
          txtColor='text-white'
          className='md:rounded-bl-xl'
        />
        <SkillItem
          title='Problem-Solving & Teamwork'
          text='A problem-solving approach combined with excellent teamwork and collaboration skills to deliver effective solutions.'
          bgColor='bg-gray'
          txtColor='text-black'
        />
        <SkillItem
          bgColor='bg-red'
          txtColor='text-white'
          className='min-h-0 lg:rounded-br-xl'
        >
          <Stack className='stack-skills' />
        </SkillItem>
      </div>
    </section>
  )
}
