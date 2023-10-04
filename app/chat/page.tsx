import { getServerSession } from "next-auth"
import { authOptions } from "../lib/auth"
import {redirect} from 'next/navigation'
import Form from "../components/Form";
import { prisma } from "../lib/db";
import ChatComponent from "../components/Chat";
import socketIO from "socket.io-client";

async function getData() {
    const data = await prisma.message.findMany({
        select: {
            message: true,
            id: true,
            socketID: true,
            User: {
                select: {
                    name: true,
                    image: true,
                },
            },
        },
        orderBy: {
            createdAt: 'asc'
        },
        take: 50,
    });
    return data;
}

export default async function ChatHomePage() {

    const session = await getServerSession(authOptions);
    const data = await getData();
    
    console.log(data);

    if(!session) {
        redirect("/");
    }

    return (
        <div className="h-screen bg-gray-200 flex flex-col">
            <ChatComponent data={data as any} session={session}/>
        </div>
    )
}