import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  authStatus: string;
  userName: string;
}

const initialState: AuthState = {
  authStatus: 'signIn',
  userName: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateAuthStatus: (state, action: PayloadAction<string>) => {
      state.authStatus = action.payload;
    },
    resetAuthStatus: state => {
      state.authStatus = 'signIn';
    },
    updateUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    resetUserName: state => {
      state.authStatus = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateAuthStatus,
  resetAuthStatus,
  updateUserName,
  resetUserName,
} = authSlice.actions;

export default authSlice.reducer;
