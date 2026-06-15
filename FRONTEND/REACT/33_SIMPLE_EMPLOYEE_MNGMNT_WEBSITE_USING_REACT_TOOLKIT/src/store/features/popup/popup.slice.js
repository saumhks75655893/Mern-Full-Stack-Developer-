import { createSlice } from "@reduxjs/toolkit";

const initialState = { employeePopup: false, deletePopup: false };

export const counterSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    openEmployeePopup: (state, action) => {
      state.employeePopup = action.payload ?? true;
    },
    closeEmployeePopup: (state, action) => {
      state.employeePopup = false;
    },
    openDeletePopup: (state, action) => {
      state.deletePopup = action.payload ?? true;
    },
    closeDeletePopup: (state, action) => {
      state.deletePopup = false;
    },
  },
});

export const {
  openEmployeePopup,
  closeEmployeePopup,
  openDeletePopup,
  closeDeletePopup,
} = counterSlice.actions;
export default counterSlice.reducer;
