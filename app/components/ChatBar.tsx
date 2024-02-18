import React, { useState, useEffect} from 'react';
import Image from 'next/image';


export interface IUser {
  userName: string;
  socketID: string;
  image: string;
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
      
      <div>
        <h4 className="chat__header">Aktywni użytkownicy</h4>
        <div className="chat__users">
          {users.map((user) => (
            <div key={user.socketID} className='flex gap-2 items-center'>
            <Image src={user.image} alt="user" width={30} height={30} className="rounded-full" />
            <p className="text-black">{user.userName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;