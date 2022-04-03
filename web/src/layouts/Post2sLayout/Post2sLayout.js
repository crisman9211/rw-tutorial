import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const Post2sLayout = ({ children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.post2S()} className="rw-link">
            Post2s
          </Link>
        </h1>
        <Link to={routes.newPost2()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Post2
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default Post2sLayout
