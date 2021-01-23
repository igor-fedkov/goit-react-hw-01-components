import React from 'react';
import PropTypes from 'prop-types';

import firstLetterToUpperCase from '../../secondaryFunctions/firstLetterToUpperCase.js';

import { TransactionsTable, Tr, Th, Td } from './transactionHistory.css';

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