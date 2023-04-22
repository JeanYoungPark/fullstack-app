import { AuthAction } from "../actions/authActionType";

export interface AuthState {
    isLoggedIn: boolean;
    token: string | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: null,
};

const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLogginIn: true,
                token: action.payload.token,
            };
        case "LOGOUT":
            return {
                ...state,
                isLogginIn: false,
                token: null,
            };
        default:
            return state;
    }
};

export default authReducer;
