import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface initialStateTypes {
  isLoggedIn: boolean;
  isLoading: boolean;
  userType: "user"|"driver"|"bus";
  isOnline:boolean;
}

const initialState:initialStateTypes = {
  isLoggedIn: false,  
  isLoading: false,
  userType : 'user',
  isOnline : false
                     
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setUserType(state, action:PayloadAction<initialStateTypes["userType"]>) {
      state.userType = action.payload;
    },
    setIsOnline(state, action:PayloadAction<boolean>) {
      state.isOnline = action.payload;
    },

  },
});
export const { setLoggedIn ,setIsLoading,setUserType ,setIsOnline} = userSlice.actions;
export default userSlice.reducer;