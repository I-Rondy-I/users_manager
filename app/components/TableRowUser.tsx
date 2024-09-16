import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/system';
import { User } from '../types/User';

const RoundedContent = styled('div')({
    display: 'inline-block',
    padding: '10px 20px',
    borderRadius: '50px',
    border: '2px solid #00796b',
    backgroundColor: '#f5f5f5',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    fontWeight: 500,
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
    maxWidth: '100%',
    overflowWrap: 'break-word',
});

const HoverTableRow = styled(TableRow)({
    '&:hover': {
        backgroundColor: '#e0e0e0',
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease, background-color 0.3s ease',
    },
});

const TableRowUser: React.FC<{ user: User }> = ({ user }) => {
    return (
        <HoverTableRow
            sx={{
                borderBottom: '2px solid #000000',
            }}
        >
            <TableCell
                component="th"
                scope="row"
                sx={{
                    textAlign: 'center',
                    backgroundColor: '#ccffcc',
                }}
            >
                <RoundedContent>{user.username}</RoundedContent>
            </TableCell>
            <TableCell
                align="center"
                sx={{
                    backgroundColor: '#ffecb3',
                }}
            >
                <RoundedContent>{user.name}</RoundedContent>
            </TableCell>
            <TableCell
                align="center"
                sx={{
                    color: '#00796b',
                    backgroundColor: '#cfe8fc',
                }}
            >
                <RoundedContent>
                    <a href={`mailto:${user.email}`} style={{ textDecoration: 'none', color: '#00796b', fontWeight: 500 }}>
                        {user.email}
                    </a>
                </RoundedContent>
            </TableCell>
            <TableCell
                align="center"
                sx={{
                    color: '#00796b',
                    backgroundColor: '#ffe0b2',
                }}
            >
                <RoundedContent>
                    <a href={`tel:${user.phone}`} style={{ textDecoration: 'none', color: '#00796b', fontWeight: 500 }}>
                        {user.phone}
                    </a>
                </RoundedContent>
            </TableCell>
        </HoverTableRow>
    );
};

export default TableRowUser;
