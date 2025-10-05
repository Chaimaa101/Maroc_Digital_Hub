import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import { toast } from "react-toastify";



const forumSlice = createSlice({
     name: "forum",
  initialState: {
    items: [],
    loading: false,
  },
});

export default forumSlice.reducer;
