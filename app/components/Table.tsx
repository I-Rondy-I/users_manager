import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableTitle from './TableTitle';
import TableSearchField from './TableSearchField';
import TableRowUser from './TableRowUser';
import { User } from '../types/User';
import { FilterState } from '../slices/userSlice';

interface Props {
    users: User[];
    filters: {
        username: string;
        name: string;
        email: string;
        phone: string;
    };
    setFilter: (field: keyof FilterState, value: string) => void;
}

const BasicTable: React.FC<Props> = ({ users, filters, setFilter }) => {
    return (
        <div>
            <TableTitle>Users List</TableTitle>
            <TableContainer
                component={Paper}
                sx={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '2px solid #00796b',
                }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="enhanced table">
                    <TableHead sx={{ backgroundColor: '#00796b' }}>
                        <TableRow>
                            <TableCell sx={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.05em' }}>
                                Username
                                <TableSearchField
                                    value={filters.username}
                                    onChange={(e) => setFilter('username', e.target.value)}
                                    placeholder="Search username"
                                />
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.05em' }}>
                                Name
                                <TableSearchField
                                    value={filters.name}
                                    onChange={(e) => setFilter('name', e.target.value)}
                                    placeholder="Search name"
                                />
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.05em' }}>
                                Email
                                <TableSearchField
                                    value={filters.email}
                                    onChange={(e) => setFilter('email', e.target.value)}
                                    placeholder="Search email"
                                />
                            </TableCell>
                            <TableCell align="center" sx={{ color: 'white', fontWeight: 'bold', fontSize: '1rem', letterSpacing: '0.05em' }}>
                                Phone
                                <TableSearchField
                                    value={filters.phone}
                                    onChange={(e) => setFilter('phone', e.target.value)}
                                    placeholder="Search phone"
                                />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRowUser key={user.id} user={user} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BasicTable;
