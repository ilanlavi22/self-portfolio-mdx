import Intro from '@/components/Intro'
import Stack from '@/components/Stack'
import WebDevelopment from '@/components/WebDevelopment'
import SkillsTable from '@/components/SkillsTable'
import RecentPosts from '@/components/RecentPosts'

export default function Home() {
  return (
    <section className='mt-40'>
      <div>
        <Intro />
        <Stack />
        <WebDevelopment />
        <SkillsTable />

        <RecentPosts />
      </div>
    </section>
  )
}
