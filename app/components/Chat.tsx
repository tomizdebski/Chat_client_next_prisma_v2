"use client"
import { useEffect, useState, useRef } from "react";
import Form from "../components/Form";
import socketIO from "socket.io-client";
import { iAppProps } from "../../types/types";
import ChatBody from "./ChatBody";


export default function ChatComponent({data, session}: iAppProps) {

    const [socket, setSocket] = useState<any | null>(null);
    const [typingStatus, setTypingStatus] = useState("");
    const lastMessageRef = useRef<HTMLDivElement | null>(null);
    
    console.log("Chat data: ", data);
    console.log(session);
    
   

   useEffect(() => {
    const socket = socketIO(process.env.NEXT_PUBLIC_URL_API as string);
    setSocket(socket);
    return () => {
        socket.disconnect();
    }
   }, []);
   


    
   if (socket === null) return <div>Connecting socket ...</div>;    
    console.log(socket);

    return (
        <>
        <div className="p-6 flex-grow max-h-screen overflow-auto py-32 ">

            <div className="chat__main">
            <ChatBody messages={data} lastMessageRef={lastMessageRef} typingStatus={typingStatus}socket={socket} data={data} session={session} />
            <Form socket={socket} data={data} session={session}/>
            </div>
            
        </div>
        
        </>

    )
}