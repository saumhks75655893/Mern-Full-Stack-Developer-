import { configureStore, createSlice } from "@reduxjs/toolkit";
import {
  deleteEmployee,
  getEmployees,
  postEmployees,
  updateEmployee,
} from "./employee.thunk";

const initialState = {
  employees: [],
  loading: true,
  error: null,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // fetching data
    (builder.addCase(getEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(getEmployees.fulfilled, (state, action) => {
        ((state.employees = action.payload), (state.loading = false));
      }));
    builder.addCase(getEmployees.rejected, (state, action) => {
      ((state.loading = false), (state.error = action.payload));
    });

    // posting data
    (builder.addCase(postEmployees.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(postEmployees.fulfilled, (state, action) => {
        state.loading = false;
      }));

    builder.addCase(postEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // deleting data
    (builder.addCase(deleteEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(deleteEmployee.fulfilled, (state, action) => {
        state.loading = false;
      }));

    builder.addCase(deleteEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // updating data
    (builder.addCase(updateEmployee.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(updateEmployee.fulfilled, (state, action) => {
        state.loading = false;
      }));

    builder.addCase(updateEmployee.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;
