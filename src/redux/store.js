import { configureStore } from '@reduxjs/toolkit';
import { myValueSlice, myItem } from './slice';
export const store = configureStore({
  reducer: {
    myValue: myValueSlice.reducer,
    item: myItem.reducer,
  },
});

export const { increment, decrement } = myValueSlice.actions;
export const { addTodo } = myItem.actions;
