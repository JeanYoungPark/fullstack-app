// 사용x 참고용
import { AuthAction } from "../actions/authActionType";

export interface Token {
    token: string;
  }

export interface AuthState {
    isLoggedIn: boolean;
    token: Token | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: null,
};

const authReducer = (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload,
            };
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                token: null,
            };
        default:
            return state;
    }
};

export default authReducer;
