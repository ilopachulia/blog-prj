import NavBar from './NavBar.tsx';
import menu from './../../assets/menu.png';
import Button from '../../ui/Button.tsx';
import { Link } from 'react-router-dom';

function Header() {
  const onMenuHandler = () => {
    console.log('menu opened');
  };
  return (
    <div className='h-20 px-5 flex justify-between items-center'>
      <div className='flex justify-start items-center'>
        <Link to='/' className='mr-20'>
          BlogFul
        </Link>
        <NavBar />
      </div>
      <Button onClick={onMenuHandler}>
        <img src={menu} alt='menu icon' />
      </Button>
    </div>
  );
}

export default Header;
