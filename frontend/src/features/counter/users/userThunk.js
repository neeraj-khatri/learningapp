import { createAsyncThunk } from '@reduxjs/toolkit';

// Thunk function to fetch users
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data; // returned data goes to fulfilled action
  }
);
