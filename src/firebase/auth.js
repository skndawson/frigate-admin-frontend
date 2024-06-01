/* eslint-disable no-unused-vars */
import { auth } from "./firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
    updatePassword,
    sendEmailVerification,
    GoogleAuthProvider,
    signInWithPopup
 } from "firebase/auth";


export const createUserWithEmail = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInWithEmail = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}

export const doSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log(user);
    return user;
    // add user to firestore
  };
  

export const doSignOut = async () => {
    return auth.signOut();
}

export const doPasswordReset = async (email) => {
    return sendPasswordResetEmail(auth,email);
}

export const doPasswordUpdate = async (password) => {
    return updatePassword(auth.currentUser,password);
}

export const doEmailVerification = async () => {
    return sendEmailVerification(auth.currentUser,{
        url: `${window.location.origin}/inicio`,
    });
}
