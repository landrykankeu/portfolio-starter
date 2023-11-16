import {gapi, google} from "google-api-client"
import {React, useEffect} from 'react'
import { handleAuthClick, handleSignoutClick } from '../utils/Context/Gmail';
function  Contact(){
  useEffect(() => {
    configureGoogleSignIn();
  }, []);
  
  const configureGoogleSignIn = async () => {
    await gapi.configure({
      scopes: ['https://www.googleapis.com/auth/gmail.readonly'],
      webClientId: '416027209297-cpsfnd96c5u91aqqt4uhidr3pokpe0p5.apps.googleusercontent.com',
      offlineAccess: true,
    });
  };
  return (
    <div className="section" id='contact'>
        <div className="container mx-auto">
          <h1 className='text-[55px] text-center font-bold leading-[0.8] lg:text-[80px]'>Contact</h1>
          <form action="" className="h-80 rounded-lg overflow-hidden my-20 grid grid-cols-1 divide-y border relative "> 
            <div className='relative overflow-hidden'>
              <input type="email" className='text-center bg-transparent border h-full w-full outline-none focus:border-blue-500 transition duration-200' />
              <span className='font-opacity-0 absolute left-4 top-5 px-1 transition duration-200 z-50 input-text'>Saississez votre adresse mail...</span>
            </div>
            <div className='relative overflow-hidden'>
              <input type="text" className='text-center bg-transparent h-full w-full outline-none focus:border-blue-5 00 transition duration-200' />
              <span className='absolute left-4 top-5 px-1 transition duration-200 z-50 input-text'>Saississez l'objet du message...</span>
            </div>
            <div className='relative overflow-hidden'>
              <textarea  className='text-justify border w-full h-full bg-transparent outline-none focus:border-blue-500 transition duration-200' />
              <span className='absolute left-4 top-5 px-1 transition duration-200 z-50 input-text'>Saisisser votre message...</span>
            </div>
            <input type="submit" className=" w-full cursor-pointer font-semibold hover:bg-green-600"value={'Soumettre'} />
          </form>
          <div className="flex justify-center">
            
          <button className='btn btn-sm' onClick={() => handleAuthClick()}>signIn </button>
          <button className='btn btn-sm' onClick={() => handleSignoutClick()}>signOut</button>

          </div>
        </div>
    </div>)
}

export default Contact
