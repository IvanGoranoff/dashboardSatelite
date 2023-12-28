import React from 'react';
import Display from './components/Display';
import CommandPanel from './components/CommandPanel';
import NotificationsPanel from './components/NotificationsPanel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Display />
      <CommandPanel />
      <NotificationsPanel />
    </div>
  );
}

export default App;
