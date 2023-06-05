import React from 'react'

export default function Message(props) {
    const { text, photoURL, username } = props.message;

    return (
        <div>
            <img src={photoURL} />
            <h1>{username}</h1>
            <p>{text}</p>
        </div>
    )
}
