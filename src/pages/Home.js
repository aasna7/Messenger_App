import React, {useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import {db, auth} from '../firebase-config';
import { collection, query, where, onSnapshot, QuerySnapshot } from 'firebase/firestore';
import User from '../components/User';
import MessageForm from '../components/MessageForm';

function Home() {
  const [users, setUsers] = useState([]);
  const user1 = auth.currentUser.uid;
  const[chat, setChat] = useState("");

  useEffect(() => {
    const usersRef = collection(db, 'users');
    const q = query(usersRef, where('uid', 'not-in', [user1]));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users =[];
      querySnapshot.forEach(doc => {
        users.push(doc.data())
      })
      setUsers(users);

    });
    return () => unsub();

  }, []);
  console.log(users);

  const selectUser = (user) =>{
      setChat(user);
      console.log(user);
  }

  return (
    <div>
       <div className="home_container">
         <div className="users_container">
           {users.map(user => <User key ={user.uid} user={user} selectUser={selectUser} />)}
         </div>
         <div className="messages_container">
           {chat ? ( 
           <>
           <div className='messages_user'>
             <h3>{chat.name}</h3>
             </div>
             <MessageForm />
             </>
           )
             : <h3 className='no_conv' >Select a user to start conversation</h3>}
         </div>
       </div>
    </div>
  )
}

export default Home