import React from 'react'
import '../App.css'

function User({username, fullname,profilePictureUrl, vip, bio,followers, follows, points, level, groups}){
    
    const imgUrl= profilePictureUrl !== undefined ? profilePictureUrl : "userImg.png"
    const vipImg= vip ? "Star.png" : ""



    

    return(
        <div className= "user">
            <br></br>
            <h1>{username}</h1>
            <br/>
            <img src= {vipImg} alt="" className="vipStar"/><br/>
            <img src={imgUrl} alt="" className="profilePictureUrl"/>
            <h2>{fullname}</h2>
            <h4>level: {level}, points: {points}</h4>
            <br></br>
            <p>{bio}</p>
            
        </div>
    )
}


export default User;