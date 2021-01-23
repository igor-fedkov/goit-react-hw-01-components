import styled from 'styled-components';

const BaseRowStyles = `
	padding: 20px;
	min-height: 50px;
	text-align: center;
	font-size: 1em;
	color: #848b93;
	border: 1px solid #848b93;	
`;

const TransactionsTable = styled.table`
	margin-top: 20px;
	border-radius: 10px;
	border: 1px solid red;
	width: 960px;
	border-collapse: collapse;
	box-shadow: 1px 1px 3px 1px rgba(0,0,0,0.79);
`;

const Tr = styled.tr`
	&&:nth-child(even) {
		background-color: #ecf1f4;
	}
`;

const Th = styled.th`
	${BaseRowStyles};
	background-color: #00bcd5;
	color: white;
	border: 1px solid white;
	text-transform: uppercase;
`;

const Td = styled.td`
	${BaseRowStyles};	
`;

export { TransactionsTable, Tr, Th, Td };