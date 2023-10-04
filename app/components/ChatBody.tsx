"use client";
import { useRouter } from "next/navigation";

export interface IMessage {
  name?: string;
  text: string;
  content: string;
  id: string;
  socketID: string;
}

export type ChatBodyProps = {
  messages: IMessage[];
  lastMessageRef: React.MutableRefObject<HTMLDivElement | null>;
  typingStatus: any
};

// const ChatBody = ({
//   messages,
//   lastMessageRef,
//   typingStatus,
// }: ChatBodyProps) => {

const ChatBody = ({
  messages,
  lastMessageRef,
  typingStatus,
}: any) => {

  const router = useRouter();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    router.push("/");
  };

  console.log(messages);

  return (
    <>
      <header className="chat__mainHeader">
        <p>Spotkanie z kolegami</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          Wyjdź z czatu
        </button>
      </header>

      <div className="message__container">
        {messages.map((message) =>
          message.name === localStorage.getItem("userName") ? (
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
