import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// create a slice
export const ffxivslice = createSlice({
	name: "ffxiv",
	initialState: {
		main_dc: {},
		worlds: [],
		data_centers: [],
		market_activity: [],
		marketable_items: {}
	},
	reducers: {
		setDCRedux: (state, action) => {
			state.main_dc = action.payload;
		},
		setWorldsStore: (state, action) => {
			state.worlds = action.payload;
		},
		setDataCentersStore: (state, action) => {
			state.data_centers = action.payload;
		},
		addNewMarketActivity: (state, action) => {
			state.market_activity.push(action.payload);
			if (state.market_activity.length > 9) state.market_activity.shift();
		},
		setMarketableItemsStore: (state, action) => {
			state.marketable_items = action.payload;
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
export const {
	setDCRedux,
	setWorldsStore,
	setDataCentersStore,
	addNewMarketActivity,
	setMarketableItemsStore
} = ffxivslice.actions;

export const selectDCRedux = (state) => state.ffxiv.main_dc;
export const selectWorldsStore = (state) => state.ffxiv.worlds;
export const selectDataCentersStore = (state) => state.ffxiv.data_centers;
export const selectMarketActivityStore = (state) => state.ffxiv.market_activity;
export const selectMarketableItemsStore = (state) => state.ffxiv.marketable_items;
