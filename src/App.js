import React, { useEffect } from 'react';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';

import './App.css';

function App() {

  useEffect(() => {
    
  }, [])
  
  useEffect(() => {

    const pusher = new Pusher('b78766f69773703ce3a4', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, [])

  return (
    <div className="app">
      <div className="app-body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
