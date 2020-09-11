import React from 'react'
import classes from './Chat.module.css'
import {SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic} from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core'
import Message from './Message/Message'

function Chat({ messages }) {
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
        <div className={classes.body}>
          {messages.map(message =>(
            <Message key={message._id} message={message}/>
          ))}
        </div>
        <div className={classes.footer}>
          <IconButton>
            <InsertEmoticon className={classes['MuiSvgIcon-root']} />
          </IconButton>
          <form>
            <input
              // value={input}
              // onChange={(e) => SettingsInputAntenna(e.target.value)}
              placeholder="Type a message"
              type="text"
            />
            <button
              type="submit"
              // onClick={sendMessage}
            >
              Send a message
            </button>
          </form>
          <IconButton>
            <Mic className={classes['MuiSvgIcon-root']} />
          </IconButton>
        </div>
      </div>
    );
}

export default Chat
