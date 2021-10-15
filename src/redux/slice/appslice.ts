import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  isLoading: boolean;
  profileCreated: boolean;
  headerTitle: string;
}

const initialState: AppState = {
  isLoading: false,
  profileCreated: false,
  headerTitle: '',
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
    updateHeaderTitle: (state, action: PayloadAction<string>) => {
      state.headerTitle = action.payload;
    },
    resetHeaderTitle: state => {
      state.headerTitle = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  finishLoading,
  setProfileCreated,
  resetProfileCreated,
  updateHeaderTitle,
  resetHeaderTitle,
} = appSlice.actions;

export default appSlice.reducer;
