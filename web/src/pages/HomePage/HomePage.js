import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <main>Home Page</main>
      <ArticlesCell />
    </>
  )
}

export default HomePage
