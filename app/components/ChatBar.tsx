import React, { useState, useEffect} from 'react';


export interface IUser {
  userName: string;
  socketID: string;
}


const ChatBar = ({socket}:any) => {

  const [users, setUsers] = useState<IUser[]>([]);
  



  useEffect(() => {
    socket.on('newUserResponse', (data: any) => {
      setUsers(data);
      console.log(data);
    });
  }, [socket, users]);

  console.log(users);

  return (
    <div className="chat__sidebar">
      <h2>Chat</h2>
      <div>
        <h4 className="chat__header">Aktywni użytkownicy</h4>
        <div className="chat__users">
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;