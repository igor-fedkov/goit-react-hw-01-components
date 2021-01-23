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

const AvatarEl = styled.img`
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

export { Ul, Li, Status, AvatarEl, Name };