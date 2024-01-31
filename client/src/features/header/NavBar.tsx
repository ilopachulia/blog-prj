import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <NavLink
        to='/blogs'
        className={({ isActive }) => `mr-4 ${isActive ? 'underline' : ''}`}
      >
        All
      </NavLink>
      <NavLink
        to='/javascript'
        className={({ isActive }) => `mr-4 ${isActive ? 'underline' : ''}`}
      >
        JavaScript
      </NavLink>
      <NavLink
        to='/react'
        className={({ isActive }) => `mr-4 ${isActive ? 'underline' : ''}`}
      >
        React
      </NavLink>
      <NavLink
        to='/typescript'
        className={({ isActive }) => `mr-4 ${isActive ? 'underline' : ''}`}
      >
        TypeScript
      </NavLink>
      <NavLink
        to='/career'
        className={({ isActive }) => `mr-4 ${isActive ? 'underline' : ''}`}
      >
        Career
      </NavLink>
    </div>
  );
}

export default NavBar;
