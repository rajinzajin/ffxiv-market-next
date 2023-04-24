import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { data_center_slice } from "./reducers/data_center_reducer";
import { world_slice } from "./reducers/world_reducer";

// create a slice
export const ffxivslice = createSlice({
	name: "ffxiv",
	initialState: {
		worlds: [],
		market_activity: [],
		marketable_items: {},
	},
	reducers: {
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
		data_center: data_center_slice.reducer,
		world: world_slice.reducer
	},
});

// export default the store
export default store;

// export the action
export const {
	addNewMarketActivity,
	setMarketableItemsStore,
} = ffxivslice.actions;

export const selectMarketActivityStore = (state) => state.ffxiv.market_activity;
export const selectMarketableItemsStore = (state) =>
	state.ffxiv.marketable_items;
