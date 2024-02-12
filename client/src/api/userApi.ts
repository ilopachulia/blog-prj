import axios from 'axios';
import {BASE_URL} from '../utils/constants'
import {createUser as createUserProps, logInUser} from '../utils/interfaces';
import toast from "react-hot-toast";


export async function createUser(userData: createUserProps) {
    try {
        const res = await axios({
            method: 'post',
            url: `${BASE_URL}users/signup`,
            data: userData,
        });
        if(res.data.token) {
            toast.success("You have been registered successfully")        }
        return res.data.token;
    } catch (error) { console.log(error) }
}


export async function logIn(userData: logInUser) {
    try {
        const res = await axios({
            method: 'post',
            url: `${BASE_URL}users/login`,
            data: userData,
        });
        if(res.data.token) {
            toast.success("You have been logged in successfully")        }
        return res.data.token;
    } catch (error) { console.log(error) }
}
