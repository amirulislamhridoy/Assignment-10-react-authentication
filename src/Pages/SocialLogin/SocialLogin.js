import React from "react";
import "./SocialLogin.css";
import { AiFillFacebook } from "react-icons/ai";
import { useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SocialLogin = () => {
    const [signInWithFacebook, user, loading, error] = useSignInWithFacebook(auth);

    const handleFacebookSignIn = () => {
        signInWithFacebook()
    }
  return (
    <div>
      <div className="or-container">
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      <div className='social-login-container'>
        <div onClick={handleFacebookSignIn} className="facebook">
          <button>
            <AiFillFacebook className="icon" />
            <span>Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
