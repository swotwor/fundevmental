import React from 'react';

export default function Chat({ userState, inputState, onChangeInput, sendMessage }) {

	return (
		<div className='chat'>
			<div className='chat__inner'>
				<div className='chat__user'>
					<div className='chat__userHeader'>
						<img className='chat__userAvatar' src={userState.icon} alt='avatar' />
						<div className='chat__userInfo'>
							<p className='chat__userName'>
								<img src='images/icons/circle_check.png' alt='circle-chek' />
								{userState.name}
							</p>
							<p className='chat__userFrendly'>
								<img src='images/icons/user_heart.png' alt='user-heart' />
								Вы понравились друг другу 14 июля
							</p>
						</div>
						<img className='chat__menu' src='images/icons/chat_menu.png' alt='chat-menu' />
					</div>
					<div className='chat__userGallery'>
						<img src='images/gallery/Rectangle 21.png' alt='galleryPhoto' />
						<img src='images/gallery/Rectangle 22.png' alt='galleryPhoto' />
						<img src='images/gallery/Rectangle 25.png' alt='galleryPhoto' />
					</div>
				</div>
				<div className='chat__messages'>
					<ul className='chat__message'>
						{userState.messages.map((user) => (
							<li className={user.type === 'from' ? 'chat__messageTextFrom' : 'chat__messageTextTo'} key={user.time}>
								<span className='chat__messageTime'>{new Date(user.time).toLocaleTimeString()}</span>
								{user.msg}
							</li>
						))}
						{/* <li className='chat__messageTextTo'> */}
					</ul>
				</div>
			</div>
			<div className='chat__writeMessage'>
				<input type='text' placeholder='Твое сообщение... (Enter чтобы отправить)' value={inputState} onChange={onChangeInput}/>
				<div className='chat__icons'>
					<div className='chat__icon'>
						<img src='images/icons/happy.png' alt='happy' />
						<img src='images/icons/image.png' alt='gallery' />
						<img src='images/icons/Gift.png' alt='gift' />
					</div>
					<img src='images/icons/Send.png' alt='send' onClick={sendMessage}/>
				</div>
			</div>
		</div>
	);
}
