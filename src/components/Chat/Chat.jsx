import React from 'react'
import classes from './Chat.module.css'
import {SearchOutlined, AttachFile, MoreVert} from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'

console.log(classes)

function Chat() {
    return (
      <div className={classes.chat}>
        <div className={classes.header}>
          <Avatar />
          <div className={classes.info}>
            <h3>Room name</h3>
            <p>Last seen at...</p>
          </div>
          <div className={classes.chatMenu}>
            <IconButton>
              <SearchOutlined />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            <IconButton>
              <MoreVert />
            </IconButton>
          </div>
        </div>
      </div>
    );
}

export default Chat
