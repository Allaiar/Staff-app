import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from "../services/usersService"

const initialState = {
  users: [],
  loading: false,
  error: null,
}

export const getUsers = createAsyncThunk('getUsers', async (_, thunkApi) => {
  try {
    return usersService.getUsers();
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
})

export const deleteUser = createAsyncThunk('deleteUser', async (userData, thunkApi) => {
  try {
    return usersService.deleteUser(userData);
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
})

export const addUser = createAsyncThunk('addUser', async (userData, thunkApi) => {
  try {
    return usersService.addUser(userData);
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
})

export const editUser = createAsyncThunk('editUser', async (userData, thunkApi) => {
  try {
    return usersService.editUser(userData);
  } catch (error) {
    return thunkApi.rejectWithValue(error.response.data);
  }
  })

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter(
          (user) => user.id !== action.payload
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = false;
        const updatedUser = action.payload;
        const updatedUsers = state.users.map((user) => {
          if (user.id === updatedUser.id) {
            return { ...user, ...updatedUser };
          }
          return user;
        });
        state.users = updatedUsers;
      })
      .addCase(editUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const selectUsers = (state) => state.users.users;
export const selectLoading = (state) => state.users.loading;
export const selectError = (state) => state.users.error;

export default userSlice.reducer;