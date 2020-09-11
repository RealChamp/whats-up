import React, { useEffect, useState } from 'react';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from './axios';

import './App.css';

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/messages/sync')
    .then(res => {
      setMessages(res.data)
    })
  }, [])
  
  useEffect(() => {

    const pusher = new Pusher('b78766f69773703ce3a4', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
      setMessages([...messages, data])
    });

   return () => {
      channel.unbind_all()
      channel.unsubscribe( )
    }

  }, [messages])

  return (
    <div className="app">
      <div className="app-body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
