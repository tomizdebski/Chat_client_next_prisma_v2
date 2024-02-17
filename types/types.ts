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

export interface IUser {
  userName: string;
  socketID: string;
}