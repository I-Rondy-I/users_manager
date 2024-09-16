"use client";

import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';
import { setFilter } from './slices/userSlice';
import BasicTable from './components/Table';
import { useEffect, useState } from 'react';
import { User } from './types/User'; // Импортируем интерфейс User

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const filters = useSelector((state: RootState) => state.users.filters);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filters.phone.toLowerCase())
  );

  const handleFilterChange = (field: keyof typeof filters, value: string) => {
    dispatch(setFilter({ field, value }));
  };

  return (
      <div>
        <BasicTable users={filteredUsers} filters={filters} setFilter={handleFilterChange} />
      </div>
  );
}
