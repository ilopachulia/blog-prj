import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '../features/header/Header.tsx';
import Footer from '../features/footer/Footer.tsx';

function Layout() {
  return (
    <div className='w-screen'>
      <div>
        <Header />
        <Toaster position='top-center' />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
