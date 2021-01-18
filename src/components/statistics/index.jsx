import React from 'react';
import PropTypes from 'prop-types';
import randColor from '../../secondaryFunctions/random-color';
import styled from 'styled-components';

const ListItem = styled.li`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 60px;
	width: calc(100% / ${props => props.countElements});
	background-color: RGB(${() => randColor()});
	color: white;
`;

const Label = styled.span`
`;

const Percentage = styled.span`
	margin-top: 10px;
`;

const Section = styled.section`
	width: 375px;
	box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.79);
`;

const Title = styled.h2`
	margin: 0;
	padding: 30px 0px;

	width: 100%;
	text-transform: uppercase;
	text-align: center;
`;

const StatList = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0;
	padding: 0;
	list-style: none;
`;

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
