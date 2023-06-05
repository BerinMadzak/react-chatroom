import React from 'react'
import {auth} from "../config/firebase";
import { signOut } from 'firebase/auth';

export default function Chatroom() {

    const signUserOut = async () => {
        await signOut(auth);
    }

    return (
        <div>
            <button onClick={signUserOut}> Sign Out </button>
            <form>
                <input type="text" placeholder='Enter text...'/>
                <input type="submit" />
            </form>
        </div>
    )
}
