import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let  header = (
      <primaryNav>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <ul className="main-heading-links">
          <li>
            ➡️ <Link to="/">
              Read the blog
            </Link>
          </li>
          <li>
            ➡️ <Link to="/about">
              About the show
            </Link>
          </li>
          <li>
            ➡️ <Link to="https://cubecobra.com/cube/overview/clockspinning">
              Check out the cube
            </Link>
          </li>
        </ul>
      </primaryNav>
    )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Austin and Connor Schaefer.
      </footer>
    </div>
  )
}

export default Layout
