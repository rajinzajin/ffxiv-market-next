import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const ffxivslice = createSlice({
	name: "ffxiv",
	initialState: {
		main_dc: "",
	},
	reducers: {
		setDCRedux: (state, action) => {
			state.main_dc = action.payload;
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
export const { setDCRedux } = ffxivslice.actions;

export const selectDCRedux = (state) => state.ffxiv.main_dc;
