import React, {useState} from 'react'
import Post from './post'

function App(){

const [posts, setPosts] = useState([
  {name: "Ceriz", message: "post di ceriz"},
  {name: "Pizz", message: "post di pizz"}
])

  return(
    <div className="app">
      {posts.map(post=>(
        <Post name={post.name} message={post.message}/>
      ))}
    </div>
  )
}

export default App;