import React from 'react'

import classes from './Message.module.css'

function Message({message}) {
    return (
        <>
            <p className={message.received ? `${classes.message} ${classes.receiver}` : classes.message}>
            <span className={classes.name}>{message.name}</span>
            {message.message}
            <span className={classes.timestamp}>{new Date().toUTCString()}</span>
            </p> 
        </>
    )
}

export default Message
