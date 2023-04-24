import { createSlice } from "@reduxjs/toolkit";

export const data_center_slice = createSlice({
	name: "data_center",
	initialState: {
		main_dc: {},
		data_centers: [],
	},
	reducers: {
		setMainDC: (state, action) => {
			state.main_dc = action.payload;
		},
		setDataCenters: (state, action) => {
			state.data_centers = action.payload;
		},
	},
});

export const dc_reducer = data_center_slice.reducer

export const { setDataCenters, setMainDC } = data_center_slice.actions;

export const selectDataCenters = (state) => state.data_center.data_centers;
export const selectMainDC = (state) => state.data_center.main_dc;
