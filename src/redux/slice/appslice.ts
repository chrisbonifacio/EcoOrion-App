import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  isLoading: boolean;
  profileCreated: boolean;
  headerTitle: string;
  email: string;
}

const initialState: AppState = {
  isLoading: false,
  profileCreated: false,
  headerTitle: '',
  email: '',
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
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
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
  updateEmail,
} = appSlice.actions;

export default appSlice.reducer;
