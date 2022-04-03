import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell'

const ArticlePage = ({ id }) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <h1>ArticlePage</h1>
      <p>my id is {id}</p>
      <ArticleCell id={id} />
    </>
  )
}

export default ArticlePage
