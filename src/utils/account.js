import React, {createContext} from 'react'
import {CognitoUser, AuthenticationDetails} from 'amazon-cognito-identity-js'
import Pool from '../UserPool.js'

const AccountContext= createContext();

const Account = props =>{

// GETSESSION FUNCTION================================================================

    const getSession = async ()=>{
    await new Promise((resolve, reject)=>{
            const user = Pool.getCurrentUser();           
            if(user){               
                user.getSession((err,session)=>{
                    if(session.idToken.payload){
                        console.log(session.idToken.payload);
                        resolve(session);     
                    } else {  
                        console.log(err);
                        reject(err);                                             
                    }
                });
            }else{
                reject();
            }
        });
    }

    // GETIDENTITY_ID FUNCTION================================================================

    const getIdentityID = ()=>{
        return new Promise((resolve, reject)=>{
                const user = Pool.getCurrentUser()          
                if(user){ 
                    user.getSession((err,session)=>{
                        if(session){
                            resolve(session.idToken.payload.sub);     
                        } else {  
                            console.log(err);
                            reject(err);                                             
                        }
                    });
                }else{
                    reject();
                }
            }).then((result)=>{return result});
            
        }


// AUTHENTICATE FUNCTION====================================================
    const authenticate = async (Username, Password)=>{
    
    await new Promise((resolve, reject)=>{
        const user = new CognitoUser({Username, Pool});//creating user
        const authDetails = new AuthenticationDetails({Username, Password});// create authDetails

        user.authenticateUser(authDetails, {//authenticating
            onSuccess: data =>{
                console.log('onSuccess', data)
                resolve(data)
            },
            onFailure: err=>{
                console.error("onFailure", err)
                reject(err)
            },
            newPasswordRequired: data=>{
                console.log("newPasswordRequired", data)
                resolve(data)                
            }
        }
        );
    })
}

// LOGOUT FUNCTION====================================================
const logout = async ()=>{

    const user = Pool.getCurrentUser();

    if(user)
        user.signOut()
    
}


// RETURN PHASE================================================
    
    return(
        <AccountContext.Provider value={{
            authenticate,
            getSession,
            logout,
            getIdentityID
        }}>
            {props.children}
        </AccountContext.Provider>
    )
}
export {Account, AccountContext}