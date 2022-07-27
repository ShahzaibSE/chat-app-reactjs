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
  //
  return <div className='background'>
    <div className='auth-container'>
      <form className="auth-form" onSubmit={e => e.preventDefault()}>
        <div className="auth-title">Chat</div>
        <div className="input-container">
          <input placeholder="Email" className='text-input' onChange={e => e.preventDefault()} />
        </div>
      </form>
    </div>
  </div>
}

export default Auth
