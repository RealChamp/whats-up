import React from 'react'

import classes from './SidebarChat.module.css'
import { Avatar } from '@material-ui/core'

function SidebarChat() {
    return (
        <div className={classes.sidebarChat}>
            <Avatar/>
            <div className={classes.info}>
                <h2>Rome name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
