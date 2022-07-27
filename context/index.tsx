import { Props } from 'next/script';
import React, {createContext, useState} from 'react';

const initialState = {};

interface chatContextType {
    username: any,
    setUsername: any,
    secret: any,
    setSecret: any
}

export const globalContext = createContext<chatContextType>({} as chatContextType);

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