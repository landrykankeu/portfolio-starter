import {gapi, google} from "google-api-client"
// import { useEffect, useState } from "react";

// const [isSignedIn, setIsSignedIn] = useState(false);

// useEffect(() => {
//   configureGoogleSignIn();
// }, []);

// const configureGoogleSignIn = async () => {
//   await GoogleSignin.configure({
//     scopes: ['https://www.googleapis.com/auth/gmail.readonly'],
//     webClientId: '<YOUR_WEB_CLIENT_ID>',
//     offlineAccess: true,
//   });
// };
export const handleAuthClick = async () => {
  try {
    
    await gapi.GoogleSignin.hasPlayServices();
    const userInfo = await gapi.GoogleSignin.signIn();
    // Handle user information or API calls here
    // setIsSignedIn(true);
    // Call the listLabels function or any other action you want on successful sign-in
  } catch (error) {
    if (error.code === google.statusCodes.SIGN_IN_CANCELLED) {
      // Handle sign-in cancellation
    } else if (error.code === google.statusCodes.IN_PROGRESS) {
      // Handle sign-in in progress
    } else if (error.code === google.statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // Handle Play services not available
    } else {
      // Handle other errors
    }
  }
};

export const handleSignoutClick = async () => {
  try {
    await gapi.GoogleSignin.revokeAccess();
    await gapi.GoogleSignin.signOut();
    // setIsSignedIn(false);
    // Perform any other cleanup or actions after sign-out
  } catch (error) {
    console.error('Error during sign out', error);
  }
};