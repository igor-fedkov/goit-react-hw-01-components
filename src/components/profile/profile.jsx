import React from 'react';
import PropTypes from 'prop-types';

import { DescriptionEl, AvatarEl, NameEl, TagEl, LocationEl, ProfileEl, StatListEl, StatItemEl, LabelEl, QuantityEl } from './profile.css';

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
	name: PropTypes.string.isRequired,
	tag: PropTypes.string,
	location: PropTypes.string,
	avatar: PropTypes.string,
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