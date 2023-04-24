import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { dc_reducer } from "./reducers/data_center_reducer";
import storage from "redux-persist/lib/storage";
import { world_reducer } from "./reducers/world_reducer";
import { persistStore } from "redux-persist";
import { persistReducer } from "redux-persist";

// create a slice
export const ffxivslice = createSlice({
	name: "ffxiv",
	initialState: {
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

const ffxivPersistConfig = {
	key: "ffxiv",
	storage: storage,
	whitelist: [],
};

export const ffxiv_reducer = persistReducer(
	ffxivPersistConfig,
	ffxivslice.reducer
);

// config the store
const store = configureStore({
	reducer: {
		ffxiv: ffxiv_reducer,
		data_center: dc_reducer,
		world: world_reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
const persiststore = persistStore(store);

export { store, persiststore };
// export the action
export const { addNewMarketActivity, setMarketableItemsStore } =
	ffxivslice.actions;

export const selectMarketActivityStore = (state) => state.ffxiv.market_activity;
export const selectMarketableItemsStore = (state) =>
	state.ffxiv.marketable_items;
