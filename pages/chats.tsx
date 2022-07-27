import React, {useState, useContext, useEffect} from "react";
import {globalContext} from '../context/index';
import {useRouter} from "next/router";
import dynamic from "next/dynamic";

// const ChatEngine = dynamic(()=>
//     import("react-chat-engine").then((module) => module.ChatEngine)
// )

// const MessageFormSocial = dynamic(()=>
//     import("react-chat-engine").then((module) => module.ChatEngine)
// )

export default function Chats() {
  return <div className="background">chats</div>;
}