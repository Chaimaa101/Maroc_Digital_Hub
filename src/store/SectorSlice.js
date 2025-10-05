import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import { toast } from "react-toastify";



const sectorSlice = createSlice({
     name: "sectors",
  initialState: {
    items: [],
    loading: false,
  },
});

export default sectorSlice.reducer;
