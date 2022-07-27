import type { NextPage } from 'next'
import React, {useContext} from 'react';
import {globalContext} from '../context/index';
import {useRouter} from 'next/router';
import axios from 'axios';

const Auth = () => {
  const { username,
    setUsername,
    secret,
    setSecret} = useContext(globalContext);
  const router = useRouter();
  // 
  function onSubmit(e: any){
    e.preventDefault();
    if(username.length == 0 || secret.length == 0) return;
    //
    router.push('/chats');
  }
  //
  return <div className='background'>
    <div className='auth-container'>
      <form className="auth-form" onSubmit={onSubmit}>
        <div className="auth-title">Chat</div>
        <div className="input-container">
          <input placeholder="Email" className='text-input' onChange={e => setUsername(e.target.value)} />
          <input placeholder="Password" className='text-input' onChange={e => setSecret(e.target.value)} />
          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </div>
      </form>
    </div>
  </div>
}

export default Auth
