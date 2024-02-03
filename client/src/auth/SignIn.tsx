import { FormEvent, useState } from 'react';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { logIn } from '../api/userApi';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitHandler(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    logIn({
      email,
      password,
    });
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <form
        className='flex flex-col justify-center items-center'
        onSubmit={submitHandler}
      >
        <span className='mb-5'>
          <TextField
            id='email'
            label='Email'
            variant='filled'
            color='secondary'
            className='w-80 rounded bg-gray-400 !text-[#fff]'
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
        </span>
        <span className='mb-5'>
          <TextField
            id='password'
            label='Password'
            variant='filled'
            color='secondary'
            className='w-80 rounded bg-gray-400 !text-[#fff]'
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </span>

        <Button type='submit' variant='contained' color='secondary'>
          <span className='font-semibold text-gray-300'>Sign In</span>
        </Button>
      </form>
    </div>
  );
}

export default SignIn;
