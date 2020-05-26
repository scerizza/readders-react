import React, {useState, useEffect} from 'react'
import Post from '../components/post_component.js'


function PostList(){

  const targetUrl="http://localhost:4000/post/"

  useEffect(()=>{
    fetchItems();
  },[]);

  const [posts, setPosts] = useState([])

  const fetchItems = async () =>{
    const data = await fetch(targetUrl);

    const posts= await data.json();
    console.log();
    setPosts(posts)
  }

  return(
    <div>
        <h1>Posts</h1>
        {posts.map(post=>(
        <Post 
          name={post.username}
          message={post.description}
          reactions={post.reactions}
          comments= {post.comments}
          />
      ))}
    </div>
  )
}

export default PostList;