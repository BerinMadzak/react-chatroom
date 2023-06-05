import React, { useState, useRef } from 'react'
import {auth, db} from "../config/firebase";
import { signOut } from 'firebase/auth';
import Message from './Message';
import {useCollectionData} from "react-firebase-hooks/firestore";
import { collection, serverTimestamp, query, orderBy, limit, addDoc } from 'firebase/firestore';

export default function Chatroom() {
    const [input, setInput] = useState('');

    const endPoint = useRef();
    const messageLimit = 30;

    const messageCollection = collection(db, 'messages');
    const res = query(messageCollection, orderBy('time'), limit(messageLimit));

    const [messageList] = useCollectionData(res, {idField: 'id'});

    const signUserOut = async () => {
        await signOut(auth);
    }

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        const {displayName, photoURL} = auth.currentUser;

        await addDoc(messageCollection, {
            text: input,
            time: serverTimestamp(),
            username: displayName,
            photoURL: photoURL
        });

        setInput('');
        endPoint.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div>
            <button onClick={signUserOut}> Sign Out </button>
            <div>
                {messageList && messageList.map((message)=><Message message={message} />)}
            </div>
            <div ref={endPoint}></div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter text...' value={input} onChange={(e)=>setInput(e.target.value)}/>
                <input type="submit" />
            </form>
        </div>
    )
}
