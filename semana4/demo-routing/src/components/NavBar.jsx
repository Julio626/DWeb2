import React from 'react'
import { NavLink } from 'react-router'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to ="/" className="nav-link"end>Home</NavLink>
        <NavLink to = "/about" className="nav-link"end>AboutPage</NavLink>
        <NavLink to = "/about/team" className="nav-link"end>Team</NavLink>
        <NavLink to = "/login" className="nav-link"end>Login</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}
