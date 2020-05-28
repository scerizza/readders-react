import React, {useState, useEffect} from 'react'
import User from '../components/user_component.js'
import BookList from '../components/bookList_component.js';
import Post from '../components/post_component.js'


function PostList({match}){

  
  const userTargetUrl= match.params.username === undefined ? "http://localhost:4000/user/ceriz23" : "http://localhost:4000/user/"+match.params.username
  const postTargetUrl= match.params.username === undefined ? "http://localhost:4000/post/ceriz23" : "http://localhost:4000/post/"+match.params.username

  useEffect(()=>{
    fetchItems();
  },[]);

  const [user, setUser] = useState({})
  const [posts, setPost] = useState([])

  const fetchItems = async () =>{
    const userData = await fetch(userTargetUrl);
    const postData = await fetch(postTargetUrl);

    
    const user= await userData.json();
    setUser(user[0])

    const posts= await postData.json();
    setPost(posts) 
        
  }

  return(
    <div>
        {
        <div>
          <User 
            username={user.username}
            fullname={user.fullName}
            bio={user.bio}
            followers={user.followers}
            follows={user.follows}
            points= {user.points}
            level = {user.level}
            vip={user.vip}
            profilePictureUrl={user.profilePictureUrl}
            />
          <br/>
          <BookList 
            listType="On-Reading books"
            list={user.readingBooks}
          />
          <hr/>
            <h2>I tuoi post:</h2>
            {posts.map(post=>(
          <Post 
            name={post.username}
            message={post.description}
            reactions={post.reactions}
            comments= {post.comments}
            />
        ))}
          <br/>
        </div>
        }
    </div>
  )
}

export default PostList;