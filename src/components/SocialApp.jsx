import React, { useState } from 'react';
import MainContainer from './MainContainer/MainContainer'
import Navbar from './Navbar/Navbar'
import InputForm from './Input/InputForm';
import PostCardContext from '../providers/PostsProvider';

const SocialApp = () => {
    const{posts, setPosts} = useState([]);
    return (
        <div>
            <PostCardContext.Provider value={{posts, setPosts}}>
                <Navbar/>
                <InputForm/>
                <MainContainer/>
            </PostCardContext.Provider>
            
            
        </div>
    );
}

export default SocialApp;
