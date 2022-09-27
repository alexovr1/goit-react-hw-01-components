import PropTypes from 'prop-types';
import { Table, TableHead, TableBorder, TableData } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <Table>
        <TableHead>
            <TableBorder>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </TableBorder>
        </TableHead>

        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <TableBorder key={id}>
                    <TableData>{type}</TableData>
                    <TableData>{amount}</TableData>
                    <TableData>{currency}</TableData>
                </TableBorder>))}
        </tbody>
    </Table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired

    )
}