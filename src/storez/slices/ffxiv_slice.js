import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  main_dc: "Elemental",
};

export const ffxivSlice = createSlice({
  name: 'ffxiv',
  initialState,
  reducers: {
    // Action to set main_dc
    setMainDCStore: (state, action) => {
      state.value = action.payload;
    },

    // Special reducer for hydrating the state
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.ffxiv,
        };
      },
    },
  },
});

export const { setMainDCStore } = ffxivSlice.actions;
export const getMainDCStore = (state) => state.main_dc.value;
export default ffxivSlice.reducer;