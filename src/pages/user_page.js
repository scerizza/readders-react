import React, {useState, useEffect} from 'react'
import User from '../components/user_component.js'
import BookList from '../components/bookList_component.js';


function PostList({match}){

  
  const targetUrl= match.params.username === undefined ? "http://localhost:4000/user/ceriz23" : "http://localhost:4000/user/"+match.params.username
 

  useEffect(()=>{
    fetchItems();
  },[]);

  const [user, setUser] = useState({})

  const fetchItems = async () =>{
    const data = await fetch(targetUrl);

    

    const user= await data.json();
    setUser(user[0])
    console.log(user[0]);
    
    
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
          <BookList 
            listType="Toplist"
            list={user.readingBooks}
          />
          <hr/>
        </div>
        }
    </div>
  )
}

export default PostList;