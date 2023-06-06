import React from 'react'
import { auth } from '../config/firebase';

export default function Message(props) {
    const { text, photoURL, username, uid } = props.message;

    return (
        <div className=
            {auth.currentUser.uid === uid ? 'message self-message' : 'message'}>
            <img className="message-icon" src={photoURL} />
            <div className='message-inner'> 
                <h1 className='message-username'>{username}</h1>
                <p className=
                    {auth.currentUser.uid === uid ? 'message-text self-text' : 'message-text'}>{text}</p>
            </div>
        </div>
    )
}
