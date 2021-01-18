import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const secondaryColor = '#768696';

const DescriptionEl = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 30px 0px;

	min-height: 255px;

	/* border:  1px solid green; */
	background-color: #fff;
`;

const AvatarEl = styled.img`
	width: 100px;
	border-radius: 50%;
`;

const NameEl = styled.p`
	margin: 30px 0 0 0;
	font-size: 16px;
	font-weight: 700;
`;

const TagEl = styled.p`
	margin: 10px 0 0 0;
	color: ${secondaryColor};
`;

const LocationEl = styled.p`
	margin: 10px 0 0 0;
	color: ${secondaryColor};
`;

const ProfileEl = styled.div`
	margin: 85px 75px;	
	/* border: 1px solid red ; */
	width: 250px;
	box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.79);
`;

const StatListEl = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	justify-content: space-between;

	list-style: none;
`;

const StatItemEl = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: calc(100% / 3);
	min-height: 75px;

	border: 1px solid #e4e9f0;
	background-color: #f3f6f9;

	justify-content: center;
`;

const LabelEl = styled.span`
	color: ${secondaryColor};
`;

const QuantityEl = styled.span`
	font-weight: 700;
`;

const UserDescription = ({ name, tag, location, avatar }) => {
	return (		
		<DescriptionEl>
			<AvatarEl
				src={avatar}
				alt="Аватар пользователя"
			/>
			<NameEl>{name}</NameEl>
			<TagEl>@{tag}</TagEl>
			<LocationEl>{location}</LocationEl>
		</DescriptionEl>
	)
};

UserDescription.defaultProps = {
	avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
};

UserDescription.propTypes = {
	name: PropTypes.string.isRequired,
	tag: PropTypes.string,
	location: PropTypes.string,
	avatar: PropTypes.string,
};

const Profile = ({ name, tag, location, avatar, stats}) => {
	return (
		<ProfileEl>
			<UserDescription
				name={name}
				tag={tag}
				location={location}
				avatar={avatar}
			/>
			<StatListEl>
				<StatItemEl>
					<LabelEl>Followers</LabelEl>
					<QuantityEl>{stats.followers}</QuantityEl>
				</StatItemEl>
				<StatItemEl>
					<LabelEl>Views</LabelEl>
					<QuantityEl>{stats.views}</QuantityEl>
				</StatItemEl>
				<StatItemEl>
					<LabelEl>Likes</LabelEl>
					<QuantityEl>{stats.likes}</QuantityEl>
				</StatItemEl>
			</StatListEl>
		</ProfileEl>
	);
};

Profile.defaultProps = {
	stats: {
		followers: 0,
		views: 0,
		likes: 0,
	}
}

Profile.propTypes = {
	stats: {
		followers: PropTypes.number.isRequired,
		views: PropTypes.number.isRequired,
		likes: PropTypes.number.isRequired,
	}
};

export default Profile;












//--------------------------------------------------------------------------------
// import styles from './profile.module.css';
// const UserDescription = ({ name, tag, location, avatar }) => {
// 	return (		
// 		<div className={styles.description}>
// 			<img
// 				src={avatar}
// 				alt="Аватар пользователя"
// 				className={styles.avatar}
// 			/>
// 			<p className={styles.name}>{name}</p>
// 			<p className={styles.tag}>@{tag}</p>
// 			<p className={styles.location}>{location}</p>
// 		</div>
// 	)
// };

// UserDescription.defaultProps = {
// 	avatar: 'https://www.flaticon.com/svg/static/icons/svg/3784/3784184.svg',
// };

// UserDescription.propTypes = {
// 	name: PropTypes.string.isRequired,
// 	tag: PropTypes.string,
// 	location: PropTypes.string,
// 	avatar: PropTypes.string,
// };

// const Profile = ({ name, tag, location, avatar, stats}) => {
// 	return (
// 		<div className={styles.profile}>
// 			<UserDescription
// 				name={name}
// 				tag={tag}
// 				location={location}
// 				avatar={avatar}
// 			/>
// 			<ul className={styles["stat-list"]}>
// 				<li>
// 					<span className={styles.label}>Followers</span>
// 					<span className={styles.quantity}>{stats.followers}</span>
// 				</li>
// 				<li>
// 					<span className={styles.label}>Views</span>
// 					<span className={styles.quantity}>{stats.views}</span>
// 				</li>
// 				<li>
// 					<span className={styles.label}>Likes</span>
// 					<span className={styles.quantity}>{stats.likes}</span>
// 				</li>
// 			</ul>
// 		</div>
// 	);
// };

// Profile.defaultProps = {
// 	stats: {
// 		followers: 0,
// 		views: 0,
// 		likes: 0,
// 	}
// }

// Profile.propTypes = {
// 	stats: {
// 		followers: PropTypes.number.isRequired,
// 		views: PropTypes.number.isRequired,
// 		likes: PropTypes.number.isRequired,
// 	}
// };

// export default Profile;