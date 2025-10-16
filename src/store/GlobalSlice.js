import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";
import { toast } from "react-toastify";

export const fetchData = createAsyncThunk(
  "global/fetchData",
  async (section) => {
    const res = await api.get(`/${section}`);
    return { section, data: res.data };
  }
);

export const ajouter = createAsyncThunk(
  "global/ajouter",
  async ({ section, newItem }, { rejectWithValue }) => {
    try {
      let finalData = { ...newItem };

      if (newItem.image instanceof File) {
        const imageUrl = await uploadToCloudinary(newItem.image);
        finalData.image = imageUrl;
      }

      finalData.createdAt = new Date().toLocaleDateString();

      const res = await api.post(`/${section}`, finalData);
      toast.success(`✅ ${section} ajouté avec succès !`);
      return { section, data: res.data };
    } catch (error) {
      console.error("❌ Erreur lors de l'ajout:", error);
      toast.error(`❌ Erreur lors de l'ajout de ${section}`);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


export const supprimer = createAsyncThunk(
  "global/supprimer",
  async ({ section, id }, { rejectWithValue }) => {
    try {
      await api.delete(`/${section}/${id}`);
      toast.success(`✅ ${section} supprimé !`);
      return { section, id };
    } catch (error) {
      console.error("❌ Erreur lors de la suppression:", error);
      toast.error(`❌ Erreur lors de la suppression de ${section}`);
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchById = createAsyncThunk(
  "global/fetchById",
  async ({ section, id }) => {
    const res = await api.get(`/${section}/${id}`);
    return { section, data: res.data };
  }
);

const globalSlice = createSlice({
  name: "global",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        const { section, data } = action.payload;
        state.loading = false;
        state.data[section] = data;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(ajouter.fulfilled, (state, action) => {
        const { section, data } = action.payload;
        if (!state.data[section]) {
          state.data[section] = [];
        }
        state.data[section].push(data);
      })

      .addCase(supprimer.fulfilled, (state, action) => {
        const { section, id } = action.payload;
        state.data[section] = state.data[section].filter(
          (item) => item.id !== id
        );
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        const { section, data } = action.payload;
        state.data[`${section}Selected`] = data;
      });
  },
});

export default globalSlice.reducer;
