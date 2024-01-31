import { Route, Routes } from 'react-router-dom';
import Layout from './ui/Layout.tsx';
import Home from './pages/Home.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/blogs' element={<Home />} />
        <Route path='/javascript' element={<Home />} />
        <Route path='/react' element={<Home />} />
        <Route path='/typescript' element={<Home />} />
        <Route path='/career' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
