import React from 'react'
import './App.css'

function Post({name, message, likes}){
    return(
        <div className= "post">
            <h3>{name}</h3>
            <p>{message}</p>
            <h3># likes:</h3>
        </div>
    )
}


export default Post;