import React from 'react';

export default function Chat({ state }) {
	// console.log(state.name);
	return (
		<div className='chat'>
			<div className='chat__inner'>
				<div className='chat__user'>
					<div className='chat__userHeader'>
						<img className='chat__userAvatar' src='images/avatars/4.png' alt='avatar' />
						<div className='chat__userInfo'>
							<p className='chat__userName'>
								<img src='images/icons/circle_check.png' alt='circle-chek' />
								Владлена, 19
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
						<li className='chat__messageTextFrom'>
							<span className='chat__messageTime'>15:54</span>
							Кароч сегодня купила стекла
						</li>
						<li className='chat__messageTextFrom'>
							<span className='chat__messageTime'>15:54</span>
							Для окон само собой. Ну и понеслись проблемы как ты понимаешь
						</li>
						<li className='chat__messageTextTo'>
							<span className='chat__messageTime'>15:54</span>
							Хай. Что за проблемы?
						</li>
						<li className='chat__messageTextFrom'>
							<span className='chat__messageTime'>15:54</span>
							Они тупо не подходят
						</li>
						<li className='chat__messageTextFrom'>
							<span className='chat__messageTime'>15:54</span>
							Размер не тот!
						</li>
						<li className='chat__messageTextTo'>
							<span className='chat__messageTime'>15:54</span>
							Ну это ни в какие рамки
						</li>
					</ul>
				</div>
			</div>
			<div className='chat__writeMessage'>
				<input type='text' placeholder='Твое сообщение... (Enter чтобы отправить)' />
				<div className='chat__icons'>
					<div className='chat__icon'>
						<img src='images/icons/happy.png' alt='happy' />
						<img src='images/icons/image.png' alt='gallery' />
						<img src='images/icons/Gift.png' alt='gift' />
					</div>
					<img src='images/icons/Send.png' alt='send' />
				</div>
			</div>
		</div>
	);
}
