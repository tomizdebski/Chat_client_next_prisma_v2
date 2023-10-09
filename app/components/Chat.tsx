"use client"
import { useEffect, useState, useRef } from "react";
import Form from "../components/Form";
import socketIO from "socket.io-client";
import { iAppProps } from "../../types/types";
import ChatBody from "./ChatBody";
import ChatBar from "./ChatBar";


export default function ChatComponent({data, session}: iAppProps) {

    const [socket, setSocket] = useState<any | null>(null);
    
    console.log("Chat data: ", data);
    console.log('Session Chat', session.user);
    
   

   useEffect(() => {
    const socket = socketIO(process.env.NEXT_PUBLIC_URL_API as string);
    console.log('chat use effect',socket);

    socket.emit("newUser", { userName: session.user.name, socketID: socket.id, image: session.user.image });
    
    setSocket(socket);
    return () => {

        socket.disconnect();
    }
   }, []);
   


    
   if (socket === null) return <div>Connecting socket ...</div>;    
    console.log(socket);

    return (
        
        <div className=" flex-grow max-h-screen  py-28 ">
        <div className="chat">  
        <ChatBar socket={socket} />
            <div className="chat__main">
            <ChatBody socket={socket} session={session} />
            <Form socket={socket} data={data} session={session}/>
            </div>
            
        </div>
        </div>
        
    

    )
}