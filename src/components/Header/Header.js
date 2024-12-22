import React from 'react'
import { Nav, Logo, NavLink, Bars, NavMenu, NavBtn } from './HeaderElements'

const Header = ({ toggle }) => {
  return (
    <div className="Container" style={{ padding: 0 }}>
      <Nav>
        <NavMenu>
          <NavLink className="menu-item" to="projects">
            Projects
          </NavLink>
          <NavLink className="menu-item" to="about">
            About Me
          </NavLink>
        </NavMenu>

        <Bars onClick={toggle} />
      </Nav>
    </div>
  )
}

export default Header
