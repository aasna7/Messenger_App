import React, {useContext} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { auth,db } from '../firebase-config';
import { signOut } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { AuthContext } from '../context/auth';

function Navbar() {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignout = async () => {
    await updateDoc(doc(db, 'users', auth.currentUser.uid),{
      isOnline: false
    })
    await signOut(auth);
    navigate('/login');
  }


  return (
    <nav>
        <h3>
            <Link to="/">Me-Chat</Link>
        </h3>
        <div>
          {user ?

          <>
            <Link to='/profile'>Profile</Link>
            <button className='btn' onClick={handleSignout}>Log Out?</button>
          </> :
          <>
              <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
          </>
}
          
        </div>
    </nav>
  )
}

export default Navbar