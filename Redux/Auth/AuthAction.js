
export const AUTH_FAILURE =  'AUTH_FAILURE';
export const AUTH_REQUEST  = "AUTH_CHECKING";
export const AUTH_SUCCESS = 'AUTH_SUCESS';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
 


export const requestAuth = () =>{
  return {type : AUTH_REQUEST};
}

export const successAuth = (userData) =>{
  console.log(userData)
    return {type : AUTH_SUCCESS, payload : userData};
  }

  export const failureAuth = () => {
    return {type : AUTH_FAILURE}
  }


  export const  mainAuth = () => {
    console.log("Main function is calling")
   
       return (dispatch,getState) => {
      async function onGoogleButtonPress() {
          console.log('hiii')
          GoogleSignin.configure({
            webClientId: '846470093311-15ko6d2kj3poa3dtubi5ld9ef5rpimon.apps.googleusercontent.com',
          });
          const { idToken } = await GoogleSignin.signIn();
        
          // Create a Google credential with the token
          const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
          // Sign-in the user with the credential
          const user_data = auth().signInWithCredential(googleCredential); 
          user_data.then((res) =>  dispatch(successAuth(res.additionalUserInfo.profile)))
          .catch(e => console.log({e}))
        }
     onGoogleButtonPress()
       }
     
  }








