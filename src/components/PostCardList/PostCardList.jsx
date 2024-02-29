import PostCard from "../PostCard";
import axios from "axios";
import React, { useEffect , useContext} from 'react';
import PostCardContext from '../providers/PostsProvider';


// let arr = [
    
//     {
//         "id": "60d21b4667d0d8992e610c85",
//         "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
//         "likes": 43,
//         "tags": [
//             "animal",
//             "dog",
//             "golden retriever"
//         ],
//         "text": "adult Labrador retriever",
//         "publishDate": "2020-05-24T14:53:17.598Z",
//         "owner": {
//             "id": "60d0fe4f5311236168a109ca",
//             "title": "ms",
//             "firstName": "Sara",
//             "lastName": "Andersen",
//             "picture": "https://randomuser.me/api/portraits/women/58.jpg"
//         }
//     },
//     {
//         "id": "60d21b4967d0d8992e610c90",
//         "image": "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg",
//         "likes": 31,
//         "tags": [
//             "snow",
//             "ice",
//             "mountain"
//         ],
//         "text": "ice caves in the wild landscape photo of ice near ...",
//         "publishDate": "2020-05-24T07:44:17.738Z",
//         "owner": {
//             "id": "60d0fe4f5311236168a10a0b",
//             "title": "miss",
//             "firstName": "Margarita",
//             "lastName": "Vicente",
//             "picture": "https://randomuser.me/api/portraits/med/women/5.jpg"
//         }
//     },
//     {
//         "id": "60d21b8667d0d8992e610d3f",
//         "image": "https://img.dummyapi.io/photo-1515376721779-7db6951da88d.jpg",
//         "likes": 16,
//         "tags": [
//             "dog",
//             "pet",
//             "canine"
//         ],
//         "text": "@adventure.yuki frozen grass short-coated black do...",
//         "publishDate": "2020-05-24T05:44:55.297Z",
//         "owner": {
//             "id": "60d0fe4f5311236168a109ed",
//             "title": "miss",
//             "firstName": "Kayla",
//             "lastName": "Bredesen",
//             "picture": "https://randomuser.me/api/portraits/med/women/13.jpg"
//         }
//     },
    
// ];

const PostCardList = () => {

    // const[posts, setPosts] = useState([]);
    const{posts, setPosts} = useContext(PostCardContext);

    useEffect(() => {
        // We will Download the Content from dummyAPi.io
        axios.get("https://dummyapi.io/data/v1/post", {
            headers:{'app-id' : '65d50aec85a52d2ff101cb2f'}
        }).then(response => {
            const responseObject = response.data;
            setPosts([...responseObject.data]);
        })
    }, []);

  
        
    return (
        (posts.length == 0) ? "Loading..." : 
        
                    (posts.map((post) => <PostCard key={post.id} 
                    content={post.text} 
                    image={post.image}
                    authorFirstName={post.owner.firstName}
                    />))
    )
}

export default PostCardList;
