import './App.scss';
import Chat from './components/chat/Chat';
import Sidebar from './components/chat/Sidebar';
import { React, useEffect, useState } from 'react';
const axios = require('axios');

function App() {
	const [state, setState] = useState([]);
	const [activeChat, setActiveChat] = useState([1])

	useEffect(() => {
		axios.get('https://61ed9b4c634f2f00170cec9d.mockapi.io/get_data').then(res => setState(res.data))
	}, [])
	
  return (
    <div className='chatWindow'>
      <Sidebar state={state} setActiveChat={setActiveChat}/>
			<Chat state={state[activeChat]}/>
    </div>
  );
}

export default App;
