import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const world_slice = createSlice({
	name: "world",
	initialState: {
		worlds: [],
	},
	reducers: {
		setWorlds: (state, action) => {
			state.worlds = action.payload;
		},
	},
});

const worldPersistConfig = {
	key: "world",
	storage: storage,
	whitelist: [],
};

export const world_reducer = persistReducer(
	worldPersistConfig,
	world_slice.reducer
);

export const { setWorlds } = world_slice.actions;

export const selectWorlds = (state) => state.world.worlds;
