import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import { toast } from "react-toastify";

export const fetchStartups = createAsyncThunk("startups/fetchAll", async () => {
  const res = await api.get("/startups");
  return res.data;
});

// export const addStartup = createAsyncThunk(
//   "startups/add",
//   async (newStartup) => {
//     const res = await api.post("/startups", newStartup);
//     toast.success("Startup ajoutée !");
//     return res.data;
//   }
// );

const startupSlice = createSlice({
  name: "startups",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStartups.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStartups.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchStartups.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // .addCase(addStartup.fulfilled, (state, action) => {
      //   state.items.push(action.payload);
      // });
  },
});

export default startupSlice.reducer;
