import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import { toast } from "react-toastify";

export const fetchEvents = createAsyncThunk("events/fetchAll", async () => {
  const res = await api.get("/evenements");
  return res.data;
});

const eventSlice = createSlice({
  name: "events",
  initialState: {
    items: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchEvents.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default eventSlice.reducer;
