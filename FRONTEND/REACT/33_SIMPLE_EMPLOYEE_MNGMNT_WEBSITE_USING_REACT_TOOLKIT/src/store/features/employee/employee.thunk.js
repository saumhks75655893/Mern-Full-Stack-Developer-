import { asyncThunkCreator, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../config/axiosInstance";
import Loading from "../../../components/loading/Loading";

export const getEmployees = createAsyncThunk(
  "employees/getEmployees",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("employee");
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);

export const postEmployees = createAsyncThunk(
  "employees/postEmployees",
  async (details, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post("employee", details);
      dispatch(getEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);

export const deleteEmployee = createAsyncThunk(
  "employees/deleteEmployee",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`employee/${id}`);
      dispatch(getEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);

export const updateEmployee = createAsyncThunk(
  "employees/updateEmployee",
  async ({ id, details }, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.put(`employee/${id}`, details);
      dispatch(getEmployees());
      return response.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  },
);
