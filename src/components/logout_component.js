import React, {useContext} from 'react'
import { AccountContext} from '../utils/account.js'

function Logout(){


    const {logout}= useContext(AccountContext);

       const sendLogout =(event)=>{

        event.preventDefault();

        logout()//  authenticate function
            .then(data=>{
                console.log('Logged out!',data)
                window.location.reload(false);

            })
            .catch(err =>{
                console.log('Failed to login!', err);
                
            })
    }
    
    return(
        <div>
            <button className="ClassicButton" onClick={sendLogout}>Logout</button>
        </div>
        )

    }
export default Logout;