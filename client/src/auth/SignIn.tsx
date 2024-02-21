import { FormEvent, useState , useContext} from 'react';
import { TextField} from '@mui/material';
import { logIn } from '../api/userApi';
import {UserContext} from "../contexts/UserContext.tsx";
import {Link, useNavigate} from "react-router-dom";
import Button from "../ui/Button.tsx";

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  async function submitHandler(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
   const token: string = await logIn({
      email,
      password,
    });
    setUser(token);
    if(token){
        setEmail("");
        setPassword("")
        navigate("/blogs")
    }
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
            type="password"
            color='secondary'
            className='w-80 rounded bg-gray-400 !text-[#fff]'
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </span>

        <Button type="submit">
          Sign In
        </Button>
          <br/>
          <Link to="/sign-up" className="hover:underline">Not registered yet?</Link>
      </form>
    </div>
  );
}

export default SignIn;
