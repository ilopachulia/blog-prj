import axios from 'axios'
import { BASE_URL } from '../utils/constants'

export async function getAllBlogs({ query }: { query: string }) {
    const res = await axios.get(`${BASE_URL}/${query}`)
    return res.data.data.blogs
}