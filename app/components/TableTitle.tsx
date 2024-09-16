import React from 'react';
import { styled } from '@mui/system';

const Title = styled('h1')({
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#00796b',
    marginBottom: '20px',
    fontFamily: 'sans-serif',
});

const TableTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Title>{children}</Title>;
};

export default TableTitle;
