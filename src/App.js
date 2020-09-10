import React from 'react';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';

import './App.css';

function App() {
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
