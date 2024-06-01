/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect,useState,useContext,createContext } from 'react';
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";


// Create a context to store the authentication state
const AuthContext = createContext();


// Create a custom hook to use the AuthContext
export function useAuth(){
    return useContext(AuthContext);

}


export function AuthProvider({ children}){
    const [currentUser,setCurrentUser] = useState(null);
    const [userLoggedIn,setUserLoggedIn] = useState(false);
    const [isEmailUser, setIsEmailUser] = useState(false);
    const [isGoogleUser, setIsGoogleUser] = useState(false);
    const [loading,setLoading] = useState(true);

    useEffect(()=> {
        const unsubcribe = onAuthStateChanged(auth, initializeUser);
        return unsubcribe;
    },[]);

    async function initializeUser(user) {
        if(user){
            setCurrentUser({...user});
            
            const isEmail = user.providerData.some((provider) => provider.providerId === "password");
            setIsEmailUser(isEmail);
            setUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        isEmailUser,
        isGoogleUser,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )


}