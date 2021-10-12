import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  userName: string;
}

const initialState: AuthState = {
  userName: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    resetUserName: state => {
      state.userName = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserName, resetUserName } = authSlice.actions;

export default authSlice.reducer;
