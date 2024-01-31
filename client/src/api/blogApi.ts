import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export async function getAllBlogs() {
    const res = await axios.get(`${BASE_URL}blogs`)
    return res.data.data.blogs
}