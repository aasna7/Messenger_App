import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import {auth} from '../firebase-config';
import Loading from '../components/Loading';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        onAuthStateChanged(auth, user =>{
            console.log(auth.currentUser);
            setUser(user);
            setLoading(false);
        })
    }, []);

    if (loading) {
        return <Loading />;
    }

    return <AuthContext.Provider value ={ { user} }>{children}</AuthContext.Provider>
}


export default AuthProvider;