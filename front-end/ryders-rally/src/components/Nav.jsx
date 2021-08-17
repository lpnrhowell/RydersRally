import React, { useContext, useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../styles/_nav.scss"

import { AuthContext } from '../context/auth';

function Nav() {
  const { user, logout } = useContext(AuthContext);
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const nav = user ? (
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item name={user.username} active as={Link} to="/" />

      <Menu.Menu id="navLink" position="right">
        <Menu.Item name="Create Event" id="item" />
        <Menu.Item name="logout" id="item" onClick={logout} />
      </Menu.Menu>
    </Menu>
  ) : (
      <Menu pointing secondary size="massive" color="teal">
        <Menu.Item
          id="item"
          name="home"
          active={activeItem === 'home'}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />

        <Menu.Menu color="teal" id="navLink" position="right">
          <Menu.Item
            id="item"
            name="login"
            active={activeItem === 'login'}
            onClick={handleItemClick}
            as={Link}
            to="/login"


          />
          <Menu.Item
            id="item"
            name="register"
            active={activeItem === 'register'}
            onClick={handleItemClick}
            as={Link}
            to="/register"
          />
        </Menu.Menu>
      </Menu>
    );

  return nav;
}

export default Nav;