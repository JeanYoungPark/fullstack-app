export enum ActionType {
    LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAILURE = "LOGIN_FAILURE",
    LOGOUT = "LOGOUT",
}

type LoginRequestAction = {
    type: ActionType.LOGIN_REQUEST;
};

type LoginSuccessAction = {
    type: ActionType.LOGIN_SUCCESS;
    payload: {
        token: string;
    };
};

type LoginFailureAction = {
    type: ActionType.LOGIN_FAILURE;
    payload: {
        error: string;
    };
};

type LogoutAction = {
    type: ActionType.LOGOUT;
};

export type AuthAction =
    | LoginRequestAction
    | LoginSuccessAction
    | LoginFailureAction
    | LogoutAction;
