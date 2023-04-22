import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { ffxivSlice } from './slices/ffxiv_slice';

const makeStore = () =>
  configureStore({
    reducer: {
        [ffxivSlice.name]: ffxivSlice.reducer
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);