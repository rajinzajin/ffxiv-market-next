import { createSlice } from "@reduxjs/toolkit";

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

export const { setWorlds } = world_slice.actions;

export const selectWorlds = (state) => state.world.worlds;
