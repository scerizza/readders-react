import React from 'react'
import '../App.css'

function Book({title, coverBookUrl, isbn}){

    const imgUrl = coverBookUrl !== undefined ? coverBookUrl : ""

    return(
        <div>
            <img src={imgUrl} alt=""/>
            <h5>{title}</h5>
        </div>
    )


}

export default Book