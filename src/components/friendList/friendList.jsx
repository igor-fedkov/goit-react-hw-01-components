import React from 'react';
import PropTypes from 'prop-types';

import { Ul, Li, Status, AvatarEl, Name } from './friendList.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
	const alt = `Аватар ${name}`;
	
	return (
		<Li>
			<Status isOnline={isOnline}></Status>
			<AvatarEl src={avatar} alt={alt} width="48" />
			<Name>{name}</Name>
		</Li>
	);
};

FriendListItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string, 
	isOnline: PropTypes.bool,
};

//-----------------------

const FriendList = ({friends}) => {
	const listItems = friends.map(({ id, avatar, name, isOnline }) =>
		<FriendListItem
			key={id.toString()}
			avatar={avatar}
			name={name}
			isOnline={isOnline}
		/>
	)
	return (
		<Ul>
			{listItems}
		</Ul>
	);
};

FriendList.propTypes = {
	friends: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		avatar: PropTypes.string,
		name: PropTypes.string.isRequired,
		isOnline: PropTypes.bool,
	}))
};

export default FriendList;