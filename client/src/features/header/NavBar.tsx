import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Input } from '@mui/material';

function NavBar() {
  const [isSearchFiledClicked, setIsSearchFieldClicked] = useState(false);
  return (
    <div>
        <NavLink
            to='/blogs'
            className={({isActive}) =>
                `mr-4 ${isActive ? 'pb-1 border-b-2' : ''}`
            }>
            All
      </NavLink>
      <NavLink
        to='/javascript'
        className={({ isActive }) =>
          `mr-4 ${isActive ? 'pb-1 border-b-2' : ''}`
        }
      >
        JavaScript
      </NavLink>
      <NavLink
        to='/react'
        className={({ isActive }) =>
          `mr-4 ${isActive ? 'pb-1 border-b-2' : ''}`
        }
      >
        React
      </NavLink>
      <NavLink
        to='/typescript'
        className={({ isActive }) =>
          `mr-4 ${isActive ? 'pb-1 border-b-2' : ''}`
        }
      >
        TypeScript
      </NavLink>
      <NavLink
        to='/career'
        className={({ isActive }) =>
          `mr-6 ${isActive ? 'pb-1 border-b-2' : ''}`
        }
      >
        Career
      </NavLink>
      <Button onClick={() => setIsSearchFieldClicked(true)}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className='mr-2' />
        {isSearchFiledClicked ? (
          <>
            <Input
              color='secondary'
              className='w-80 h-10 rounded bg-gray-600 !text-[#fff] px-2'
            />
          </>
        ) : null}
      </Button>
    </div>
  );
}

export default NavBar;
