import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState =  {
    photo: null
}

export const getPhoto = createAsyncThunk(
  'photo/getPhoto',
  async (id, thunkAPI) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
   
    return res.data;
  }
);

const photoSlice = createSlice({
  name: 'photo',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPhoto.fulfilled, (state, action) => {
      state.photo = action.payload;
    });
  },
});

export default photoSlice.reducer;
