// 사용x 참고용
export enum ActionType {
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGOUT = "LOGOUT",
}

type LoginSuccessAction = {
    type: ActionType.LOGIN_SUCCESS;
    payload: {
        token: string;
    };
};

type LogoutAction = {
    type: ActionType.LOGOUT;
};

export type AuthAction = LoginSuccessAction | LogoutAction;
