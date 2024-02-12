import {Button, TextField} from "@mui/material";
import {useState, ChangeEvent} from "react";
import {createNewPost} from "../api/blogApi.ts";
import toast from "react-hot-toast";


function NewPost() {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');

    async function submitHandler(evt: { preventDefault: () => void; }) {
        evt.preventDefault();
        const newPost = await createNewPost({title, post});
        console.log(newPost);
        if (newPost) {
            setTitle("");
            setPost("");
            toast.success("Post created successfully")
        }
    }

    return <div className='flex justify-center items-center h-screen'>
        <form
            className='flex flex-col justify-center items-center'
            onSubmit={submitHandler}
        >
        <span className='mb-5'>
         <TextField
             id='title'
             label="title"
             variant="filled"
             color="secondary"
             className='w-[800px] rounded bg-gray-200 !text-[#fff]'
             multiline
             rows={1}
             value={title}
             onChange={(evt: ChangeEvent<HTMLInputElement>) => setTitle(evt.target.value)}
         />
        </span>
            <span className='mb-5'>
          <TextField
              id='post'
              label="Write a post..."
              variant='filled'
              type="post"
              color='secondary'
              className='w-[800px] rounded bg-gray-200 !text-[#fff]'
              multiline
              rows={10}
              value={post}
              onChange={(evt: ChangeEvent<HTMLInputElement>) => setPost(evt.target.value)}
          />
        </span>

            <Button type='submit' variant='contained' color='secondary'>
                <span className='font-semibold text-gray-300'>Create a Post</span>
            </Button>
        </form>
    </div>

}

export default NewPost;