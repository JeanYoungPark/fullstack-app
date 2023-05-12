import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Token {
    token: string
}

interface AuthState {
    isLoggedIn: boolean;
    token: Token | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: null,
};


const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<Token>) => {
            state.isLoggedIn = true;
            state.token = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;