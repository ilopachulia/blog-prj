import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export async function getAllBlogs(query: string) {
    const res = await axios.get(`${BASE_URL}${query}`)
    return res.data.data
}

export async function createNewPost(post: { title: string; post: string; }) {
    const res = await axios.post(`${BASE_URL}/blogs`, post)
    return res.data.data
}