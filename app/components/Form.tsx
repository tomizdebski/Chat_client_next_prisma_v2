"use client";

import { postData } from "../action";
import { useState } from "react";
import  iAppProps  from "./Chat";

export default function Form({ socket, data, session }: { socket: any; data: any; session: any }) {

  console.log("sesja-form", session);
  const [message, setMessage] = useState("");

  const handleTyping = () => {
    console.log("typing...");
    socket.emit("typing...");
  }
    

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit("message", {
        text: message,
        name: session.user.name,
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
      });
    }
    setMessage("");
  };

  return (
    
    <form
      className="p-6 fixed bottom-0 left-0 w-full bg-gray-200 "
      onSubmit={handleSendMessage}
    >
      <div className="flex gap-4">
        <input
          type="text"
          name="message"
          placeholder="Napisz wiadomość ..."
          className="flex-grow py-2 px-4 outline-none rounded-full"
          value={message}
          onChange={(e) => setMessage((e.target as HTMLInputElement).value)}
          onKeyDown={handleTyping}
        />
        <button
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-l-3xl rounded-t-3xl"
        >
          Wyślij
        </button>
      </div>
    </form>
    
  );
}
