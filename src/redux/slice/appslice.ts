import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  isLoading: boolean;
  profileCreated: boolean;
}

const initialState: AppState = {
  isLoading: false,
  profileCreated: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: state => {
      state.isLoading = true;
    },
    finishLoading: state => {
      state.isLoading = false;
    },
    setProfileCreated: state => {
      state.profileCreated = true;
    },
    resetProfileCreated: state => {
      state.profileCreated = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  finishLoading,
  setProfileCreated,
  resetProfileCreated,
} = appSlice.actions;

export default appSlice.reducer;
