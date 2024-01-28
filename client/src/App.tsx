import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/account');
        console.log(response);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className='text-3xl font-bold text-red-300 underline'>
        Hello world!
      </h1>{' '}
    </>
  );
}

export default App;
