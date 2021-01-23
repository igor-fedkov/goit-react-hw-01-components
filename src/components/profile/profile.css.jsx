import styled from 'styled-components';

const secondaryColor = '#768696';

const DescriptionEl = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 30px 0px;

	min-height: 255px;

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

export { DescriptionEl, AvatarEl, NameEl, TagEl, LocationEl, ProfileEl, StatListEl, StatItemEl, LabelEl, QuantityEl };