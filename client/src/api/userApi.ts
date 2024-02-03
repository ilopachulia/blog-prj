import axios from 'axios';
import { BASE_URL } from '../utils/constants'
import { createUser as createUserProps, logInUser } from '../utils/interfaces';


export async function createUser(userData: createUserProps) {

    try {
        const res = await axios({
            method: 'post',
            url: `${BASE_URL}users/signup`,
            data: userData,
        });

        console.log(res)

    } catch (error) { console.log(error) }
}


export async function logIn(userData: logInUser) {

    try {
        const res = await axios({
            method: 'post',
            url: `${BASE_URL}users/login`,
            data: userData,
        });

        console.log(res)

    } catch (error) { console.log(error) }
}