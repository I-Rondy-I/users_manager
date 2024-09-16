import React from 'react';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';

const StyledTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        borderRadius: 30,
        backgroundColor: '#f5f5f5',
        transition: 'all 0.3s ease',
    },
    '& .MuiOutlinedInput-root:hover': {
        backgroundColor: '#e0f7fa',
    },
    '& .MuiOutlinedInput-root.Mui-focused': {
        backgroundColor: '#b2ebf2',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
});

interface SearchFieldProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const TableSearchField: React.FC<SearchFieldProps> = ({ value, onChange, placeholder }) => {
    return (
        <StyledTextField
            variant="outlined"
            size="small"
            fullWidth
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default TableSearchField;
