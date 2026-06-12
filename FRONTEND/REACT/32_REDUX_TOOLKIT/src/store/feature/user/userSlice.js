import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
    } catch (error) {
      return rejectWithValue("Something Went Wrong...");
    }

    return data;
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (addBuilder) => {
    addBuilder.addCase(fetchUser.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });
    addBuilder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    addBuilder.addCase(fetchUser.rejected, (state, action) => {
      console.log(action);
      state.loading = false;
      // state.error = action.error.message;
      state.error = action.payload;
    });
  },
});

export const { fetchUsers } = userSlice.actions;
export { fetchUser };
export default userSlice.reducer;
