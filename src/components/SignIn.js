import React from 'react'
import {auth, provider} from "../config/firebase";
import { signInWithPopup } from 'firebase/auth';

export default function SignIn() {

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
    }

    return (
        <button className='sign-in-button' onClick={signInWithGoogle}> Sign In </button>
    )
}
