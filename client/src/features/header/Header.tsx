import NavBar from './NavBar.tsx';
import menu from './../../assets/menu.png';
import Button from '../../ui/Button.tsx';

function Header() {
  const onMenuHandler = (): void => {
    console.log('menu opened');
  };
  return (
    <div className='h-20 px-5 flex justify-between items-center'>
      <div className='flex justify-start items-center'>
        <h1 className='mr-20'>BlogFul</h1>
        <NavBar />
      </div>
      <Button onClick={onMenuHandler}>
        <img src={menu} alt='menu icon' />
      </Button>
    </div>
  );
}

export default Header;
