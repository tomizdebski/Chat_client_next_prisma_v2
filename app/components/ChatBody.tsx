"use client";
import { useRouter } from "next/navigation";


const ChatBody = ({
  messages,
  lastMessageRef,
  typingStatus,
  socket,
  session,
}: any) => {

  const router = useRouter();

  console.log('messages user name',messages[0].User.name);
  console.log('session name',session.user.name);

  return (
    <>
      {/* <header className="chat__mainHeader">
        <p>Spotkanie z kolegami</p>
        
      </header> */}

      <div className="message__container">
        {messages.map((message: any) =>
          message.User.name === session.user.name ? (
            <div className="message__chats" key={message.id}>
              <p className="sender__name">Ja</p>
              <div className="message__sender">
                <p>{message.message}</p>
              </div>
            </div>
          ) : (
            <div className="message__chats" key={message.id}>
              <p>{message.user.name}</p>
              <div className="message__recipient">
                <p>{message.message}</p>
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
