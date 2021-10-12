import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  userName: string;
  loggedIn: boolean;
}

const initialState: AuthState = {
  userName: '',
  loggedIn: true,
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
    setLoggedIn: state => {
      state.loggedIn = true;
    },
    resetLoggedIn: state => {
      state.loggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUserName, resetUserName, setLoggedIn, resetLoggedIn } =
  authSlice.actions;

export default authSlice.reducer;
