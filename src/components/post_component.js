import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'

function Post({name, message, reactions, comments}){

    const userPageUrl= "user/"+ name 

    return(
        <div className= "post">
            <Link to={userPageUrl}><h4>{name}</h4></Link>
            <p>{message}</p>
            <h5>{reactions.length} likes  -  {comments.length} comments</h5>
        </div>
    )
}


export default Post;