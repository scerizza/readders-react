import React, {useState} from 'react'
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js'
import UserPool from '../UserPool.js';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendLogin =(event)=>{

        event.preventDefault();

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: data =>{
                console.log('onSuccess', data)
                alert("Login Effettuato")
            },
            onFailure: err=>{
                console.error("onFailure", err)
                alert(err.message)
            },
            newPasswordRequired: data=>{
                console.log("newPasswordRequired", data)                
            }
        });
 
    }

    return(
        <div className="FormDiv">
            <br/>
            <h3>Accedi:</h3>
            <form onSubmit={sendLogin}>
                <input placeholder="email" onChange={(event)=>setEmail(event.target.value)} className="InputText"/>
                <br/>
                <input placeholder="password" type="password" onChange={(event)=>setPassword(event.target.value)} className="InputText"/>
                <br/>
                <input type="submit"  value="Accedi" className="ClassicButton"/>
            </form>
        </div>
    )
}

export default Login;