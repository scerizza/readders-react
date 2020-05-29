import React, {useState, useContext, useEffect} from 'react'
import {Account, AccountContext} from '../utils/account.js'
import Login from '../components/login_component.js'
import Logout from '../components/logout_component.js'
import SignUp from '../components/signup_component.js'
import PersonalUserPage from './personalUser_page.js'

function Home(){
    const [status, setStatus] = useState(false);
    const [cognitoId, setCognitoId] = useState("");
    
    const { getSession } = useContext(AccountContext);
    const {getIdentityID} = useContext(AccountContext);

       useEffect(()=>{
           
        getSession()
            .then(session =>{
                setStatus(true)
            })

        getIdentityID()
            .then(identityID =>{             
                setCognitoId(identityID)               
            })

    },[])

    if(status){
        return(
            <Account>
                <Logout/>
                {<PersonalUserPage userId={cognitoId}/>}
            </Account>
        );

    } else {
        return(
            <Account>
                <Login/>
                <SignUp/>
                <br/>
            </Account>
        );
     }

}
export default Home