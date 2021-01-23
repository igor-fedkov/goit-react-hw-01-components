import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, Label, Percentage, Section, Title, StatList } from './statistics.css';

const StatisticalItem = ({label, percentage, countElements}) => {
	return (
		<ListItem countElements={countElements}>
			<Label>{label}</Label>
			<Percentage>{percentage}%</Percentage>
    </ListItem>
	);
};

StatisticalItem.propTypes = {
	label: PropTypes.string,
	percentage: PropTypes.number,
}

const Statistics = ({ title, stats }) => {
	const statItems = stats.map(({id, label, percentage}) => 
		<StatisticalItem
			key={id}
			label={label}
			percentage={percentage}
			countElements={stats.length}
		/>
	);

	return (
		<Section>
			{
				title !== undefined &&
				<Title>{title}</Title>
			}			

			<StatList>
				{statItems}
			</StatList>
		</Section>
	);
};

Statistics.propTypes = {
	title: PropTypes.string,
}

export default Statistics
