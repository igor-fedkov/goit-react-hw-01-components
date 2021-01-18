import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import firstLetterToUpperCase from '../../secondaryFunctions/firstLetterToUpperCase.js';

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

const TableRow = ({ type, amount, currency }) => {
	return (
		<Tr>
			<Td>{firstLetterToUpperCase(type)}</Td>
			<Td>{amount}</Td>
			<Td>{currency}</Td>
		</Tr>
	);
};

TableRow.propTypes = {
	type: PropTypes.string.isRequired,
	amount: PropTypes.string.isRequired,
	currency: PropTypes.string.isRequired,
};

const TransactionHistory = ({ items }) => {
	const tableRows = items.map(({ id, type, amount, currency }) => 
		<TableRow
			key={id}
			type={type}
			amount={amount}
			currency={currency}
		/>
	);

	return (
		// <table class="transaction-history">
		<TransactionsTable>
			<thead>
				<tr>
					<Th>Type</Th>
					<Th>Amount</Th>
					<Th>Currency</Th>
				</tr>
			</thead>

			<tbody>
				{tableRows}
			</tbody>
		</TransactionsTable>
	);
};

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		amount: PropTypes.string.isRequired,
		currency: PropTypes.string.isRequired,
	}))
};

export default TransactionHistory;