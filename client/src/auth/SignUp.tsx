import {FormEvent, useContext, useState} from 'react';
import {TextField} from '@mui/material';
import {createUser} from '../api/userApi';
import {UserContext} from "../contexts/UserContext.tsx";
import {Link, useNavigate} from "react-router-dom";
import Button from "../ui/Button.tsx";
import signUpIcon from "../assets/sign-up.svg";


function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const { setUser} = useContext(UserContext);
    const navigate = useNavigate();


    async function submitHandler(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        try {
            const token = await createUser({
                name,
                email,
                password,
                passwordConfirm,
            });

            setUser(token);

            if (token) {
                setName("")
                setEmail("")
                setPassword("")
                setPasswordConfirm("")
                navigate("/blogs")
            }
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
        <div className='flex justify-center items-start'>
            <form
                className='flex flex-col justify-center items-center mr-40'
                onSubmit={submitHandler}
            >
        <span className='mb-5'>
          <TextField
              id='username'
              label='Username'
              variant='filled'
              color='primary'
              className='w-80 rounded bg-gray-100'
              value={name}
              onChange={(evt) => setName(evt.target.value)}
          />
        </span>
                <span className='mb-5'>
          <TextField
              id='email'
              label='Email'
              variant='filled'
              color='primary'
              className='w-80 rounded bg-gray-100'
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
          />
        </span>
                <span className='mb-5'>
          <TextField
              id='password'
              label='Password'
              variant='filled'
              type='password'
              color='primary'
              className='w-80 rounded bg-gray-100'
              value={password}
              onChange={(evt) => setPassword(evt.target.value)}
          />
        </span>
                <span className='mb-5'>
          <TextField
              id='confirmPassword'
              label='Confirm Password'
              variant='filled'
              type='password'
              color='primary'
              className='w-80 rounded bg-gray-100'
              value={passwordConfirm}
              onChange={(evt) => setPasswordConfirm(evt.target.value)}
          />
        </span>
                <Button type='submit'>
                    Sign Up
                </Button>
                <br/>
                <Link to="/sign-in" className="hover:underline">Already registered?</Link>
            </form>
            <div>
                <img src={signUpIcon} alt="sign-up svg image"/>
            </div>
        </div>
    );
}

export default SignUp;
