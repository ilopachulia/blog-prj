import {useState, useRef, useEffect, SyntheticEvent, useContext} from "react";
import NavBar from './NavBar.tsx';
import menu from './../../assets/menu.png';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';
import {UserContext} from "../../contexts/UserContext.tsx";
import toast from "react-hot-toast";

function Header() {
    const { user, setUser } = useContext(UserContext);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = (): void => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleClose = (event: Event | SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setIsMenuOpen(false);
    };


    // return focus to the button when we transitioned from !isMenuOpen -> isMenuOpen
    const prevOpen = useRef(isMenuOpen);
    useEffect(() => {
        if (prevOpen.current && !isMenuOpen) {
            anchorRef.current!.focus();
        }

        prevOpen.current = isMenuOpen;
    }, [isMenuOpen]);

    function  signOut () {
        setUser("")
        localStorage.removeItem("userToken");
        setIsMenuOpen(false);

        if(!localStorage.getItem("userToken")) {
            toast.success("You have been logged out successfully");
        }
    }

    return (
        <div className='h-20 px-5 flex justify-between items-center'>
            <div className='flex justify-start items-center'>
                <Link to='/' className='mr-20'>
                    BlogFul
                </Link>
                <NavBar/>
            </div>
            <Stack direction="row" spacing={2}>
                <div>
                    <Button
                        ref={anchorRef}
                        id="composition-button"
                        aria-controls={isMenuOpen ? 'composition-menu' : undefined}
                        aria-expanded={isMenuOpen ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <img src={menu} alt="menu button" />
                    </Button>
                    <Popper
                        open={isMenuOpen}
                        anchorEl={anchorRef.current}
                        role={undefined}
                        placement="bottom-start"
                        transition
                        disablePortal
                    >
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin:
                                        placement === 'bottom-start' ? 'left top' : 'left bottom',
                                }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList
                                            autoFocusItem={isMenuOpen}
                                            id="composition-menu"
                                            aria-labelledby="composition-button"
                                        >
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            {user ? <MenuItem onClick={signOut}>Logout</MenuItem> : <Link to='/sign-in'><MenuItem onClick={handleClose}>Login</MenuItem></Link>}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </Stack>
        </div>
    );
}

export default Header;
