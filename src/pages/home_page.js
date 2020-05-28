import React, {useState} from 'react'
import SignUp from '../components/signup_component.js'
import Login from '../components/login_component.js'

function Home(){

    return(
        <div>
            <SignUp/>
            <h3>Oppure...</h3>
            <Login/>
            <br/>
        </div>
    )
}

export default Home