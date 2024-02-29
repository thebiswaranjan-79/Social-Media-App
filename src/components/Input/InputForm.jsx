import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import PostCardContext from '../providers/PostsProvider';

const InputForm = () => {
    const[postText, setPostText] = useState("");
    const[imageUrl, setImageUrl] = useState("");
    const{posts, setPosts} = useContext(PostCardContext);
    async function createPost(){
        axios.post("https://dummyapi.io/data/v1/post/create", {
            headers:{'app-id' : '65d50aec85a52d2ff101cb2f'}
        }).then(response => {
            const responseObject = response.data;
            setPosts([...responseObject]);
        })
    }

    return (
        <Box sx={{mt:'1rem'}}>
             <TextField fullWidth id="outlined-basic" label="Your Next Post" variant="outlined"  
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)} />
             <TextField sx={{mt:'1rem', mb:'1rem'}} fullWidth id="outlined-basic" label="Image For Your Post" variant="outlined" 
             
                        value={imageUrl}
                        onChange={(e)=>setImageUrl(e.target.value)} />

             <Button  variant="contained" onClick={createPost}>Submit</Button>
        </Box>
    );
}

export default InputForm;


