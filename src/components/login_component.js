import React, {useState, useContext} from 'react'
import { AccountContext} from '../utils/account.js'

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {authenticate}= useContext(AccountContext);

       const sendLogin =(event)=>{

        event.preventDefault();

        authenticate(email, password)//  authenticate function
            .then(data=>{
                window.location.reload(false);

            })
            .catch(err =>{
                console.log('Failed to login!', err);
                
            })
    }
    
    return(
        <div className="FormDiv">
            <br/>
            <h3>Login</h3>
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