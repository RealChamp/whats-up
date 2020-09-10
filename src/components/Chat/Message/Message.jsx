import React from 'react'

import classes from './Message.module.css'

function Message({receiver}) {
    return (
        <>
            <p className={receiver ? `${classes.message} ${classes.receiver}` : classes.message}>
            <span className={classes.name}>Matthew</span>
            This is a message
            <span className={classes.timestamp}>{new Date().toUTCString()}</span>
            </p> 
        </>
    )
}

export default Message
