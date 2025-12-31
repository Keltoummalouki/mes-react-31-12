import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FilterValue } from '../types/todo';

interface FilterState {
  value: FilterValue;
}

const initialState: FilterState = {
  value: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterValue>) => {
      state.value = action.payload;
    },
  },
});

const filterSliceReducer = filterSlice.reducer;
export default filterSliceReducer;
