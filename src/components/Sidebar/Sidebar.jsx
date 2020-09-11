import React from 'react'
import classes from './Sidebar.module.css'
import {DonutLarge, Chat, MoreVert, SearchOutlined} from '@material-ui/icons'
import {Avatar, IconButton} from '@material-ui/core'
import SidebarChat from '../SidebarChat/SidebarChat'

function Sidebar() {
    return (
      <div className={classes.sidebar}>
        <div className={classes.header}>
          <Avatar className={classes["MuiAvatar-img"]} src="https://randomuser.me/api/portraits/women/44.jpg" alt='avatar' />
          <div className={classes.userPanel}>
            <IconButton>
              <DonutLarge fontSize="medium" />
            </IconButton>
            <IconButton>
              <Chat fontSize="medium" />
            </IconButton>
            <IconButton>
              <MoreVert fontSize="medium" />
            </IconButton>
          </div>
        </div>
        <div className={classes.search}>
          <div className={classes.searchContainer}>
            <SearchOutlined className={classes["MuiSvgIcon-root"]} />
            <input type='text' placeholder='Search or start new chat' />
          </div>
        </div>
        <div className={classes.chats}>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </div>
      </div>
    );
}

export default Sidebar
