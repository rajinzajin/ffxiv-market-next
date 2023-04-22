import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const ffxivslice = createSlice({
	name: "ffxiv",
	initialState: {
		main_dc: null,
		worlds: [],
	},
	reducers: {
		setDCRedux: (state, action) => {
			state.main_dc = action.payload;
		},
		setWorldsStore: (state, action) => {
			state.worlds = action.payload;
		},
	},
});
// config the store
const store = configureStore({
	reducer: {
		ffxiv: ffxivslice.reducer,
	},
});

// export default the store
export default store;

// export the action
export const { setDCRedux, setWorldsStore } = ffxivslice.actions;

export const selectDCRedux = (state) => state.ffxiv.main_dc;
export const selectWorldsStore = (state) => state.ffxiv.worlds;