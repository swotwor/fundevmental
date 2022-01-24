import './App.scss';
import Chat from './components/chat/Chat';
import Sidebar from './components/chat/Sidebar';
import { React, useEffect, useState } from 'react';
const axios = require('axios');

function App() {
	const [state, setState] = useState(null);
	const [activeChat, setActiveChat] = useState(0)
	const [inputState, setInputState] = useState('');

	const onChangeInput = (event) => {
		setInputState(event.target.value)
	}

	useEffect(() => {
		axios.get('https://61ed9b4c634f2f00170cec9d.mockapi.io/get_data').then(res => setState(res.data))
	}, [])

	const sendMessage = (activeChat, inputState) => {
		let obj = {to_user_id: activeChat, msg: inputState};
		axios.post('https://61ed9b4c634f2f00170cec9d.mockapi.io/set_data', obj)
	}
	
	if(state === null) {
		return <p>Loading page...</p>;
	}
  return (
    <div className='chatWindow'>
      <Sidebar
				state={state}
				setActiveChat={setActiveChat}
				activeChat={activeChat}/>
			<Chat
				userState={state[activeChat]}
				inputState={inputState}
				onChangeInput={onChangeInput}
				sendMessage={sendMessage}
				/>
    </div>
  );
}

export default App;
