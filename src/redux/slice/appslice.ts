import { createSlice } from '@reduxjs/toolkit';

export interface AppState {
  isLoading: boolean;
  isLoggedIn: boolean;
  profileCreated: boolean;
  appReady: boolean;
}

const initialState: AppState = {
  isLoading: false,
  isLoggedIn: false,
  profileCreated: false,
  appReady: false,
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
    setLoggedIn: state => {
      state.isLoggedIn = true;
    },
    resetLoggedIn: state => {
      state.isLoggedIn = false;
    },
    setProfileCreated: state => {
      state.profileCreated = true;
    },
    resetProfileCreated: state => {
      state.profileCreated = false;
    },
    setAppReady: state => {
      state.appReady = true;
    },
    resetAppReady: state => {
      state.appReady = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  finishLoading,
  setLoggedIn,
  resetLoggedIn,
  setProfileCreated,
  resetProfileCreated,
  setAppReady,
  resetAppReady,
} = appSlice.actions;

export default appSlice.reducer;
