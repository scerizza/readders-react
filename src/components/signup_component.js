import React, {useState} from 'react'
import UserPool from '../UserPool.js';

function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInOpen, setSignInOpen] = useState(false);

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

    const openSignIn = ()=>{
        setSignInOpen(!signInOpen);
       
    }

    if(signInOpen)
        return(
            <div className="FormDiv">
                <br/>
                <h3 onClick={openSignIn}>Registrati</h3>
                <form onSubmit={sendRegister}>
                    <input placeholder="email" onChange={(event)=>setEmail(event.target.value)} className="InputText"/>
                    <br/>
                    <input placeholder="password" type="password" onChange={(event)=>setPassword(event.target.value)} className="InputText"/>
                    <br/>
                    <input type="submit" value="Registrati" className="ClassicButton"/>
                </form>
            </div>
    )
    else
        return(
            <div>
                <br/>
                <h3 onClick={openSignIn}>Clicca qui</h3>
                <h3 onClick={openSignIn}>per entrare a far parte di Readders!</h3>
            </div>
        )
}

export default SignUp;