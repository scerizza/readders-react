import React, {useState} from 'react'
import UserPool from '../UserPool.js';

function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const sendRegister =(event)=>{
        event.preventDefault();
        UserPool.signUp(email, password, [], null, (err,data)=>{
            if(err)
                alert(err.message);
            else{
                alert("Utente registrato")   
                console.log(data)
            } 
        });
    }

    return(
        <div className="FormDiv">
            <br/>
            <h3>Registrati:</h3>
            <form onSubmit={sendRegister}>
                <input placeholder="email" onChange={(event)=>setEmail(event.target.value)} className="InputText"/>
                <br/>
                <input placeholder="password" type="password" onChange={(event)=>setPassword(event.target.value)} className="InputText"/>
                <br/>
                <input type="submit" value="Registrati" className="ClassicButton"/>
            </form>
        </div>
    )
}

export default SignUp;