"use client";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { IMessage } from "../../types/types";

const ChatBody = ({ socket, session }: any) => {
  const router = useRouter();
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [typingStatus, setTypingStatus] = useState("");
  const lastMessageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function fetchMessages() {
      fetch(process.env.NEXT_PUBLIC_URL_API + "/api" as string)
        .then((response) => response.json())
        .then((data) => setMessages(data.messages));
    }
    fetchMessages();
  }, []);

  useEffect(() => {
    socket.on("messageResponse", (data: IMessage) =>
      setMessages([...messages, data])
    );
  }, [socket, messages]);

  useEffect(() => {
    //scroll to last message
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    socket.on("typingResponse", (data: any) => setTypingStatus(data));
  }, [socket]);

  console.log(messages)

  return (
    <>
      {/* <header className="chat__mainHeader">
        <p>Spotkanie z kolegami</p>
        
      </header> */}

      <div className="message__container">
        {messages.map((message) =>
          message.name === session.user.name ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">Ja</p>
              <div className="message__sender">
                <p>{message.text}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
              </div>
            </div>
          )
        )}

        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
