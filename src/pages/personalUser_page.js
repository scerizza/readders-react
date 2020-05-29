import React, {useState, useEffect} from 'react'
import User from '../components/user_component.js'
import BookList from '../components/bookList_component.js';
import Post from '../components/post_component.js'


function PersonalUserPage({userId}){

  const userTargetUrl = userId === "" ? "http://localhost:4000/user/ceriz23" : "http://localhost:4000/user/id/"+userId
  
  console.log('userTargetUrl',userTargetUrl);
  
  
  const [user, setUser] = useState({})
  const [posts, setPost] = useState([])


  //const postTargetUrl= "http://localhost:4000/post/id/"+userId

  useEffect(()=>{
    fetchItems();
  },[]);



  const fetchItems = async () =>{
    
   
    const userData = await fetch(userTargetUrl);
    const user  = await userData.json();
    setUser(user[0])

    const postTargetUrl= "http://localhost:4000/post/"+ user[0].username
    const postData = await fetch(postTargetUrl);
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

export default PersonalUserPage;