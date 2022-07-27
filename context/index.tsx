import { Props } from 'next/script';
import React, {createContext, useState} from 'react';

const initialState = {};

export const globalContext = createContext(initialState);

export const ContextProvider = (props:any) => {
    const [username, setUsername] = useState();
    const [secret, setSecret] = useState();
    // 
    const value = {
        username,
        setUsername,
        secret,
        setSecret
    }

    return <globalContext.Provider value={value}>{props.children}</globalContext.Provider>
}