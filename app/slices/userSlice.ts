import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
    username: string;
    name: string;
    email: string;
    phone: string;
}

const initialState: { filters: FilterState } = {
    filters: {
        username: '',
        name: '',
        email: '',
        phone: '',
    },
};

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setFilter(state, action: PayloadAction<{ field: keyof FilterState; value: string }>) {
            state.filters[action.payload.field] = action.payload.value;
        },
    },
});

export const { setFilter } = userSlice.actions;
export default userSlice.reducer;
