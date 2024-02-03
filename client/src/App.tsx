import { Route, Routes } from 'react-router-dom';
import Layout from './ui/Layout.tsx';
import Home from './pages/Home.tsx';
import SignUp from './auth/SignUp.tsx';
import SignIn from './auth/SignIn.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/blogs' element={<Home />} />
        <Route path='/javascript' element={<Home />} />
        <Route path='/react' element={<Home />} />
        <Route path='/typescript' element={<Home />} />
        <Route path='/career' element={<Home />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
