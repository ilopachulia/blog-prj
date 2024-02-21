import {Outlet} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import Header from '../features/header/Header.tsx';

// import Footer from '../features/footer/Footer.tsx';

function Layout() {

    return (
        <div className="dark:bg-primary text-orange-200 h-screen dark:text-orange-200">
            <div>
               <Header/>
                <Toaster position='top-center'/>
                <main className="mt-20">
                    <Outlet/>
                </main>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Layout;
