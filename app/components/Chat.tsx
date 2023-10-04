"use client"
import { useEffect, useState, useRef } from "react";
import Form from "../components/Form";
import socketIO from "socket.io-client";


export interface iAppProps {
    data: {
        User: {
            image: string | null,
            name: string | null
        };
        message: string;
        socketID: string;
    }[],
    session: any
}

export default function ChatComponent({data, session}: iAppProps) {

    const [socket, setSocket] = useState<any | null>(null);
   
    const [typingStatus, setTypingStatus] = useState("");
    const lastMessageRef = useRef<HTMLDivElement | null>(null);
    
    console.log("Chat data: ", data);
    console.log(session);
    
   

   useEffect(() => {
    const socket = socketIO(process.env.NEXT_PUBLIC_URL_API as string);
    setSocket(socket);
   }, []);
    
   
   
   if (socket === null) return <div>Connecting socket ...</div>;    

   console.log(socket);

    return (
        <>
        <div className="p-6 flex-grow max-h-screen overflow-auto py-32 bg-blue-600">

            <div className="flex flex-col gap-4">
            
            </div>
        </div>
        <Form socket={socket} data={data} session={session}/>
        </>

    )
}