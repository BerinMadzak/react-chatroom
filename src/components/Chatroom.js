import React, { useState, useRef, useEffect } from 'react'
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

        const {displayName, photoURL, uid} = auth.currentUser;

        await addDoc(messageCollection, {
            text: input,
            time: serverTimestamp(),
            username: displayName,
            photoURL: photoURL,
            uid: uid
        });

        setInput('');
        endPoint.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <div>
            <button onClick={signUserOut} className='sign-out-button'> Sign Out </button>
            <div className='message-list'>
                {messageList && messageList.map((message)=><Message message={message} />)}
                <div ref={endPoint}></div>
            </div>
            <form onSubmit={handleSubmit} className='message-form'>
                <input className="input-field" type="text" placeholder='Enter text...' value={input} onChange={(e)=>setInput(e.target.value)}/>
                <input className="input-button" type="submit" value="Send"/>
            </form>
        </div>
    )
}
