// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set, Private } from '@redwoodjs/router'
import Post2sLayout from 'src/layouts/Post2sLayout'
import PostsLayout from 'src/layouts/PostsLayout'
import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/calc" page={CalcPage} name="calc" />
      <Set wrap={Post2sLayout}>
        <Route path="/post2s/new" page={Post2NewPost2Page} name="newPost2" />
        <Route path="/post2s/{id:Int}/edit" page={Post2EditPost2Page} name="editPost2" />
        <Route path="/post2s/{id:Int}" page={Post2Post2Page} name="post2" />
        <Route path="/post2s" page={Post2Post2sPage} name="post2S" />
      </Set>
      <Private unauthenticated="home">
        <Set wrap={PostsLayout}>
          <Route path="/admin/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/admin/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/admin/posts/{id:Int}" page={PostPostPage} name="post" />
          <Route path="/admin/posts" page={PostPostsPage} name="posts" />
        </Set>
      </Private>
      <Set wrap={BlogLayout}>
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
