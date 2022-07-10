import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
 
export const getTodos = createAsyncThunk(
  '/todos',
  async (name, thunkAPI) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
      return res.data;
    } catch (error) {
        console.log(error)
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
);

const initialState = {
    loading: false, 
    items: []
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.loading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
       console.log(action);
       state.loading = false;
    },
  },
});

 
export default  todosSlice.reducer;
