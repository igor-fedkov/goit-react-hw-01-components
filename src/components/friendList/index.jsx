import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Ul = styled.ul`
	margin: 20px 0 0 0;
	padding: 10px 15px 0 7px;
	width: 420px;
`;

const Li = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	padding: 0 15px;
	width: 100%;
	min-height: 115px;
	box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.79);
`;

const Status = styled.span`
	display: block;
	width: 25px;
	height: 25px;
	border-radius: 50%;
	background-color: red;
	background-color: ${props => props.isOnline ? 'green' : 'red'};
`;

const Avatar = styled.img`
	margin-left: 17px;
	width: 95px;
	height: 95px;
	border-radius: 4px;
`;

const Name = styled.p`
	margin-left: 17px;
	font-size: 2em;
	font-weight: 500;
`;

const FriendListItem = ({ avatar, name, isOnline }) => {
	const alt = `Аватар ${name}`;
	
	return (
		<Li>
			<Status isOnline={isOnline}></Status>
			<Avatar src={avatar} alt={alt} width="48" />
			<Name>{name}</Name>
		</Li>
	);
};

FriendListItem.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string, 
	isOnline: PropTypes.bool,
};

const FriendList = ({friends}) => {
	console.log(friends);
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