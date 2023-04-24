import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { dc_reducer } from "./reducers/data_center_reducer";
import { world_reducer } from "./reducers/world_reducer";

// create a slice
export const ffxivslice = createSlice({
	name: "ffxiv",
	initialState: {
		market_activity: [],
		marketable_items: {},
		selected_market_event: {},
	},
	reducers: {
		addNewMarketActivity: (state, action) => {
			state.market_activity.push(action.payload);
			if (state.market_activity.length > 9) state.market_activity.shift();
		},
		setMarketableItemsStore: (state, action) => {
			state.marketable_items = action.payload;
		},
		setSelectedMarketEvent: (state, action) => {
			state.selected_market_event = action.payload;
		},
	},
});

// config the store
const store = configureStore({
	reducer: {
		ffxiv: ffxivslice.reducer,
		data_center: dc_reducer,
		world: world_reducer,
	}
});

export { store };
// export the action
export const {
	addNewMarketActivity,
	setMarketableItemsStore,
	setSelectedMarketEvent,
} = ffxivslice.actions;

export const selectMarketActivityStore = (state) => state.ffxiv.market_activity;
export const selectMarketableItemsStore = (state) =>
	state.ffxiv.marketable_items;
export const selectSelectedMarketEvent = (state) =>
	state.ffxiv.selected_market_event;
