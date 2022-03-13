import React from 'react';
import panda from '../panda.jpg';

const User = ({user, selectUser}) => {

    console.log(user.avatar);
  return (
   <div >
       <div className="user_wrapper" onClick={() => {
         selectUser(user);
       }} >
           <div className="user_info">
           <div className="user_detail">
                <img src = {user.avatar || panda} alt="avatar" className='avatar' />
                <h4>{user.name}</h4>
            </div>
            <div
            className={`user_status ${user.isOnline ? "online" : "offline"}`}
          >
             
            </div>
           </div>
       </div>
       
   </div>
  )
}

export default User