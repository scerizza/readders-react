import React from 'react'
import '../App.css'

function Post({name, message, reactions, comments}){
    return(
        <div className= "post">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3>{reactions.length} likes  -  {comments.length} comments</h3>
        </div>
    )
}


export default Post;