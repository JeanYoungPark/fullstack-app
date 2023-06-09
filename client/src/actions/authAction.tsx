// 사용x 참고용
import { ActionType } from "./authActionType";

export const loginSuccess = (token: String) => ({
    type: ActionType.LOGIN_SUCCESS,
    payload: token,
});

export const logout = () => ({
    type: ActionType.LOGOUT,
});
