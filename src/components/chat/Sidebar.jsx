export default function Sidebar({ state, setActiveChat, activeChat }) {
	return (
		<div className='sidebar'>
			<div className='search'>
				<input className='search__input' type='text' placeholder='Все' />
				<img className='search__coolicon' src='images/icons/coolicon.svg' alt='' />
			</div>
			<div className='theyLikeYou'>
				<img className='theyLikeYou__foto' src='images/TheyLikeYou.png' alt='TheyLikeYou' />
				<div className='theyLikeYou__info'>
					<p className='theyLikeYou__info__title'>Ты им нравишься!</p>
					<p className='theyLikeYou__info__text'>Узнай кто без ума от...</p>
				</div>
			</div>
			<div className='userList'>
				{state.map((user) => (
					<div
						className='user'
						key={user.id}
						onClick={() => setActiveChat(user.id - 1)}
						style={activeChat === user.id - 1 ? { background: '#ECEDEF' } : null}>
						<img className='user__avatar' src={user.icon} alt='Avatar' />
						<div className='userInfo'>
							<p className='userInfo__name'>{user.name}</p>
							<p className='userInfo__lastMessage'>
								{user.messages[user.messages.length - 1].type === 'to' ? <span>Ты: </span> : null}
								{user.messages[user.messages.length - 1].msg}
							</p>
						</div>
						<span className='user__newMessage'>1</span>
					</div>
				))}
			</div>
		</div>
	);
}
