import { Link, routes } from '@redwoodjs/router'

const Header = () => {
  return (
    <header className="header-layout">
      <h1 className="logo display-center">Logo</h1>
      <nav className="nav-header-layout">
        <ul className="ul-header-layout">
          <li>
            <Link to={routes.home()} id="link">
              Home
            </Link>
          </li>
          <li>
            <Link to={routes.signup()} id="link">
              SignUp
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
