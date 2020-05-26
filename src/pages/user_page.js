import React, {useState, useEffect} from 'react'
import User from '../components/user_component.js'


function PostList(){

  const targetUrl="http://localhost:4000/user/ceriz23"

  useEffect(()=>{
    fetchItems();
  },[]);

  const [user, setUser] = useState({})

  const fetchItems = async () =>{
    const data = await fetch(targetUrl);


    const user= await data.json();
    setUser(user[0])
    console.log(user[0].vip);
    
  }

  return(
    <div>
        {
        <User 
          username={user.username}
          fullname={user.fullName}
          bio={user.bio}
          followers={user.followers}
          follows={user.follows}
          points= {user.points}
          level = {user.level}
          vip={user.vip}
          readBooks = {user.readBooks}
          wishlist={user.wishlist}
          swaplist={user.swaplist}
          groups={user.groups}
          profilePictureUrl={user.profilePictureUrl}
          />
      }
    </div>
  )
}

export default PostList;