import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { filter } from './filterSlice';

export const store = configureStore({
  reducer:{
    contacts : contactsSlice.reducer,
    filter: filter.reducer,

    
  }
})